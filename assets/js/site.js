(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const base = document.body.dataset.base || '';
  const escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm = s => String(s || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’‘]/g, "'");
  // Highlight the original text once. Never run replacements over generated HTML.
  function highlight(text, terms) {
    text = String(text || '');
    const plain = norm(text), ranges = [];
    for (const term of terms) {
      let start = 0, at;
      while ((at = plain.indexOf(term, start)) !== -1) {
        ranges.push([at, at + term.length]); start = at + term.length;
      }
    }
    ranges.sort((a,b) => a[0] - b[0]);
    const merged = [];
    for (const range of ranges) {
      const last = merged[merged.length - 1];
      if (last && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
      else merged.push(range);
    }
    let result = '', end = 0;
    for (const [a,b] of merged) { result += escape(text.slice(end,a)) + '<mark>' + escape(text.slice(a,b)) + '</mark>'; end = b; }
    return result + escape(text.slice(end));
  }
  const overlay = $('#search-overlay'), input = $('#search-input'), list = $('#search-results'), info = $('#search-info');
  let all = null, loading = null, results = [], focus = 0, lastFocus = null;
  const closeSearch = (restore = true) => {
    overlay.hidden = true; document.body.style.overflow = '';
    if (restore && lastFocus?.isConnected) lastFocus.focus();
  };
  async function openSearch() {
    lastFocus = document.activeElement; overlay.hidden = false;
    document.body.style.overflow = 'hidden'; input.focus();
    if (!all) {
      info.textContent = 'LOADING SEARCH…';
      try {
        loading ||= fetch(base + '/assets/data/search-index.json?v=20261103').then(r => { if (!r.ok) throw Error(r.status); return r.json(); });
        all = (await loading).map(x => ({...x, titleKey:norm(x.title), volumeKey:norm(x.volume), textKey:norm(x.text)}));
      } catch {
        loading = null; info.textContent = 'SEARCH UNAVAILABLE';
        list.innerHTML = '<div class="empty-search">Could not load search. Close and reopen to retry, or browse the navigation.</div>'; return;
      }
    }
    runSearch();
  }
  function excerpt(text, terms) {
    const key = norm(text), positions = terms.map(t => key.indexOf(t)).filter(n => n >= 0);
    const start = Math.max(0, (positions.length ? Math.min(...positions) : 0) - 65);
    return (start ? '…' : '') + text.slice(start, start + 230) + (text.length > start + 230 ? '…' : '');
  }
  function runSearch() {
    if (!all) return;
    const query = norm(input.value).trim(), terms = [...new Set(query.split(/\s+/).filter(Boolean))];
    if (!terms.length) {
      list.innerHTML = '<div class="empty-search">Search a rule, technique, clan, talent or keyword.</div>';
      info.textContent = 'SEARCH ' + all.length.toLocaleString() + ' SECTIONS'; results = []; return;
    }
    const scored = [];
    for (const x of all) {
      let score = x.titleKey === query ? 100 : x.titleKey.includes(query) ? 50 : 0, ok = true;
      for (const t of terms) {
        const s = (x.titleKey.includes(t) ? 24 : 0) + (x.volumeKey.includes(t) ? 8 : 0) + (x.textKey.includes(t) ? 3 : 0);
        if (!s) { ok = false; break; } score += s;
      }
      if (ok) scored.push({x,score});
    }
    scored.sort((a,b) => b.score - a.score || a.x.title.length - b.x.title.length);
    results = scored.slice(0,75).map(s => s.x); focus = 0;
    info.textContent = scored.length + ' MATCH' + (scored.length === 1 ? '' : 'ES') + (scored.length > 75 ? ' · SHOWING FIRST 75' : '');
    list.innerHTML = results.map((x,i) => '<a class="search-result' + (i === 0 ? ' active' : '') + '" data-index="' + i + '" href="' + escape(base + x.url) + '"><span class="result-vol">' + (x.number ? 'VOL. ' + escape(x.number) + ' / ' : '') + escape(x.volume) + '</span><strong>' + highlight(x.title, terms) + '</strong><span class="excerpt">' + highlight(excerpt(x.text || '',terms), terms) + '</span></a>').join('') || '<div class="empty-search">No matching sections. Try another name or a broader term.</div>';
  }
  function select(i) {
    focus = Math.max(0,Math.min(results.length - 1,i));
    list.querySelectorAll('a').forEach((a,n) => a.classList.toggle('active',n === focus));
    list.querySelector('a.active')?.scrollIntoView({block:'nearest'});
  }
  document.addEventListener('click', e => {
    if (e.target.closest('.search-trigger')) openSearch();
    if (e.target.closest('#search-close,#search-backdrop')) closeSearch();
    if (e.target.closest('#search-results a')) closeSearch(false);
    if (e.target.closest('#menu-toggle')) {
      const opened = $('#sidebar')?.classList.toggle('open');
      $('#menu-toggle')?.setAttribute('aria-expanded', String(!!opened));
    } else if (!e.target.closest('#sidebar')) {
      $('#sidebar')?.classList.remove('open'); $('#menu-toggle')?.setAttribute('aria-expanded','false');
    }
  });
  list?.addEventListener('mouseover', e => { const a = e.target.closest('[data-index]'); if (a) select(Number(a.dataset.index)); });
  input?.addEventListener('input',runSearch);
  document.addEventListener('keydown', e => {
    const editing = e.target.closest('input,textarea,select,[contenteditable="true"]');
    if ((e.key === '/' && !editing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault(); openSearch(); return;
    }
    if (!overlay || overlay.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); closeSearch(); }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); select(focus + (e.key === 'ArrowDown' ? 1 : -1)); }
    else if (e.key === 'Enter' && results.length && e.target === input) { e.preventDefault(); list.querySelector('a.active')?.click(); }
    else if (e.key === 'Tab') {
      const targets = [...overlay.querySelectorAll('input,button,a[href]')], first = targets[0], last = targets[targets.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  const theme = $('#theme-toggle'), primal = $('#primal-toggle'), abyss = $('#abyss-toggle');
  let appearance = document.documentElement.dataset.appearance || 'dark';
  function setTheme(next) {
    if (next === 'dark' || next === 'light') appearance = next;
    document.documentElement.dataset.theme = next; document.documentElement.dataset.appearance = appearance;
    try { localStorage.setItem('ember-theme',next); localStorage.setItem('ember-appearance',appearance); } catch {}
    for (const [el,name] of [[primal,'primal'],[abyss,'abyss']]) {
      const active = next === name; el?.setAttribute('aria-pressed',String(active));
      el?.setAttribute('aria-label',(active ? 'Disable ' : 'Enable ') + name + ' theme');
    }
    theme?.setAttribute('aria-label','Switch to ' + (appearance === 'dark' ? 'light' : 'dark') + ' appearance');
  }
  setTheme(document.documentElement.dataset.theme || 'dark');
  theme?.addEventListener('click', () => { appearance = appearance === 'dark' ? 'light' : 'dark'; setTheme(['primal','abyss'].includes(document.documentElement.dataset.theme) ? document.documentElement.dataset.theme : appearance); });
  primal?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'primal' ? appearance : 'primal'));
  abyss?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'abyss' ? appearance : 'abyss'));

  let observer, pageEvents;
  function initPage() {
    observer?.disconnect(); pageEvents?.abort(); pageEvents = new AbortController();
    const {volume, talentSection, jutsuIndex} = document.body.dataset;
    const isJutsu = volume === 'jutsu', isClans = volume === 'clans', isTalents = volume === 'talents';
    let hash; try { hash = decodeURIComponent(location.hash.slice(1)); } catch { hash = ''; }
    let redirects;
    if (isJutsu && jutsuIndex === 'true' && hash && !document.getElementById(hash)) redirects = 'jutsu';
    if (isTalents && talentSection === 'overview' && hash && !document.getElementById(hash)) redirects = 'talent';
    if (isTalents && talentSection === 'monster-species') redirects = 'monster-species';
    if (redirects) {
      const from = location.href;
      fetch(base + '/assets/data/' + redirects + '-redirects.json', {signal:pageEvents.signal}).then(r => r.ok ? r.json() : {}).then(routes => {
        const route = routes[hash] || (redirects === 'monster-species' ? '/rules/talents/monster-taming/#species' : null);
        if (route && location.href === from) { const url = base + route; if (window.emberNavigate) window.emberNavigate(url,{replace:true}); else location.replace(url); }
      }).catch(() => {});
    }
    const rule = $('#rule-content'); if (!rule) return;
    for (const table of rule.querySelectorAll('table')) {
      if (table.parentElement.classList.contains('table-scroll')) continue;
      const box = document.createElement('div'); box.className = 'table-scroll'; box.tabIndex = 0;
      box.setAttribute('role','region'); box.setAttribute('aria-label','Scrollable rules table');
      table.before(box); box.append(table);
    }
    const heads = [...rule.querySelectorAll('h1,h2,h3,h4')]; let count = 0;
    for (const h of heads) if (!h.id) h.id = 'rule-section-' + (++count);
    const primary = heads.filter(h => h.matches('h1,h2'));
    const ranks = heads.filter(h => /^[A-S]-Rank$/i.test(h.textContent.trim()));
    ranks.forEach(h => h.classList.add('jutsu-rank-heading'));
    const render = (dest,items) => { if (dest) dest.innerHTML = items.map(h => '<a href="#' + encodeURIComponent(h.id) + '" class="depth-' + (h.tagName === 'H1' ? 1 : 2) + '">' + escape(h.textContent.trim()) + '</a>').join(''); };
    if (!isJutsu && !isClans && !isTalents && !['core','uniques','equipment'].includes(volume)) render($('#toc'),primary);
    const rail = $('#rail-toc');
    if (isClans && $('#toc')) rail.innerHTML = $('#toc').innerHTML;
    else render(rail, isJutsu ? heads.filter(h => h.matches('h1,h2,h3') && !h.classList.contains('jutsu-technique')) : primary);
    if (isJutsu && ranks.length) {
      const jumps = document.createElement('nav'); jumps.className = 'jutsu-rank-jumps'; jumps.setAttribute('aria-label','Jump to jutsu rank');
      jumps.innerHTML = '<span>JUMP TO RANK</span>' + ranks.map(h => '<a href="#' + encodeURIComponent(h.id) + '">' + escape(h.textContent.trim()) + '</a>').join('');
      rule.prepend(jumps);
      if (rail) { const label = rail.closest('.reading-rail').querySelector('.rail-label'); label.textContent = 'RULES & JUTSU RANKS'; }
    }
    const markCore = () => $$('.core-side-links a').forEach(a => a.classList.toggle('active',a.pathname === location.pathname && a.hash === location.hash && !!a.hash));
    window.addEventListener('hashchange',markCore,{signal:pageEvents.signal}); markCore();
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(items => {
        const entry = items.filter(i => i.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; if (!entry) return;
        $$('.clan-toc a,#rail-toc a,.jutsu-rank-jumps a').forEach(a => { const active = a.hash === '#' + encodeURIComponent(entry.target.id); a.classList.toggle('active',active); if (active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
      },{rootMargin:'-95px 0px -65% 0px'});
      (isClans ? heads.filter(h => h.matches('h1')) : primary).forEach(h => observer.observe(h));
    }
  }
  document.addEventListener('ember:page',initPage);
  document.addEventListener('ember:before-page', () => closeSearch(false));
  initPage();
})();
