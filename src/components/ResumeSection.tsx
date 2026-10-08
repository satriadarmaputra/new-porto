const experiences = [
  {
    period: '2025 - 2026',
    role: 'Social Media Specialist',
    company: 'Zyrex Indonesia',
    focus: 'Strategi, produksi konten, analitik, dan optimasi multi-platform.',
  },
  {
    period: '2025',
    role: 'Social Media Specialist',
    company: 'Samudera Indonesia',
    focus: 'Corporate communication, employer branding, dan employee engagement.',
  },
  {
    period: '2022 - 2025',
    role: 'Digital Marketing & Social Media Specialist',
    company: 'Rajawali Group',
    focus: 'Content strategy, campaign, reporting, dan paid media.',
  },
  {
    period: '2019 - 2024',
    role: 'Graphic Designer',
    company: 'Ranah Institute',
    focus: 'Visual communication, branding, dan creative production.',
  },
];

const capabilities = [
  'Content Strategy',
  'Social Media Analytics',
  'Video Production',
  'Graphic Design',
  'Corporate Communication',
  'Employer Branding',
];

export default function ResumeSection() {
  return <section className="resume-section" id="resume" aria-labelledby="resume-title">
    <div className="resume-intro">
      <p className="eyebrow">Career snapshot / CV</p>
      <h2 id="resume-title">6+ tahun di antara konten, desain &amp; digital.</h2>
      <p className="resume-lede">
        Social media specialist yang menggabungkan strategi, produksi kreatif,
        analitik, dan komunikasi korporat untuk mengubah ide menjadi hasil yang terukur.
      </p>
      <div className="resume-actions">
        <a className="resume-primary" href="/cv-satria-darma-putra.pdf" target="_blank" rel="noreferrer">Lihat CV <span aria-hidden="true">↗</span></a>
        <a className="resume-secondary" href="/cv-satria-darma-putra.pdf" download>Download PDF <span aria-hidden="true">↓</span></a>
      </div>
    </div>

    <div className="resume-details">
      <div className="experience-list" aria-label="Pengalaman utama">
        {experiences.map((experience, index) => <article className="experience-item" key={`${experience.company}-${experience.period}`}>
          <span className="experience-number">0{index + 1}</span>
          <div>
            <p className="experience-period">{experience.period}</p>
            <h3>{experience.role}</h3>
            <strong>{experience.company}</strong>
            <p>{experience.focus}</p>
          </div>
        </article>)}
      </div>

      <div className="capabilities-block">
        <p className="capabilities-label">Core capabilities</p>
        <div className="capability-tags">
          {capabilities.map(capability => <span key={capability}>{capability}</span>)}
        </div>
      </div>
    </div>
  </section>;
}
