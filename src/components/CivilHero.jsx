import { Hammer, ArrowRight } from 'lucide-react';
import './CivilHero.css';

const CivilHero = () => {
  return (
    <section className="civil-hero-section">
      {/* Background layer */}
      <div className="civil-hero-bg"></div>
      
      <div className="civil-hero-container">
        <div className="civil-hero-content">
          <h2 className="civil-hero-badge">
            <Hammer size={14} className="civil-badge-icon" />
            Tamil Nadu's Trusted Civil Builder
          </h2>
          
          <h1 className="civil-hero-title">
            <span className="text-green block">South India's</span>
            <span className="text-white block">No.1 Civil</span>
            <span className="text-white block">Construction</span>
          </h1>
          
          <p className="civil-hero-desc">
            From Chennai's coastal foundations to Coimbatore's laterite hills, Madurai's black cotton soil to Trichy's Cauvery delta — 15 years of building across Tamil Nadu's toughest ground conditions. <a href="/civil-construction-services" style={{ color: 'var(--primary-green)', fontWeight: 700 }}>Civil construction services</a> done right, handed over with every test record, across South India.
          </p>
          
          <div className="civil-hero-actions">
            <a href="#contact" className="btn-solid-green" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              Contact
            </a>
            <a href="#projects" className="link-view-projects">
              View Our Projects <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="civil-hero-stats">
            <div className="civil-stat">
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className="civil-stat">
              <p>YEARS EXCELLENCE</p>
            </div>
            <div className="civil-stat">
              <p>9001:2015 CERTIFIED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilHero;
