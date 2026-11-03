/* Keep the header, music player and search alive while replacing page content. */
(() => {
  'use strict';
  const base = document.body.dataset.base || '';
  let controller, sequence = 0, current = location.href, scrollFrame;
  history.scrollRestoration = 'manual';
  history.replaceState({...history.state, emberScroll:[scrollX,scrollY]},'');
  const saveScroll = () => { if (current === location.href) history.replaceState({...history.state,emberScroll:[scrollX,scrollY]},''); };
  window.addEventListener('scroll', () => { cancelAnimationFrame(scrollFrame); scrollFrame = requestAnimationFrame(saveScroll); },{passive:true});
  function scrollToURL(url, position) {
    if (position) { window.scrollTo({left:position[0],top:position[1],behavior:'instant'}); return; }
    let id; try { id = decodeURIComponent(url.hash.slice(1)); } catch { id = ''; }
    const target = id && document.getElementById(id);
    if (target) target.scrollIntoView({behavior:'instant'}); else window.scrollTo({top:0,left:0,behavior:'instant'});
  }
  async function navigate(href, {replace = false, pop = false, position = null} = {}) {
    const url = new URL(href,location.href);
    controller?.abort(); controller = new AbortController(); const ticket = ++sequence;
    if (!pop) saveScroll();
    document.getElementById('main')?.setAttribute('aria-busy','true');
    try {
      const response = await fetch(url.href,{signal:controller.signal,headers:{'Accept':'text/html'}});
      if (!response.ok) throw Error(response.status);
      const next = new DOMParser().parseFromString(await response.text(),'text/html');
      if (ticket !== sequence) return;
      const main = next.getElementById('main'), sidebar = next.getElementById('sidebar');
      if (!main || !sidebar || !next.querySelector('[data-ambient-player]')) throw Error('Standalone document');
      document.dispatchEvent(new Event('ember:before-page'));
      document.getElementById('main').replaceWith(main);
      document.getElementById('sidebar').replaceWith(sidebar);
      document.title = next.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content',next.querySelector('meta[name="description"]')?.content || '');
      for (const key of Object.keys(document.body.dataset)) delete document.body.dataset[key];
      Object.assign(document.body.dataset,next.body.dataset);
      if (!pop) history[replace ? 'replaceState' : 'pushState']({emberScroll:[0,0]},'',url.href);
      current = location.href;
      document.getElementById('menu-toggle')?.setAttribute('aria-expanded','false');
      document.dispatchEvent(new Event('ember:page'));
      main.tabIndex = -1; main.focus({preventScroll:true}); scrollToURL(url,position);
    } catch (error) {
      if (error.name !== 'AbortError' && ticket === sequence) {
        // Ordinary navigation remains available if fetching or parsing fails.
        if (pop || replace) location.replace(url.href); else location.assign(url.href);
      }
    } finally {
      if (ticket === sequence) document.getElementById('main')?.removeAttribute('aria-busy');
    }
  }
  window.emberNavigate = navigate;
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self') || a.dataset.fullNavigation !== undefined) return;
    const url = new URL(a.href,location.href);
    if (url.origin !== location.origin || !(url.pathname === base + '/' || url.pathname.startsWith(base + '/')) || /\.[a-z0-9]+$/i.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search) {
      // Re-selecting this page must not reload the document and stop playback.
      e.preventDefault(); saveScroll(); controller?.abort(); ++sequence;
      const oldURL = location.href;
      if (oldURL !== url.href) history.pushState({emberScroll:[0,0]},'',url.href);
      current = location.href;
      document.getElementById('main')?.removeAttribute('aria-busy');
      scrollToURL(url);
      if (oldURL !== url.href) window.dispatchEvent(new HashChangeEvent('hashchange',{oldURL,newURL:url.href}));
      return;
    }
    e.preventDefault(); navigate(url.href);
  });
  window.addEventListener('popstate', e => {
    const previous = new URL(current), url = new URL(location.href);
    if (previous.pathname === url.pathname && previous.search === url.search) {
      controller?.abort(); ++sequence; current = location.href;
      document.getElementById('main')?.removeAttribute('aria-busy');
      scrollToURL(url,e.state?.emberScroll); return;
    }
    navigate(location.href,{pop:true,position:e.state?.emberScroll});
  });
})();
