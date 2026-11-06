'use client';
import { useEffect, useState } from 'react';
import { lines } from '@/data';
const tabs = ['All', 'Tradeseel', 'Moneyseel', 'ESMACS'];
export default function Stream() {
  const [f, setF] = useState('All');
  const [n, setN] = useState(4);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setN((x) => x + 1), 2800);
    return () => clearInterval(t);
  }, []);
  const pool = lines.filter((l) => f === 'All' || l.p === f);
  const rows = Array.from({ length: 5 }, (_, i) => n - i).filter((k) => k >= 0).map((k) => ({ l: pool[k % pool.length], k }));
  return (
    <aside className="term" aria-label="What I have shipped, taken from my résumé">
      <div className="term-top" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={f === t} onClick={() => setF(t)}>{t}</button>
        ))}
      </div>
      <ul>
        {rows.map(({ l, k }) => (
          <li key={k}><b>{l.p}</b><span>{l.t}</span></li>
        ))}
      </ul>
      <p className="term-note">Responsibilities from my résumé, newest first.</p>
    </aside>
  );
}
