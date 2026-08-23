'use client';

import { useState } from 'react';
import type { FeaturedContent } from '../data/featuredContent';

export default function VideoPreview({ content }: { content: FeaturedContent }) {
  const [interactive, setInteractive] = useState(false);
  const platform = content.platform.startsWith('Instagram') ? 'Instagram' : content.platform.startsWith('YouTube') ? 'YouTube' : 'TikTok';
  return <div className={`video-wrap ${interactive ? 'is-interactive' : 'is-locked'}`}>
    <div className="video-fallback" aria-hidden="true"><span>{content.id}</span><strong>{content.title}</strong></div>
    <iframe key={content.embedUrl} src={content.embedUrl} title={`Preview ${content.title}`} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
    <button
      type="button"
      className="interaction-toggle"
      onClick={() => setInteractive(value => !value)}
      aria-pressed={interactive}
    >
      {interactive ? 'Kunci frame' : 'Aktifkan video'}
    </button>
    <a href={content.originalUrl} target="_blank" rel="noreferrer" className="platform-link">Buka di {platform} ↗</a>
  </div>;
}
