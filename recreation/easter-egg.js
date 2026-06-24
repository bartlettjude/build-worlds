/* ============================================================
   BUILD WORLDS — secret "FIRE" doomsday easter egg  🔥🤡💥
   Type  f-i-r-e  anywhere → giant DO NOT PRESS button → press it →
   the site shakes, explodes, catches fire, and goofy clown music plays.
   Fully self-contained: injects its own CSS, synthesizes its own audio.
   ============================================================ */
(function () {
  /* ---------- styles ---------- */
  const css = `
  .ee-doomsday{ position:fixed; inset:0; z-index:2147483000; display:grid; place-items:center; cursor:pointer; overflow:hidden;
    background:radial-gradient(circle at 50% 45%, #3a0000, #140000 68%, #000); animation:ee-bgflash .45s steps(2) infinite; }
  @keyframes ee-bgflash{ 0%{background-color:#140000} 100%{background-color:#2c0000} }
  .ee-warn{ position:absolute; font-family:var(--mono,ui-monospace,monospace); font-weight:700; font-size:clamp(.68rem,2vw,1.25rem);
    color:#ff2a2a; letter-spacing:.12em; text-transform:uppercase; white-space:nowrap; pointer-events:none;
    text-shadow:0 0 12px rgba(255,0,0,.85); animation:ee-blink .4s steps(2) infinite; }
  @keyframes ee-blink{ 0%,49%{opacity:1} 50%,100%{opacity:.1} }
  .ee-btn{ position:relative; width:min(48vw,300px); height:min(48vw,300px); border-radius:50%; cursor:pointer; color:#fff;
    border:8px solid #5b0000; font-family:var(--mono,ui-monospace,monospace); font-weight:700; letter-spacing:.05em;
    background:radial-gradient(circle at 38% 30%, #ff6b5d 0%, #e8120a 38%, #8a0000 78%, #4a0000 100%);
    display:grid; place-items:center; gap:4px; line-height:1;
    box-shadow:0 18px 0 #470000, 0 28px 52px rgba(0,0,0,.7), inset 0 7px 18px rgba(255,255,255,.4), inset 0 -22px 42px rgba(0,0,0,.55), 0 0 70px rgba(255,40,0,.6);
    animation:ee-pulse .8s ease-in-out infinite, ee-wiggle .16s ease-in-out infinite; }
  .ee-btn:active{ transform:translateY(13px) scale(.985)!important; box-shadow:0 5px 0 #470000, inset 0 8px 24px rgba(0,0,0,.6)!important; }
  .ee-btn-skull{ font-size:clamp(2rem,7vw,3.4rem); filter:drop-shadow(0 2px 3px rgba(0,0,0,.5)); }
  .ee-btn-txt{ font-size:clamp(1.05rem,3.6vw,1.9rem); text-shadow:0 2px 4px rgba(0,0,0,.6); }
  @keyframes ee-pulse{ 0%,100%{ filter:drop-shadow(0 0 10px rgba(255,30,0,.4)) } 50%{ filter:drop-shadow(0 0 46px rgba(255,80,0,1)) } }
  @keyframes ee-wiggle{ 0%,100%{ transform:translate(0,0) rotate(0) } 25%{ transform:translate(-2px,1px) rotate(-1deg) } 75%{ transform:translate(2px,-1px) rotate(1deg) } }
  .ee-hint{ position:absolute; bottom:6%; left:0; right:0; text-align:center; color:#ff9a9a; pointer-events:none;
    font-family:var(--mono,ui-monospace,monospace); font-size:.78rem; letter-spacing:.1em; opacity:.85; }

  .ee-flash{ position:fixed; inset:0; z-index:2147483647; pointer-events:none;
    background:radial-gradient(circle,#fff 0%,#ffd23a 38%,#ff5a00 70%,rgba(255,40,0,.2) 100%); animation:ee-flashout .55s ease-out forwards; }
  @keyframes ee-flashout{ from{opacity:1} to{opacity:0} }

  .ee-shake{ animation:ee-quake .22s linear 7; }
  @keyframes ee-quake{ 0%,100%{transform:translate(0,0) rotate(0)} 20%{transform:translate(-11px,7px) rotate(-.7deg)} 40%{transform:translate(10px,-8px) rotate(.6deg)} 60%{transform:translate(-8px,9px) rotate(-.4deg)} 80%{transform:translate(9px,-6px) rotate(.5deg)} }
  .ee-crumble{ animation:ee-crumble 1.4s cubic-bezier(.5,0,.75,1) forwards; }
  @keyframes ee-crumble{ to{ transform:translateY(64vh) rotate(9deg) scale(.88); opacity:.1; filter:sepia(1) brightness(.35) blur(2px); } }

  .ee-fire{ position:fixed; inset:0; z-index:2147482000; pointer-events:none; overflow:hidden; }
  .ee-heat{ position:absolute; inset:0; mix-blend-mode:screen; animation:ee-flicker .11s infinite;
    background:radial-gradient(130% 100% at 50% 100%, rgba(255,130,0,.55), rgba(255,40,0,.25) 42%, transparent 76%); }
  .ee-flames{ position:absolute; left:-6%; right:-6%; bottom:0; height:0; mix-blend-mode:screen; filter:blur(7px) contrast(1.45);
    animation:ee-rise 1.3s cubic-bezier(.4,0,.2,1) forwards; }
  .ee-flames-a{ background:linear-gradient(to top,#ffe000 0%,#ff7b00 22%,#ff2200 50%,rgba(190,0,0,.5) 78%,transparent 100%); }
  .ee-flames-b{ opacity:.9; animation-duration:1.7s; background:linear-gradient(to top,#fff3a0 0%,#ffae00 30%,#ff4400 62%,transparent 100%);
    -webkit-mask-image:repeating-linear-gradient(94deg,#000 0 16px,transparent 16px 42px); mask-image:repeating-linear-gradient(94deg,#000 0 16px,transparent 16px 42px); }
  @keyframes ee-rise{ from{height:0} to{height:138%} }
  @keyframes ee-flicker{ 0%{opacity:.82} 50%{opacity:1} 100%{opacity:.78} }

  .ee-particle{ position:fixed; bottom:-50px; z-index:2147482600; pointer-events:none; will-change:transform,opacity; animation:ee-float linear forwards; }
  @keyframes ee-float{ 0%{ transform:translateY(0) translateX(0) rotate(0); opacity:1 } 100%{ transform:translateY(-116vh) translateX(var(--x,0)) rotate(560deg); opacity:0 } }

  .ee-boom{ position:fixed; inset:0; z-index:2147483600; display:grid; place-items:center; align-content:center; gap:16px; text-align:center; pointer-events:none; padding:20px; }
  .ee-boom-txt{ font-family:var(--display,Georgia,serif); font-weight:800; font-size:clamp(3rem,14vw,9rem); color:#fff;
    text-shadow:0 0 30px #ff5a00,0 6px 0 #b3360a,0 0 90px #ff2200; animation:ee-pop .5s cubic-bezier(.2,1.7,.4,1) both, ee-bobble 1.2s ease-in-out .5s infinite; }
  .ee-boom-sub{ font-family:var(--mono,ui-monospace,monospace); color:#ffd0b0; font-size:clamp(.8rem,2.6vw,1.15rem); letter-spacing:.1em; text-shadow:0 2px 8px #000; }
  @keyframes ee-pop{ from{transform:scale(0) rotate(-14deg);opacity:0} to{transform:scale(1) rotate(0);opacity:1} }
  @keyframes ee-bobble{ 0%,100%{transform:rotate(-2deg) translateY(0)} 50%{transform:rotate(2deg) translateY(-9px)} }
  .ee-reset{ pointer-events:auto; cursor:pointer; font-family:var(--mono,ui-monospace,monospace); font-weight:700; letter-spacing:.12em; text-transform:uppercase;
    color:#160000; background:#ffce3a; border:0; padding:15px 26px; border-radius:40px; margin-top:8px;
    box-shadow:0 8px 0 #b88600,0 16px 32px rgba(0,0,0,.5); animation:ee-bobble 1s ease-in-out infinite; }
  .ee-reset:active{ transform:translateY(6px); box-shadow:0 2px 0 #b88600; }

  @media(prefers-reduced-motion:reduce){
    .ee-btn,.ee-warn,.ee-heat,.ee-flames,.ee-boom-txt,.ee-reset,.ee-doomsday{ animation-duration:.001s!important; }
  }`;
  const style = document.createElement('style'); style.id = 'ee-style'; style.textContent = css; document.head.appendChild(style);

  /* ---------- konami: type f-i-r-e ---------- */
  let buf = '';
  addEventListener('keydown', e => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key && e.key.length === 1) { buf = (buf + e.key.toLowerCase()).slice(-4); if (buf === 'fire') showDoomsday(); }
  });

  /* ---------- doomsday button ---------- */
  let dd = null, escHandler = null;
  function showDoomsday() {
    if (dd || document.querySelector('.ee-fire')) return;
    dd = document.createElement('div'); dd.className = 'ee-doomsday';
    const warns = ['⚠ DO NOT PRESS ⚠', 'WARNING', 'DANGER', 'DO NOT TOUCH', '☢ CRITICAL ☢', 'NOPE', "SERIOUSLY DON'T", '⚠ HAZARD ⚠', 'BAD IDEA'];
    let html = '';
    warns.forEach((w, i) => {
      const top = (6 + (i * 53 + 11) % 84), left = (5 + (i * 37 + 7) % 80), rot = ((i * 47) % 40) - 20, delay = ((i * 13) % 60) / 100;
      html += `<span class="ee-warn" style="top:${top}%;left:${left}%;transform:rotate(${rot}deg);animation-delay:${delay}s">${w}</span>`;
    });
    html += `<button class="ee-btn" type="button" aria-label="DO NOT PRESS"><span class="ee-btn-skull">☠</span><span class="ee-btn-txt">DO&nbsp;NOT<br>PRESS</span></button>`;
    html += `<div class="ee-hint">(press ESC to back away slowly…)</div>`;
    dd.innerHTML = html;
    document.body.appendChild(dd);
    dd.querySelector('.ee-btn').addEventListener('click', detonate);
    escHandler = e => { if (e.key === 'Escape') closeDoomsday(); };
    addEventListener('keydown', escHandler);
  }
  function closeDoomsday() {
    if (dd) { dd.remove(); dd = null; }
    if (escHandler) { removeEventListener('keydown', escHandler); escHandler = null; }
  }

  /* ---------- detonation: shake + explode + fire + clowns ---------- */
  function detonate() {
    closeDoomsday();
    const content = [...document.body.children];           // original site, captured before overlays

    const flash = document.createElement('div'); flash.className = 'ee-flash'; document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 600);

    document.body.classList.add('ee-shake');
    setTimeout(() => document.body.classList.remove('ee-shake'), 1600);
    content.forEach(el => el.classList.add('ee-crumble'));   // the world falls apart

    const fire = document.createElement('div'); fire.className = 'ee-fire';
    fire.innerHTML = '<div class="ee-heat"></div><div class="ee-flames ee-flames-a"></div><div class="ee-flames ee-flames-b"></div>';
    document.body.appendChild(fire);

    const EMOJI = ['🔥', '💥', '🤡', '🎪', '🔥', '🔥', '😈', '💀', '🎈', '🃏'];
    let r = 1;
    const rng = () => (r = (r * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
    const spawn = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        const p = document.createElement('div'); p.className = 'ee-particle';
        p.textContent = EMOJI[(rng() * EMOJI.length) | 0];
        p.style.left = (rng() * 100) + '%';
        p.style.fontSize = (20 + rng() * 46) + 'px';
        p.style.animationDuration = (1.6 + rng() * 1.9) + 's';
        p.style.setProperty('--x', (((rng() * 200) | 0) - 100) + 'px');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 3700);
      }
    }, 85);
    setTimeout(() => clearInterval(spawn), 9000);

    setTimeout(() => {
      const boom = document.createElement('div'); boom.className = 'ee-boom';
      boom.innerHTML = '<div class="ee-boom-txt">🤡 BOOM 🤡</div>' +
        '<div class="ee-boom-sub">you pressed the button.<br>the whole world is on fire now. nice.</div>' +
        '<button class="ee-reset" type="button">↻ rebuild the world</button>';
      document.body.appendChild(boom);
      boom.querySelector('.ee-reset').addEventListener('click', () => location.reload());
    }, 850);

    startClownMusic();
    slideWhistle();
  }

  /* ---------- audio: synthesized goofy circus/clown music (no files, no copyright) ---------- */
  let actx = null, musicTimer = null;
  const AC = () => actx || (actx = new (window.AudioContext || window.webkitAudioContext)());
  const F = n => 440 * Math.pow(2, n / 12);                 // n = semitones from A4
  function tone(freq, t, dur, type, vol) {
    const c = AC(), o = c.createOscillator(), g = c.createGain();
    o.type = type || 'square'; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol || 0.16, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0006, t + dur);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.03);
  }
  function honk(t) {
    const c = AC(), o = c.createOscillator(), g = c.createGain(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(F(-2), t); o.frequency.exponentialRampToValueAtTime(F(-9), t + 0.16);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.22, t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + 0.24);
  }
  function slideWhistle() {
    const c = AC(), t = c.currentTime + 0.02, o = c.createOscillator(), g = c.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(F(-12), t); o.frequency.exponentialRampToValueAtTime(F(15), t + 0.5); o.frequency.exponentialRampToValueAtTime(F(-5), t + 0.95);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.2, t + 0.05); g.gain.exponentialRampToValueAtTime(0.001, t + 0.98);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + 1);
  }
  function startClownMusic() {
    const c = AC(); if (c.state === 'suspended') c.resume();
    const beat = 0.34;
    // goofy circus lead (semitones from A4) + durations in beats
    const lead = [3, 3, 10, 7, 3, 8, 5, -2, -2, 5, 3, -2, 0, -1, -2, -5];
    const dur = [.5, .5, .5, .5, 1, .5, .5, .5, .5, .5, .5, 1, .5, .5, .5, 1];
    const bass = [-9, -2, -9, -2, -9, -2, -9, -2];          // oom-pah roots
    const loopLen = 8 * beat;
    function schedule(start) {
      for (let b = 0; b < 8; b++) {
        const t = start + b * beat;
        tone(F(bass[b] - 12), t, beat * 0.5, 'sawtooth', 0.24);          // OOM
        tone(F(bass[b] + 3), t + beat * 0.5, beat * 0.4, 'square', 0.10); // pah
        tone(F(bass[b] + 7), t + beat * 0.5, beat * 0.4, 'square', 0.08);
      }
      let t = start;
      for (let i = 0; i < lead.length; i++) { tone(F(lead[i]), t, dur[i] * beat * 0.95, 'square', 0.15); t += dur[i] * beat; }
      honk(start + 7.25 * beat);
    }
    let next = c.currentTime + 0.08; schedule(next); next += loopLen;
    musicTimer = setInterval(() => { schedule(next); next += loopLen; }, loopLen * 1000);
  }
})();
