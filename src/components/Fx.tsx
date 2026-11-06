'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export function Reveal({ children, d = 0, className = '' }: { children: ReactNode; d?: number; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={r} className={`rv ${className}`} style={{ transitionDelay: `${d}ms` }}>{children}</div>;
}
export function Typer({ words }: { words: string[] }) {
  const [t, setT] = useState(words[0]);
  useEffect(() => {
    if (calm()) return;
    let w = 0, i = words[0].length, del = true, id: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (del) { i--; if (i <= 0) { del = false; w = (w + 1) % words.length; i = 0; } }
      else { i++; if (i >= words[w].length) { del = true; setT(words[w]); id = setTimeout(tick, 1600); return; } }
      setT(words[w].slice(0, Math.max(i, 0))); id = setTimeout(tick, del ? 45 : 90);
    };
    id = setTimeout(tick, 1600); return () => clearTimeout(id);
  }, [words]);
  return <span className="typer">{t}</span>;
}
export function Count({ n, suffix = '' }: { n: number; suffix?: string }) {
  const r = useRef<HTMLSpanElement>(null); const [v, setV] = useState(0);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      if (calm()) { setV(n); return; }
      const s = performance.now();
      const f = (t: number) => { const p = Math.min((t - s) / 1500, 1); setV(Math.round(n * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(f); };
      requestAnimationFrame(f);
    });
    io.observe(el); return () => io.disconnect();
  }, [n]);
  return <span ref={r}>{v}{suffix}</span>;
}
export function Fx() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>('.prog');
    const spot = document.querySelector<HTMLElement>('.spot');
    let raf = 0;
    const sc = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - innerHeight;
        if (bar) bar.style.transform = `scaleX(${h > 0 ? Math.min(scrollY / h, 1) : 0})`;
      });
    };
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const mv = (e: PointerEvent) => {
      if (!spot) return;
      spot.style.setProperty('--mx', e.clientX + 'px');
      spot.style.setProperty('--my', e.clientY + 'px');
    };
    addEventListener('scroll', sc, { passive: true });
    if (fine) addEventListener('pointermove', mv);
    sc();
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', sc); removeEventListener('pointermove', mv); };
  }, []);
  return <><div className="prog" /><div className="spot" /></>;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.dataset.theme === 'dark'); }, []);
  const flip = () => {
    const n = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = n;
    try { localStorage.setItem('theme', n); } catch {}
    setDark(!dark);
  };
  return (
    <button className="tt" onClick={flip} aria-pressed={dark} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
      <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
      <svg className="moon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" /></svg>
    </button>
  );
}
