import type { FeaturedContent } from '../data/featuredContent';

export default function VideoPreview({ content }: { content: FeaturedContent }) {
  const platform = content.platform.startsWith('Instagram') ? 'Instagram' : content.platform.startsWith('YouTube') ? 'YouTube' : 'TikTok';
  const platformClass = platform.toLowerCase();
  return <div className={`video-wrap video-${platformClass}`}>
    <div className="video-fallback" aria-hidden="true"><span>{content.id}</span><strong>{content.title}</strong></div>
    <iframe key={content.embedUrl} src={content.embedUrl} title={`Preview ${content.title}`} loading="eager" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; web-share" allowFullScreen />
    <a href={content.originalUrl} target="_blank" rel="noreferrer" className="platform-link">Buka di {platform} ↗</a>
  </div>;
}
