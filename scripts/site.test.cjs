const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {JSDOM} = require('jsdom');
const root = path.resolve(__dirname,'..');
const base = '/TheEmberCorps';
const player = `<div data-ambient-player><button data-ambient-toggle></button><div data-ambient-panel><span data-ambient-title></span><span data-ambient-count></span><button data-ambient-play></button><button data-ambient-prev></button><button data-ambient-next></button><input data-ambient-volume type="range"><span data-ambient-progress></span><button data-ambient-panel-toggle></button></div></div>`;
const article = `<h1 id="school">School</h1><h2 id="e-rank">E-Rank</h2><h4 id="technique" class="jutsu-technique">Jōdan - High Guard</h4><span class="jutsu-rank-badge">E-Rank</span><table><tr><td>Rule</td></tr></table>`;
function page(title='First',content=article) { return `<!doctype html><html data-theme="dark"><head><title>${title}</title><meta name="description" content="${title}"></head><body data-base="${base}" data-volume="jutsu"><aside id="sidebar"><nav id="toc"></nav><button class="search-trigger">Search</button><a href="${base}/second/">Next</a></aside><header><button id="menu-toggle"></button><button id="theme-toggle"></button><button id="primal-toggle"></button><button id="abyss-toggle"></button>${player}</header><main id="main"><article id="rule-content">${content}</article><aside class="reading-rail"><span class="rail-label"></span><nav id="rail-toc"></nav></aside></main><div id="search-overlay" hidden><input id="search-input"><button id="search-close"></button><button id="search-backdrop"></button><div id="search-info"></div><div id="search-results"></div></div></body></html>`; }
const tick = () => new Promise(resolve => setImmediate(resolve));
function setup({denied=false,failSearch=false}={}) {
  const dom = new JSDOM(page(),{url:'https://example.test'+base+'/first/',runScripts:'outside-only',pretendToBeVisual:true});
  const w = dom.window, audio = [], errors = [], observers = [];
  w.addEventListener('error',e=>errors.push(e.error));
  w.HTMLElement.prototype.scrollIntoView = function() {};
  w.scrollTo = () => {};
  w.IntersectionObserver = class { constructor(cb){this.cb=cb;observers.push(this);} observe(){} unobserve(){} disconnect(){this.disconnected=true;} };
  w.matchMedia=()=>({matches:false,addEventListener(){}});
  w.Audio = class extends w.EventTarget {
    constructor(){super();audio.push(this);this.paused=true;this.currentTime=45;this.duration=200;this.volume=.34;this.src='';}
    async play(){this.paused=false;this.dispatchEvent(new w.Event('play'));}
    pause(){this.paused=true;this.dispatchEvent(new w.Event('pause'));}
  };
  if (denied) Object.defineProperty(w,'localStorage',{get(){throw Error('Storage denied');}});
  else w.localStorage.setItem('ember-ambient-volume','0');
  const records = [{title:'Jōdan - High Guard',volume:'Bukijutsu',number:'IV',url:'/second/#technique',text:'Opening. '+ 'ordinary text '.repeat(40) + 'Durability threshold & weapon damage.'},{title:'<img src=x onerror=alert(1)>',volume:'Rules',number:'I',url:'/first/#school',text:'Literal markup'}];
  w.fetch = async url => {
    if (String(url).includes('search-index')) { if(failSearch) throw Error('Offline'); return {ok:true,json:async()=>records}; }
    return {ok:true,text:async()=>page('Second')};
  };
  for(const script of ['site.js','timeline.js','ambient-player.js','navigation.js'])w.eval(fs.readFileSync(path.join(root,'assets/js',script),'utf8'));
  return {w,dom,audio,errors,observers};
}
test('contents, rank links and scrollable tables initialise without errors',()=>{
 const {w,errors,dom}=setup();assert.equal(w.document.querySelectorAll('#rail-toc a').length,2);assert.equal(w.document.querySelector('.jutsu-rank-jumps a').hash,'#e-rank');assert.equal(w.document.querySelectorAll('.table-scroll table').length,1);assert.deepEqual(errors,[]);dom.window.close();
});
test('full-text search finds later effects, accentless names and escapes markup',async()=>{
 const {w,dom,errors}=setup();w.document.querySelector('.search-trigger').click();await tick();
 const input=w.document.getElementById('search-input');
 const query=s=>{input.value=s;input.dispatchEvent(new w.Event('input'));return w.document.querySelector('#search-results').textContent;};
 assert.match(query('durability threshold'),/High Guard/);assert.match(query('jodan'),/Jōdan/);assert.ok(w.document.querySelector('mark'));
 query('img');assert.equal(w.document.querySelector('#search-results img'),null);assert.match(w.document.querySelector('#search-results').textContent,/<img/);
 query('does-not-exist');assert.match(w.document.querySelector('#search-info').textContent,/0 MATCHES/);assert.deepEqual(errors,[]);dom.window.close();
});
test('storage denial does not disable navigation, contents or audio controls',async()=>{
 const {w,audio,dom,errors}=setup({denied:true});w.document.querySelector('[data-ambient-toggle]').click();await tick();assert.equal(audio[0].paused,false);await w.emberNavigate(base+'/second/');assert.equal(w.document.title,'Second');assert.deepEqual(errors,[]);dom.window.close();
});
test('music object, time, volume and playing state survive repeated navigation',async()=>{
 const {w,audio,dom,errors,observers}=setup();assert.equal(audio[0].volume,0);const header=w.document.querySelector('header');
 w.document.querySelector('[data-ambient-toggle]').click();await tick();
 await w.emberNavigate(base+'/second/#technique');await w.emberNavigate(base+'/third/');
 assert.equal(audio.length,1);assert.equal(audio[0].paused,false);assert.equal(audio[0].currentTime,45);assert.equal(w.document.querySelector('header'),header);assert.equal(w.document.querySelector('[data-ambient-toggle]').getAttribute('aria-pressed'),'true');
 assert.equal(w.location.pathname,base+'/third/');assert.equal(w.document.querySelectorAll('.jutsu-rank-jumps').length,1);assert.equal(observers.filter(x=>!x.disconnected).length,1);assert.deepEqual(errors,[]);dom.window.close();
});
test('search Enter follows client navigation and closes the dialog',async()=>{
 const {w,dom}=setup();w.document.querySelector('.search-trigger').click();await tick();const input=w.document.getElementById('search-input');input.value='jodan';input.dispatchEvent(new w.Event('input'));input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true}));await tick();await tick();assert.equal(w.location.pathname,base+'/second/');assert.equal(w.document.getElementById('search-overlay').hidden,true);assert.equal(w.document.body.style.overflow,'');dom.window.close();
});
test('search failures remain recoverable',async()=>{
 const {w,dom}=setup({failSearch:true});w.document.querySelector('.search-trigger').click();await tick();assert.match(w.document.querySelector('#search-info').textContent,/UNAVAILABLE/);w.fetch=async()=>({ok:true,json:async()=>[]});w.document.querySelector('#search-close').click();w.document.querySelector('.search-trigger').click();await tick();assert.match(w.document.querySelector('#search-info').textContent,/SEARCH 0 SECTIONS/);dom.window.close();
});
test('a slower response cannot replace a newer page',async()=>{
 const {w,dom}=setup();let release;w.fetch=url=>String(url).includes('/slow/')?new Promise(r=>release=r):Promise.resolve({ok:true,text:async()=>page('Latest')});const slow=w.emberNavigate(base+'/slow/');await w.emberNavigate(base+'/latest/');release({ok:true,text:async()=>page('Stale')});await slow;assert.equal(w.document.title,'Latest');assert.equal(w.location.pathname,base+'/latest/');dom.window.close();
});
test('back/forward replaces content without replacing audio',async()=>{
 const {w,dom,audio}=setup();await w.emberNavigate(base+'/second/');w.history.back();await new Promise(r=>w.addEventListener('popstate',r,{once:true}));await tick();assert.equal(w.location.pathname,base+'/first/');assert.equal(audio.length,1);w.history.forward();await new Promise(r=>w.addEventListener('popstate',r,{once:true}));await tick();assert.equal(w.location.pathname,base+'/second/');assert.equal(audio.length,1);dom.window.close();
});

test('same-page links and rank anchors never reload the document',async()=>{
 const {w,dom,audio}=setup();const a=w.document.createElement('a');a.href=w.location.href;w.document.body.append(a);
 const click=new w.MouseEvent('click',{bubbles:true,cancelable:true,button:0});a.dispatchEvent(click);assert.equal(click.defaultPrevented,true);
 w.document.querySelector('.jutsu-rank-jumps a').click();assert.equal(w.location.hash,'#e-rank');assert.equal(audio.length,1);assert.equal(w.document.title,'First');dom.window.close();
});
