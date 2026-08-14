import { ArrowRight, Star } from 'lucide-react';
import './AboutUsHero.css';

const AboutUsHero = () => {
  return (
    <section className="about-us-hero">
      {/* Background elements removed as requested */}

      <div className="about-hero-container">
        
        <h1 className="about-hero-badge">
          <Star size={14} className="badge-icon" />
          <span>Pre-Engineered Buildings & Construction Engineering</span>
        </h1>

        <h2 className="about-hero-title">
          <span className="title-dark">We Build Spaces</span>
          <br />
          <span className="title-green">That Last</span>
        </h2>

        <p className="about-hero-subtitle">
          Tesco Structures designs and delivers world-class Pre-Engineered Buildings (PEB), tensile roofing and steel structures across India — built with precision, engineered for permanence.
        </p>

        <div className="about-hero-actions">
          <a href="#what-we-do" className="btn-explore" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
            Explore Our Work <ArrowRight size={18} />
          </a>
          <a href="#about-contact" className="btn-talk" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            Talk to Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUsHero;
