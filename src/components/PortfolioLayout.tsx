import ResultsPanel from './ResultsPanel';
import ContentSlider from './ContentSlider';
import GraphicDesignSection from './GraphicDesignSection';
import ResumeSection from './ResumeSection';

export default function PortfolioLayout() {
  return <>
    <main className="portfolio-layout">
      <ResultsPanel />
      <ContentSlider />
    </main>
    <GraphicDesignSection />
    <ResumeSection />
  </>;
}
