// Each scene has its own choreography, built in viewport-relative SVG units.
// A stationary outer group places the actor; its child moves in local coordinates.
window.drawThemeScene = function drawThemeScene(layer, theme) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  if (typeof svg.animate !== 'function') return;
  const h = 600, w = h * innerWidth / Math.max(innerHeight, 1);
  svg.setAttribute('viewBox', [0, 0, w, h].join(' '));
  svg.setAttribute('preserveAspectRatio', 'none');
  layer.append(svg);
  const ink = 'var(--accent)', second = 'var(--accent2)';
  const cx = .62 * w, cy = .46 * h;
  const scale = Math.min(1.1, w / 570);
  function shape(parent, tag, attrs = {}) {
    const el = document.createElementNS(ns, tag);
    for (const [name,value] of Object.entries(attrs)) el.setAttribute(name, value);
    parent.append(el);
    return el;
  }
  function actor(x, y, size = 1, parent = svg) {
    const at = shape(parent, 'g', {transform:'translate('+x+' '+y+') scale('+size+')'});
    return shape(at, 'g');
  }
  function move(el, frames, duration, delay = 0, easing = 'ease-in-out') {
    el.animate(frames, {duration, delay, easing, fill:'both'});
  }
  function path(parent, d, fill, stroke = 'none', width = 1) {
    return shape(parent,'path',{d,fill,stroke,'stroke-width':width,'stroke-linecap':'round','stroke-linejoin':'round'});
  }
  function trace(parent,d,color,width,delay,duration) {
    const line = path(parent,d,'none',color,width);
    line.setAttribute('pathLength','1');
    line.setAttribute('stroke-dasharray','1');
    move(line,[{strokeDashoffset:'1',opacity:0},{strokeDashoffset:'.96',opacity:1,offset:.12},{strokeDashoffset:'0',opacity:1}],duration,delay);
    return line;
  }
  function ring(parent,r,color,width=1) {
    return shape(parent,'circle',{r,fill:'none',stroke:color,'stroke-width':width});
  }
  // Repeatable variation keeps each cluster composed across screen sizes.
  const fraction = i => (Math.sin(i*47.17+1.32)*3571 % 1 + 1) % 1;
  function sparks(parent,count,color,spread,delay) {
    for(let i=0;i<count;i++){
      const a=fraction(i)*Math.PI*2, reach=spread*(.35+fraction(i+31)*.65);
      const dx=Math.cos(a)*reach, dy=Math.sin(a)*reach;
      const dot=shape(parent,'circle',{r:1+fraction(i+16)*2.2,fill:i%4?color:'#fff2ce'});
      move(dot,[{transform:'translate(0,0) scale(.25)',opacity:0},{opacity:1,offset:.13},
        {transform:'translate('+dx+'px,'+(dy+18)+'px) scale(.15)',opacity:0}],350+fraction(i+18)*210,delay+i*3,'ease-out');
    }
  }
  const stage=actor(cx,cy,scale);
  const scenes={
    dark() {
      // Moving lunar silhouette actually occludes the corona.
      const disc=shape(stage,'circle',{r:52,fill:'#c798ab'});
      move(disc,[{opacity:0},{opacity:.96}],260);
      const clip=shape(shape(svg,'defs'),'clipPath',{id:'ec-eclipse-disc'});
      shape(clip,'circle',{r:52});
      const shadow=shape(shape(stage,'g',{'clip-path':'url(#ec-eclipse-disc)'}),'circle',{r:53,fill:'#171621'});
      move(shadow,[{transform:'translateX(-110px)'},{transform:'translateX(0)',offset:.67},{transform:'translateX(14px)'}],890);
      const corona=ring(stage,55,'#ffd2bb',2);
      move(corona,[{opacity:0,transform:'scale(.96)'},{opacity:.95,offset:.67},{opacity:0,transform:'scale(1.18)'}],760,145);
      sparks(stage,16,'#dba39e',95,530);
    },
    light() {
      const sun=shape(stage,'circle',{r:33,fill:'#ecc785'});
      move(sun,[{transform:'translateY(35px) scale(.15)',opacity:0},{transform:'translateY(0) scale(1)',opacity:1}],600);
      for(let i=0;i<16;i++){
        const spoke=shape(stage,'g',{transform:'rotate('+i*22.5+')'});
        trace(spoke,'M0 -44 Q2 -60 0 -'+(i%2?68:89),'#ac752e',i%2?1.3:2.8,180+i*15,380);
      }
    },
    'primal-dark'() {
      for(let i=0;i<3;i++){
        const cut=actor((i-1)*25,(i-1)*8,1,stage);
        trace(cut,'M40 -78 Q7 -43 -10 1 T-57 83','#8cdb59',6-i*.8,45+i*100,300);
        trace(cut,'M41 -78 Q10 -44 -7 1 T-54 83','#e0f8b1',1.4,65+i*100,310);
        sparks(actor(-55,78,1,cut),7,'#82b454',48,300+i*100);
      }
    },
    'primal-light'() {
      for(let i=0;i<3;i++){
        const stem=shape(stage,'g',{transform:'rotate('+(-50+i*45)+')'});
        trace(stem,'M0 66 Q-12 15 0 -62','#477944',2.3,i*55,540);
        for(let j=0;j<5;j++){
          const leaf=actor(-4,39-j*20,1,stem), side=j%2?1:-1;
          path(leaf,'M0 0 Q4 -24 31 -28 Q26 -4 0 0Z',j%2?'#78a35a':'#48784a');
          move(leaf,[{transform:'scale(0)'},{transform:'scale('+side+',1)',offset:.75},{transform:'scale('+side+',.94) rotate(4deg)'}],410,i*55+j*66+75);
        }
      }
    },
    'abyss-dark'() {
      for(let i=0;i<6;i++){
        const ripple=ring(stage,26+i*2,i%2?'#7cc6d9':'#638fbf',2);
        move(ripple,[{transform:'scale(.15,.06)',opacity:0},{opacity:.9,offset:.25},{transform:'scale(4.8,1.45)',opacity:0}],710,i*56);
      }
      for(let i=0;i<18;i++){
        const bubble=actor(cx+(fraction(i)-.5)*w*.7,cy+30+fraction(i+6)*125,scale);
        ring(bubble,2+fraction(i+2)*5,'#8ccedc');
        move(bubble,[{opacity:0},{opacity:.9,offset:.23},{transform:'translate('+((fraction(i)-.5)*25)+'px,-82px) scale(1.2)',opacity:0}],620+i*9,i*10);
      }
    },
    'abyss-light'() {
      for(let i=0;i<4;i++){
        const wave=actor(-w*.1,cy+i*13,1);
        let d='M0 0'; const step=w/6;
        for(let j=0;j<8;j++) d+=' q'+step/2+' '+(j%2?28:-28)+' '+step+' 0';
        trace(wave,d,i%2?'#4891ac':'#92cdd3',i?1.8:3,i*75,650);
      }
      sparks(actor(cx,cy-7,scale),16,'#57a3ba',52,425);
    },
    code() {
      for(let i=0;i<8;i++){
        const wire=shape(stage,'g',{transform:'rotate('+i*45+')'});
        trace(wire,'M0 -102 V-65 L12 -53 V-38','#72c68a',1.8,i*23,360);
        const node=shape(wire,'rect',{x:9,y:-41,width:6,height:6,fill:'#b5eabc'});
        move(node,[{opacity:0},{opacity:1}],120,310+i*23);
      }
      const seal=actor(0,0,1,stage);
      path(seal,'M0 -27 24 -14V14L0 27 -24 14V-14Z','none',ink,2.5);
      path(seal,'M-9 -7 -16 0 -9 7 M9 -7 16 0 9 7 M4 -12 -4 12','none',ink,2.3);
      move(seal,[{opacity:0,transform:'scale(1.45) rotate(30deg)'},{opacity:1,transform:'scale(1) rotate(0deg)'}],320,330);
    },
    nw() {
      const dial=ring(stage,58,second,1.5);
      move(dial,[{transform:'scale(.65)',opacity:0},{transform:'scale(1)',opacity:.75}],310);
      for(let i=0;i<16;i++){
        const tick=shape(stage,'g',{transform:'rotate('+i*22.5+')'});
        trace(tick,'M0 -52 V-'+(i%4?58:66),ink,i%4?1:3,i*15,180);
      }
      const needle=actor(0,0,1,stage);
      path(needle,'M0 -49 10 0 0 8 -10 0Z',ink);
      path(needle,'M0 49 10 0 0 -8 -10 0Z','none',ink,2);
      move(needle,[{transform:'rotate(115deg)',opacity:0},{transform:'rotate(-62deg)',opacity:1,offset:.65},{transform:'rotate(-38deg)',offset:.83},{transform:'rotate(-45deg)'}],850);
    },
    ember() {
      for(let i=0;i<5;i++){
        const flame=actor((i-2)*12,43,1,stage);
        path(flame,'M0 0 C-30 -24 -6 -42 -10 -66 Q4 -56 6 -39 Q18 -67 11 -90 C42 -54 31 -12 0 0Z',i%2?'#e67842':'#f3b56a');
        move(flame,[{transform:'scale(.45,.05)',opacity:0},{transform:'scale(.8,1) skewX(-8deg)',opacity:.85,offset:.4},{transform:'translateY(-28px) scale(.45,.7) skewX(8deg)',opacity:0}],680,i*45);
      }
      for(let i=0;i<26;i++){
        const c=actor((fraction(i)-.5)*54,10,1,stage);
        shape(c,'ellipse',{rx:1.4,ry:3.3,fill:i%3?'#f9b170':'#ee6a43'});
        const sway=(fraction(i+8)-.5)*92;
        move(c,[{opacity:0},{transform:'translate('+sway*.3+'px,-34px)',opacity:1,offset:.35},{transform:'translate('+sway+'px,-'+(75+fraction(i+4)*72)+'px) scale(.35)',opacity:0}],550+i*6,110+i*9);
      }
    },
    scroll() {
      const paper=shape(stage,'rect',{x:-75,y:-41,width:150,height:82,rx:2,fill:'#edcf90',stroke:'#865c32'});
      move(paper,[{transform:'scaleX(.02)'},{transform:'scaleX(1)'}],540);
      for(const side of [-1,1]){
        const roller=shape(stage,'rect',{x:-5,y:-48,width:10,height:96,rx:4,fill:'#ae7845',stroke:'#774c30'});
        move(roller,[{transform:'translateX('+side*4+'px)'},{transform:'translateX('+side*76+'px)'}],540);
      }
      for(let i=0;i<5;i++) trace(stage,'M'+(-49+i*24)+' -26 v16 m0 5 v'+(12+(i%3)*6),'#795337',2.6,360+i*55,260);
    },
    sakura() {
      for(let i=0;i<28;i++){
        const petal=actor(w*(.08+.88*fraction(i)),h*(.06+.72*fraction(i+79)),scale*(.48+fraction(i+4)));
        const face=shape(petal,'g');
        path(face,'M0 11 C-12 3 -11 -9 -4 -12 L0 -8 4 -13 C14 -6 10 6 0 11Z',i%2?'#e7a4bd':'#c3618e');
        path(face,'M0 9 Q-2 1 0 -6','none','#f6cfda',.85);
        move(face,[{transform:'rotate(-36deg) scaleX(.9)'},{transform:'rotate(24deg) scaleX(.16)',offset:.43},{transform:'rotate(83deg) scaleX(.86)'}],630+i*8,i*5);
        move(petal,[{opacity:0},{transform:'translate(8px,13px)',opacity:.9,offset:.2},{transform:'translate('+ (24+fraction(i+18)*55)+'px,'+(45+fraction(i+2)*70)+'px)',opacity:0}],650+i*7,i*5);
      }
    },
    iron() {
      const anvil=actor(0,0,1,stage);
      path(anvil,'M-74 16 H-27 V7 H63 V25 Q28 26 20 47 V54 L38 61 V67 H-38 V61 L-20 54 V41 Q-57 38 -74 16Z','#66757b','#c7d2d1',2);
      move(anvil,[{opacity:0},{opacity:1,offset:.25},{transform:'translateY(0)',offset:.53},{transform:'translateY(4px)',offset:.58},{transform:'translateY(0)'}],700);
      const hammer=actor(0,0,1,stage);
      path(hammer,'M9 -17 53 -55 58 -49 14 -10Z','#a98253');
      path(hammer,'M-16 -21 -2 -32 24 -4 10 7Z','#b4c1c4','#435057',2);
      move(hammer,[{transform:'translate(6px,-40px) rotate(-32deg)',opacity:0},{transform:'translate(4px,-49px) rotate(-42deg)',opacity:1,offset:.34},{transform:'translate(0,0) rotate(0)',offset:.51},{transform:'translate(5px,-28px) rotate(-18deg)'}],760);
      sparks(actor(10,7,1,stage),24,'#edb45d',112,388);
    }
  };
  scenes[theme]?.();
};
