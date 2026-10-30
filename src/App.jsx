import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from './components/ScrollReveal';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PebPage from './pages/PebPage';
import TensilePage from './pages/TensilePage';
import CivilPage from './pages/CivilPage';
import ArchPage from './pages/ArchPage';
import RoofingPage from './pages/RoofingPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import ContactPage from './pages/ContactPage';
import './App.css';

// Everything inside the router. Exported so the build can render the homepage
// to static HTML (scripts/prerender-home.mjs) with a StaticRouter.
export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/peb-contractors-in-chennai" element={<PebPage />} />
          <Route path="/tensile-roofing-chennai" element={<TensilePage />} />
          <Route path="/civil-construction-services" element={<CivilPage />} />
          <Route path="/architectural-design-structural-consultancy-chennai" element={<ArchPage />} />
          <Route path="/roofing-solutions-chennai" element={<RoofingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* URL shown while the contact form thank-you popup is open. Same page,
              so a refresh or direct hit lands on the contact form, not the catch-all. */}
          <Route path="/contact/thank-you" element={<ContactPage />} />
          {/* Catch-all: any unknown URL routes back to the home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
