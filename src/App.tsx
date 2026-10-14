import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';

// Pages
import Home from './pages/Home';
import SolutionsIndex from './pages/SolutionsIndex';
import ServiceDetail from './pages/ServiceDetail';
import PortfolioIndex from './pages/PortfolioIndex';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ProjectEstimator from './pages/ProjectEstimator';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900 bg-[#FAFAFA] text-[#0F172A]">
        <main className="flex-1">
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Home />} />

            {/* Solutions / Services */}
            <Route path="/solutions" element={<SolutionsIndex />} />
            <Route path="/solutions/:slug" element={<ServiceDetail />} />

            {/* Portfolio & Case Studies */}
            <Route path="/portfolio" element={<PortfolioIndex />} />
            <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />

            {/* Interactive Cost Estimator */}
            <Route path="/estimate" element={<ProjectEstimator />} />

            {/* Pricing Details */}
            <Route path="/pricing" element={<PricingPage />} />

            {/* Project Enquiry / Contact */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-project" element={<ContactPage />} />

            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
