/* Original 8-bit UI tones. Synthesized here — not Nintendo (or any) recordings. */
(function (root) {
  let ctx;
  let pulseWave;

  function context() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function pulse(c) {
    if (!pulseWave) {
      const n = 32;
      const real = new Float32Array(n);
      const imag = new Float32Array(n);
      const duty = 0.25;
      for (let i = 1; i < n; i++) {
        imag[i] = (2 / (i * Math.PI)) * Math.sin(i * Math.PI * duty);
      }
      pulseWave = c.createPeriodicWave(real, imag);
    }
    const osc = c.createOscillator();
    osc.setPeriodicWave(pulseWave);
    return osc;
  }

  function tone({ freq, dur, vol = 0.06, delay = 0, slide, noise }) {
    const c = context();
    if (!c) return;
    const t0 = c.currentTime + delay;
    if (noise) {
      const len = Math.max(1, Math.floor(c.sampleRate * dur));
      const buf = c.createBuffer(1, len, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
      const src = c.createBufferSource();
      src.buffer = buf;
      const f = c.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.setValueAtTime(1800, t0);
      const g = c.createGain();
      g.gain.setValueAtTime(vol, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      src.connect(f);
      f.connect(g);
      g.connect(c.destination);
      src.start(t0);
      src.stop(t0 + dur + 0.02);
      return;
    }
    const osc = pulse(c);
    const g = c.createGain();
    osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(slide, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  const sfx = {
    unlock() { context(); },
    powerOn() {
      tone({ freq: 140, dur: 0.04, vol: 0.04, noise: true });
      tone({ freq: 392, dur: 0.09, vol: 0.055, delay: 0.04 });
      tone({ freq: 523, dur: 0.16, vol: 0.06, delay: 0.13 });
    },
    powerOff() {
      tone({ freq: 140, dur: 0.04, vol: 0.035, noise: true });
      tone({ freq: 330, dur: 0.12, vol: 0.05, slide: 140, delay: 0.02 });
    },
    dpad() {
      tone({ freq: 784, dur: 0.035, vol: 0.04 });
    },
    a() {
      tone({ freq: 880, dur: 0.07, vol: 0.065 });
    },
    b() {
      tone({ freq: 392, dur: 0.08, vol: 0.055 });
    },
    start() {
      tone({ freq: 523, dur: 0.05, vol: 0.055 });
      tone({ freq: 784, dur: 0.1, vol: 0.06, delay: 0.055 });
    },
    select() {
      tone({ freq: 587, dur: 0.055, vol: 0.05 });
    }
  };

  root.pocketSfx = sfx;
})(window);
