'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { featuredContent } from '../data/featuredContent';
import VideoPreview from './VideoPreview';

export default function ContentSlider() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const current = featuredContent[active];
  const move = useCallback((step: number) => setActive(i => (i + step + featuredContent.length) % featuredContent.length), []);
  const startsOnInteractiveElement = (target: EventTarget | null) =>
    target instanceof HTMLElement && Boolean(target.closest('a, button, iframe, .video-wrap'));
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [move]);
  return <section className="slider-panel" aria-labelledby="slider-title">
    <header className="slider-header"><div><p className="eyebrow">Konten pilihan / Urut berdasarkan views</p><h2 id="slider-title">7 konten, beda angle.</h2></div><span className="counter">{current.id} <i>/</i> 07</span></header>
    <article key={current.id} className="content-card" style={{ backgroundColor: current.color }} onTouchStart={e => { touchStart.current = startsOnInteractiveElement(e.target) ? null : e.touches[0].clientX; }} onTouchEnd={e => { if (touchStart.current === null) return; const distance = touchStart.current - e.changedTouches[0].clientX; if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1); touchStart.current = null; }}><VideoPreview content={current} /><div className="content-info">
      <div className="content-meta"><div><span>Brand</span><strong>{current.brand}</strong></div><div><span>Platform</span><strong>{current.platform}</strong></div></div>
      <p className="snapshot">Snapshot saat dokumentasi</p><div className={`metric-grid ${current.metrics.length === 1 ? 'single' : ''}`}>{current.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      <p className="pillar">{current.pillar}</p><h3>{current.title}</h3><p className="story">{current.story}</p>
      <div className="binus-callout"><strong>Bisa dibawa ke Life at BINUS</strong><p>{current.application}</p></div><a className="primary-link" href={current.originalUrl} target="_blank" rel="noreferrer">Lihat konten asli ↗</a>
    </div></article>
    <nav className="slider-nav" aria-label="Navigasi konten"><div className="dots">{featuredContent.map((item, index) => <button type="button" key={item.id} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Lihat konten ${item.id}: ${item.title}`} aria-current={index === active ? 'true' : undefined} />)}</div><div className="arrows"><button type="button" onClick={() => move(-1)} aria-label="Konten sebelumnya">←</button><button type="button" onClick={() => move(1)} aria-label="Konten berikutnya">→</button></div></nav>
  </section>;
}
