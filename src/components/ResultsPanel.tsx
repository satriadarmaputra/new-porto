export default function ResultsPanel() {
  const results = [['12.4M', 'Instagram views'], ['31M', 'Facebook views'], ['1M', 'TikTok views'], ['604K', 'YouTube views']];
  return <aside className="results-panel" aria-labelledby="results-title">
    <header className="brand-row"><span className="monogram">S/D</span><span>Social Media Portfolio</span></header>
    <div className="results-main"><p className="eyebrow light">Hasil kerja</p><h1 id="results-title">45M<span>+</span></h1><p className="lede">Total views dari berbagai platform</p>
      <div className="result-grid">{results.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      <div className="chips" aria-label="Metrik pendukung"><span><b>1.4M+</b> Link clicks</span><span><b>37.6K</b> Pengikut baru</span><span><b>2.4K</b> Jam tonton</span></div>
    </div>
    <footer className="results-footer"><p>Data performa mengacu pada laporan yang tercantum di CV.</p><a href="mailto:satria@example.com">Hubungi saya ↗</a></footer><span className="decor-arrow" aria-hidden="true">↗</span>
  </aside>;
}
