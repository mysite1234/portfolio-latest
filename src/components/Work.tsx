'use client';
import { useState } from 'react';
import { projects } from '@/data';
export default function Work() {
  const [i, setI] = useState(0);
  const p = projects[i];
  return (
    <div className="work">
      <div role="tablist" aria-label="Projects" className="work-list">
        {projects.map((x, j) => (
          <button key={x.id} role="tab" aria-selected={i === j} onClick={() => setI(j)}>
            <strong>Project {j + 1}: {x.name}</strong>
            <span>{x.title}</span>
          </button>
        ))}
      </div>
      <article role="tabpanel" key={p.id} className="work-body">
        <p className="lede">{p.overview}</p>
        <h3>Technology stack</h3>
        <p className="tags">{p.stack.map((t) => <span key={t}>{t}</span>)}</p>
        <h3>Key responsibilities</h3>
        <ul className="did">{p.did.map((d) => <li key={d}>{d}</li>)}</ul>
      </article>
    </div>
  );
}
