import ResultsPanel from './ResultsPanel';
import ContentSlider from './ContentSlider';
import ResumeSection from './ResumeSection';

export default function PortfolioLayout() {
  return <>
    <main className="portfolio-layout">
      <ResultsPanel />
      <ContentSlider />
    </main>
    <ResumeSection />
  </>;
}
