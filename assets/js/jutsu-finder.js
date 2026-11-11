(() => {
  'use strict';
  const base = document.body.dataset.base || '';
  const pageSize = 50;
  const ranks = ['E-Rank', 'D-Rank', 'C-Rank', 'B-Rank', 'A-Rank', 'S-Rank'];
  const damageTypes = new Set(['Blunt', 'Slashing', 'Piercing', 'Energy']);
  const normal = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/−/g, '-');
  const terms = value => normal(value).split(/[\s,]+/).filter(Boolean);
  let index;

  function prepare(row) {
    const fields = Object.entries(row.stats).map(([key, value]) => key + ' ' + value);
    row.search = normal([row.english, row.japanese, row.script, row.school, row.rank, ...row.tags, ...fields].join(' '));
    row.damageSearch = normal([row.stats.damage || '', row.stats['combo bonus'] || '', row.stats['combo counter'] || '', ...row.tags.filter(tag => damageTypes.has(tag))].join(' '));
    return row;
  }

  async function init() {
    const panel = document.querySelector('[data-jutsu-finder]');
    if (!panel || panel.dataset.ready) return;
    panel.dataset.ready = 'true';
    const find = selector => panel.querySelector(selector);
    const count = find('[data-count]');
    const retry = find('[data-retry]');
    let rows;
    try {
      index ||= fetch(base + '/assets/data/jutsu-index.json').then(response => {
        if (!response.ok) throw Error('Jutsu index unavailable');
        return response.json();
      }).then(data => data.map(prepare));
      rows = await index;
    } catch {
      index = null;
      count.textContent = 'The technique list could not load.';
      retry.hidden = false;
      retry.onclick = () => { delete panel.dataset.ready; retry.hidden = true; init(); };
      return;
    }
    if (!panel.isConnected) return;
    const controls = Object.fromEntries([...panel.querySelectorAll('[name]')].map(el => [el.name, el]));
    const rankOf = row => row.rank || 'No listed rank';
    function options(select, values) {
      for (const value of values) select.add(new Option(value, value));
    }
    options(controls.rank, [...new Set(rows.map(rankOf))].sort((a, b) => rankOrder(a) - rankOrder(b)));
    options(controls.school, [...new Set(rows.map(row => row.school))].sort((a,b) => a.localeCompare(b)));
    options(controls.tag, [...new Set(rows.flatMap(row => row.tags))].sort((a,b) => a.localeCompare(b, undefined, {numeric:true})));
    function rankOrder(rank) {
      const i = ranks.indexOf(rank);
      return i < 0 ? ranks.length : i;
    }

    const saved = history.state?.jutsuFinder || {};
    for (const name of ['query','rank','school','damage','sort']) {
      if (saved[name]) controls[name].value = saved[name];
    }
    let page = saved.page || 0;
    const selectedTags = new Set(saved.tags || []);
    const tbody = find('tbody');
    const chips = find('.jf-tags');
    function renderTags() {
      chips.replaceChildren();
      for (const tag of selectedTags) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = tag + ' ×';
        button.setAttribute('aria-label', 'Remove ' + tag + ' filter');
        button.onclick = () => { selectedTags.delete(tag); renderTags(); refresh(); controls.tag.focus(); };
        chips.append(button);
      }
    }
    function cell(tr, text) {
      const td = tr.insertCell();
      td.textContent = text || '—';
      return td;
    }
    function rowElement(row) {
      const tr = document.createElement('tr');
      const name = tr.insertCell();
      const link = document.createElement('a');
      link.href = base + row.url;
      link.textContent = row.english;
      const reading = document.createElement('small');
      reading.textContent = row.script + ' · ' + row.japanese;
      name.append(link, reading);
      const s = row.stats;
      const rankCell = cell(tr, row.rank);
      if (row.rank) {
        const badge = document.createElement('span');
        badge.className = 'jutsu-rank-badge';
        badge.textContent = row.rank;
        rankCell.replaceChildren(badge);
      }
      cell(tr, row.school);
      const speed = cell(tr, s.speed);
      for (const key of ['seal speed','delay']) {
        if (s[key]) {
          const detail = document.createElement('small');
          detail.textContent = (key === 'delay' ? 'Delay ' : 'Seals ') + s[key];
          speed.append(detail);
        }
      }
      const cost = ['chakra','stamina','chakra or stamina','cost','upkeep','special upkeep','gallons requirement','gallons','gallon'].filter(key => s[key])
        .map(key => key === 'cost' ? s[key] : key[0].toUpperCase() + key.slice(1) + ' ' + s[key]);
      cell(tr, cost.join(' · '));
      const combo = s['combo bonus'] || s['combo counter'];
      cell(tr, [s.damage, combo && 'Combo: ' + combo].filter(Boolean).join(' · '));
      cell(tr, [s.range, ...['area','line','cone','cube'].filter(key => s[key]).map(key => key + ' ' + s[key])].filter(Boolean).join(' · '));
      const tagCell = cell(tr, '');
      if (row.tags.length) {
        const badges = row.tags.map(tag => {
          const badge = document.createElement('span');
          badge.className = 'jutsu-keyword';
          badge.dataset.tone = window.emberKeywordTone(tag);
          badge.textContent = tag;
          return badge;
        });
        tagCell.replaceChildren(...badges);
      }
      return tr;
    }
    function printedSpeed(row) {
      return /^\d+(?:\s*,\s*Delay\b.*)?$/i.test(row.stats.speed || '') ? parseInt(row.stats.speed,10) : Infinity;
    }
    function render() {
      const query = terms(controls.query.value);
      const damage = terms(controls.damage.value);
      const matches = rows.filter(row =>
        (!controls.rank.value || rankOf(row) === controls.rank.value) &&
        (!controls.school.value || row.school === controls.school.value) &&
        [...selectedTags].every(tag => row.tags.includes(tag)) &&
        query.every(word => row.search.includes(word)) && damage.every(word => row.damageSearch.includes(word)));
      if (controls.sort.value === 'rank') matches.sort((a,b) => rankOrder(a.rank) - rankOrder(b.rank));
      if (controls.sort.value === 'speed') matches.sort((a,b) => printedSpeed(a) - printedSpeed(b));
      page = Math.max(0, Math.min(page, Math.ceil(matches.length / pageSize) - 1));
      const start = page * pageSize;
      const visible = matches.slice(start, start + pageSize);
      tbody.replaceChildren(...visible.map(rowElement));
      count.textContent = matches.length ? (start + 1) + '–' + (start + visible.length) + ' of ' + matches.length + ' techniques' : 'No matching techniques. Clear a filter or try another search.';
      find('[data-prev]').disabled = page === 0;
      find('[data-next]').disabled = start + visible.length >= matches.length;
      find('.jf-scroll').scrollTop = 0;
      history.replaceState({...history.state, jutsuFinder:{
        query:controls.query.value, damage:controls.damage.value, rank:controls.rank.value,
        school:controls.school.value, sort:controls.sort.value, tags:[...selectedTags], page
      }}, '');
    }
    function refresh() { page = 0; render(); }
    controls.query.oninput = controls.damage.oninput = refresh;
    controls.rank.onchange = controls.school.onchange = controls.sort.onchange = refresh;
    controls.tag.onchange = () => {
      if (controls.tag.value) selectedTags.add(controls.tag.value);
      controls.tag.value = ''; renderTags(); refresh();
    };
    find('[data-prev]').onclick = () => { page--; render(); };
    find('[data-next]').onclick = () => { page++; render(); };
    find('[data-reset]').onclick = () => {
      for (const control of Object.values(controls)) control.value = control.name === 'sort' ? 'name' : '';
      selectedTags.clear(); renderTags(); refresh(); controls.query.focus();
    };
    renderTags(); render();
  }
  init();
  document.addEventListener('ember:page', init);
})();
