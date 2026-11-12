'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { graphicDesignProjects } from '../data/graphicDesign';

const formatIndex = (index: number) => String(index + 1).padStart(2, '0');

export default function GraphicDesignSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const activeProject = activeIndex === null ? null : graphicDesignProjects[activeIndex];
  const move = useCallback((step: number) => {
    setActiveIndex(current => current === null
      ? 0
      : (current + step + graphicDesignProjects.length) % graphicDesignProjects.length);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, move]);

  return <section className="design-section" id="graphic-design" aria-labelledby="design-title">
    <header className="design-header">
      <div>
        <p className="eyebrow">Selected visual work / 2019—2026</p>
        <h2 id="design-title">Graphic<br />Design.</h2>
      </div>
      <div className="design-intro">
        <p>
          Satu ruang untuk berbagai kebutuhan visual: kampanye, social media,
          promosi produk, hingga komunikasi korporat.
        </p>
        <div className="design-guide" aria-hidden="true">
          <span>{String(graphicDesignProjects.length).padStart(2, '0')} selected projects</span>
          <span>Scroll to explore ↓</span>
        </div>
      </div>
    </header>

    <div className="design-gallery">
      {graphicDesignProjects.map((project, index) => <button
        type="button"
        className={`design-card design-card-${index + 1}`}
        onClick={() => setActiveIndex(index)}
        aria-label={`Buka ${project.title} dalam tampilan penuh`}
        key={project.title}
      >
        <div className="design-visual">
          <img src={project.image} alt={project.title} loading="lazy" />
          <span className="design-number">{formatIndex(index)}</span>
          <span className="design-view">View project <i>↗</i></span>
        </div>
        <div className="design-meta">
          <div><span>{project.category}</span><h3>{project.title}</h3></div>
          <span>{project.year}</span>
        </div>
      </button>)}
    </div>

    {activeProject && activeIndex !== null && <div
      className="design-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${activeProject.title}, tampilan penuh`}
      onMouseDown={event => { if (event.target === event.currentTarget) setActiveIndex(null); }}
      onTouchStart={event => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={event => {
        if (touchStart.current === null) return;
        const distance = touchStart.current - event.changedTouches[0].clientX;
        if (Math.abs(distance) > 55) move(distance > 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <header className="design-lightbox-header">
        <span>{formatIndex(activeIndex)} / {String(graphicDesignProjects.length).padStart(2, '0')}</span>
        <span>Selected visual work</span>
        <button type="button" onClick={() => setActiveIndex(null)} aria-label="Tutup tampilan penuh">Close ×</button>
      </header>
      <div className="design-lightbox-stage">
        <button type="button" className="design-lightbox-arrow previous" onClick={() => move(-1)} aria-label="Karya sebelumnya">←</button>
        <figure>
          <img src={activeProject.image} alt={activeProject.title} />
          <figcaption>
            <div><span>{activeProject.category}</span><h3>{activeProject.title}</h3></div>
            <span>{activeProject.year}</span>
          </figcaption>
        </figure>
        <button type="button" className="design-lightbox-arrow next" onClick={() => move(1)} aria-label="Karya berikutnya">→</button>
      </div>
      <p className="design-lightbox-hint">Use arrow keys or swipe to explore</p>
    </div>}
  </section>;
}
