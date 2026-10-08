import { graphicDesignProjects } from '../data/graphicDesign';

export default function GraphicDesignSection() {
  return <section className="design-section" id="graphic-design" aria-labelledby="design-title">
    <header className="design-header">
      <div>
        <p className="eyebrow">Selected visual work</p>
        <h2 id="design-title">Graphic<br />Design.</h2>
      </div>
      <p>
        Pilihan pekerjaan visual dari kebutuhan brand, kampanye,
        social media, hingga komunikasi informasi.
      </p>
    </header>

    <div className="design-gallery">
      {graphicDesignProjects.map((project, index) => {
        const content = <>
          <div className="design-visual">
            {project.image
              ? <img src={project.image} alt={project.title} loading="lazy" />
              : <div className="design-placeholder" aria-label="Slot karya siap diisi">
                  <span>0{index + 1}</span>
                  <small>Tambahkan karya</small>
                </div>}
          </div>
          <div className="design-meta">
            <div><span>{project.category}</span><h3>{project.title}</h3></div>
            <span>{project.year}</span>
          </div>
        </>;

        return project.href
          ? <a className={`design-card design-card-${index + 1}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>{content}</a>
          : <article className={`design-card design-card-${index + 1}`} key={project.title}>{content}</article>;
      })}
    </div>
  </section>;
}
