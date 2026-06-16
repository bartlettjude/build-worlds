/* BUILD WORLDS — interactions */
(function () {
  const G = window.GALLERIES || {};
  const order = ['selects','shane-guerrette','flipturn','briston-maroney','black-joe-lewis','joe-p','peach-pit','morrissey-blvd'];
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  /* ---------- custom cursor: single orange dot ---------- */
  const dot = $('#curdot');
  if (dot && matchMedia('(hover:hover)').matches) {
    addEventListener('mousemove', e => { dot.style.transform=`translate(${e.clientX}px,${e.clientY}px)`; });
    const bind = () => $$('a, button, [data-hov], .shot, .vid, .arow').forEach(el => {
      if (el._b) return; el._b=1;
      el.addEventListener('mouseenter', ()=>dot.classList.add('hov'));
      el.addEventListener('mouseleave', ()=>dot.classList.remove('hov'));
    });
    bind(); window._bindCur = bind;
  }

  /* ---------- nav ---------- */
  const nav = $('#nav');
  addEventListener('scroll', () => nav && nav.classList.toggle('scrolled', scrollY > 40), {passive:true});
  const burger = $('#burger'), links = $('#links');
  if (burger) burger.addEventListener('click', () => links.classList.toggle('open'));
  if (links) $$('a', links).forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  const obsReveals = () => $$('.reveal:not(.in)').forEach(el => io.observe(el));
  obsReveals();

  /* ---------- lightbox ---------- */
  let LB = [], li = 0;
  const lb=$('#lb'), lbimg=$('#lbimg'), lbcount=$('#lbcount');
  function openLB(list, i){ LB=list; li=i; lb.classList.add('open'); show(); document.body.style.overflow='hidden'; }
  function show(){ lbimg.src=LB[li].src; lbimg.alt=LB[li].alt||''; lbcount.textContent=`${String(li+1).padStart(2,'0')} / ${String(LB.length).padStart(2,'0')}`; }
  function closeLB(){ lb.classList.remove('open'); document.body.style.overflow=''; }
  function step(d){ li=(li+d+LB.length)%LB.length; show(); }
  if (lb){
    $('#lbx').onclick=closeLB; $('#lbnext').onclick=()=>step(1); $('#lbprev').onclick=()=>step(-1);
    lb.addEventListener('click', e => { if (e.target===lb) closeLB(); });
    addEventListener('keydown', e => { if(!lb.classList.contains('open'))return; if(e.key==='Escape')closeLB(); if(e.key==='ArrowRight')step(1); if(e.key==='ArrowLeft')step(-1); });
  }
  function shotEl(img, list, idx, cap){
    const a=document.createElement('div'); a.className='shot';
    a.innerHTML=`<img loading="lazy" src="${img.src}" alt="${cap||'Alex O\'Bryn — tour photography'}">${cap?`<span class="cap">${cap}</span>`:''}`;
    a.addEventListener('click', ()=>openLB(list, idx));
    return a;
  }

  /* ---------- hero photo wall (animated random collage) ---------- */
  const wall = $('#heroWall');
  if (wall) {
    const all = [];
    for (const k in G) (G[k].images || []).forEach(im => all.push(im.src));
    for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
    const COLS = innerWidth < 680 ? 3 : innerWidth < 1100 ? 5 : 8;
    for (let c = 0; c < COLS; c++) {
      const col = document.createElement('div');
      col.className = 'wall-col ' + (c % 2 ? 'down' : 'up');
      col.style.setProperty('--dur', (38 + c * 6) + 's');
      const mine = all.filter((_, i) => i % COLS === c);
      while (mine.length < 5) mine.push(...mine);                 // ensure tall enough to loop
      const strip = mine.slice(0, 7).map(s => { const r = (Math.random() * 8 - 4).toFixed(1); return `<img loading="lazy" src="${s}" alt="" style="--ir:${r}deg">`; }).join('');
      col.innerHTML = strip + strip;                              // duplicate for seamless loop
      wall.appendChild(col);
    }
  }

  /* ---------- marquee ---------- */
  const marq=$('#marq');
  if (marq){
    const names = order.filter(k=>k!=='selects').map(k=>G[k]?.label).filter(Boolean);
    const one = names.map(n=>`<span>${n}</span>`).join('');
    marq.innerHTML = one + one;
  }

  /* ---------- HOME: merged "wall" — artist name tiles + their photos, scattered ---------- */
  const scatter = $('#scatter');
  if (scatter){
    const artists = order.filter(k => k!=='selects' && G[k]);
    const lbList = [];                                  // photos only, for the lightbox
    let n = 0;
    artists.forEach((k, ai) => {
      const g = G[k];
      // NAME tile -> routes to that artist's archive
      const name = document.createElement('a');
      name.className = 'tile name reveal';
      name.href = `work.html#${k}`;
      name.style.setProperty('--rot', ((ai%2?1:-1)*(1+ (ai*7%3))).toFixed(1)+'deg');
      name.dataset.par = ((ai%2?1:-1)*0.07).toFixed(2);          // name tiles drift opposite per row
      name.innerHTML = `<span class="t-num">0${ai+1}</span><span class="t-name">${g.label.replace(/&/,'<em>&</em>')}</span><span class="t-meta">${String(g.count).padStart(2,'0')} frames<i>↗</i></span>`;
      scatter.appendChild(name);
      // a few of THIS artist's photos
      const picks = g.images.slice(0, k==='peach-pit'||k==='joe-p' ? 2 : 3);
      picks.forEach((im) => {
        const idx = lbList.length; lbList.push(im);
        const t = document.createElement('div');
        t.className = 'tile photo reveal';
        t.style.setProperty('--rot', (((n*13)%5)-2).toFixed(1)+'deg');
        t.dataset.par = ((((n*37)%9)-4)/55).toFixed(3);          // gentle, varied per-photo drift
        t.innerHTML = `<img loading="lazy" src="${im.src}" alt="${g.label}"><span class="cap">${g.label}</span>`;
        t.addEventListener('click', ()=> openLB(lbList, idx));
        scatter.appendChild(t); n++;
      });
    });
    obsReveals(); if(window._bindCur) window._bindCur();
  }

  /* ---------- HOME: video ---------- */
  const vwrap=$('#vids');
  if (vwrap){
    const VIDS=[
      ['fF6oMw4bKRY','Tour Film'],['gpfLHxD8lvI','Live Session'],['bWhnMKmIPBE','On The Road'],
      ['JKGNmpmZVx0','Reel'],['GF_CugIFCQQ','Stage'],['nzBX9fuoFrU','Backstage']
    ];
    VIDS.forEach(([id,label],i)=>{
      const a=document.createElement('a');
      a.className='vid reveal'; a.href=`https://www.youtube.com/watch?v=${id}`; a.target='_blank'; a.rel='noopener';
      a.dataset.par = ((i%3-1)*0.05).toFixed(2);                 // staggered drift across the 3 columns
      a.innerHTML=`<img loading="lazy" src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${label}"><span class="play"><i></i></span><span class="vlabel">${label}</span>`;
      vwrap.appendChild(a);
    });
    obsReveals(); if(window._bindCur) window._bindCur();
  }

  /* ---------- WORK PAGE: filters + grid ---------- */
  if (window.WORK_PAGE){
    const filters=$('#filters'), grid=$('#grid');
    const cats=[['all','All work'], ...order.filter(k=>k!=='selects').map(k=>[k,G[k]?.label]).filter(c=>c[1])];
    let active='all';
    function flat(cat){
      let out=[];
      (cat==='all'?order.filter(k=>k!=='selects'):[cat]).forEach(k=>{
        (G[k]?.images||[]).forEach(im=> out.push({...im, cap:G[k].label}));
      });
      return out;
    }
    function render(){
      grid.innerHTML='';
      const list=flat(active);
      list.forEach((im,i)=>{
        const el=shotEl(im, list, i, im.cap);
        el.classList.add('reveal'); grid.appendChild(el);
      });
      obsReveals(); if(window._bindCur) window._bindCur();
    }
    cats.forEach(([k,label])=>{
      const b=document.createElement('button'); b.textContent=label; if(k==='all')b.classList.add('active');
      b.onclick=()=>{ active=k; $$('button',filters).forEach(x=>x.classList.remove('active')); b.classList.add('active'); render(); location.hash=k==='all'?'':k; };
      b.dataset.cat=k; filters.appendChild(b);
    });
    const h=location.hash.slice(1);
    if (h && G[h]){ active=h; }
    render();
    if (active!=='all'){ const btn=$(`button[data-cat="${active}"]`,filters); if(btn){ $$('button',filters).forEach(x=>x.classList.remove('active')); btn.classList.add('active'); } }
  }

  /* ---------- parallax engine: scroll depth + pointer depth ----------
     One persistent rAF loop.
     • Per-item scroll parallax writes the INDEPENDENT translate/scale/rotate CSS
       props (NOT `transform`), so it layers on top of the reveal + hover transforms
       without fighting them. p ≈ -0.8..0.8, ~0 at viewport center.
     • [data-mouse]=px folds a lerp-smoothed pointer offset into the same translate,
       so hero layers drift in abstract 3D as the cursor moves.
     All disabled under prefers-reduced-motion. */
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canHover = matchMedia('(hover:hover)').matches;
  const lerp = (a, b, t) => a + (b - a) * t;
  let parItems = [];
  function parCollect(){
    parItems = $$('[data-par],[data-par-x],[data-par-rot],[data-mouse]').map(el => ({
      el,
      y:   parseFloat(el.dataset.par)      || 0,
      x:   parseFloat(el.dataset.parX)     || 0,
      rot: parseFloat(el.dataset.parRot)   || 0,
      sc:  parseFloat(el.dataset.parScale) || 0,
      m:   parseFloat(el.dataset.mouse)    || 0,   // px of pointer-depth drift
    }));
  }
  window._par = parCollect;                          // recall after dynamic rebuilds (e.g. work-page filter)

  let mx = 0, my = 0, pmx = 0, pmy = 0;              // raw / smoothed pointer, -1..1 from center
  if (canHover && !reduce){
    addEventListener('mousemove', e => {
      mx = (e.clientX / innerWidth  - .5) * 2;
      my = (e.clientY / innerHeight - .5) * 2;
    }, {passive:true});
  }

  function loop(){
    const vh = innerHeight || 1;
    pmx = lerp(pmx, mx, .07); pmy = lerp(pmy, my, .07);

    for (const it of parItems){
      const r = it.el.getBoundingClientRect();
      const p = ((r.top + r.height/2) - vh/2) / vh;
      let tx = p*it.x*100, ty = p*it.y*100;
      if (it.m){ tx += pmx*it.m; ty += pmy*it.m; }
      if (it.x || it.y || it.m) it.el.style.translate = `${tx.toFixed(1)}px ${ty.toFixed(1)}px`;
      if (it.rot) it.el.style.rotate = `${(p*it.rot).toFixed(2)}deg`;
      if (it.sc)  it.el.style.scale  = `${(1 + Math.abs(p)*it.sc).toFixed(3)}`;
    }
    requestAnimationFrame(loop);
  }
  if (!reduce){ parCollect(); requestAnimationFrame(loop); }
})();
