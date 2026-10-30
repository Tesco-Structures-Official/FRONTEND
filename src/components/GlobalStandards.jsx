import './GlobalStandards.css';
import { Globe, MapPin, Bot, PenTool, ShieldCheck, Leaf, Award, Building2 } from 'lucide-react';

const GlobalStandards = () => {
  return (
    <section className="global-standards-section">
      <div className="container">
        
        {/* Top Split Section */}
        <div className="global-top-split">
          
          {/* Left Content */}
          <div className="global-left-content">
            <div className="global-subtitle">
              <div className="green-line"></div>
              <span>DESIGN & ENGINEERING</span>
            </div>
            
            <h3 className="global-title">
              <span className="text-white">World Class</span><br/>
              <span className="text-grey">Engineering.</span>
            </h3>
            
            <p className="global-desc">
              There's a lot of detail in a steel building you never see. As a PEB manufacturer in Chennai, we put our engineering into pre-engineered buildings and tensile structures that are designed once, properly, so they go up clean and stand for decades.
            </p>
            
            <div className="global-reach">
              <Globe size={20} />
              <span>In-House Fabrication</span>
            </div>
          </div>

          {/* Right Grid Stats */}
          <div className="global-stats-grid">
            
            {/* Top Row */}
            <div className="stat-cell border-right border-bottom">
              <p>Experience</p>
            </div>
            <div className="stat-cell border-right border-bottom">
              <p>Delivered</p>
            </div>
            <div className="stat-cell border-bottom">
              <p>Handover focus</p>
            </div>

            {/* Bottom Row */}
            <div className="stat-cell border-right">
              <div className="map-icon-wrapper"><Award size={20} /></div>
              <p>Certified<br/>Quality</p>
            </div>
            <div className="stat-cell border-right">
              <div className="map-icon-wrapper"><Building2 size={20} /></div>
              <p>Global<br/>Standards</p>
            </div>
            <div className="stat-cell">
              <div className="map-icon-wrapper">
                <MapPin size={20} />
              </div>
              <p className="text-xs uppercase tracking-wider">Tamil Nadu</p>
            </div>

          </div>
        </div>

        {/* Bottom Features Cards */}
        <div className="global-features-grid">
          
          <div className="feature-dark-card">
            <Bot size={24} className="feature-icon" />
            <h3>ROBOTIC WELDING</h3>
            <p>Automated, robotic welding for joints that come out consistent every single time.</p>
          </div>
          
          <div className="feature-dark-card">
            <PenTool size={24} className="feature-icon" />
            <h3>BIM MODELING</h3>
            <p>Full BIM modelling, so the whole building is resolved on screen before we cut steel.</p>
          </div>
          
          <div className="feature-dark-card">
            <Leaf size={24} className="feature-icon" />
            <h3>ECO-EFFICIENT</h3>
            <p>Recyclable steel and lean designs that cut material waste - easier on cost and the planet.</p>
          </div>
          
          <div className="feature-dark-card">
            <ShieldCheck size={24} className="feature-icon" />
            <h3>CRANE-READY DESIGN</h3>
            <p>Framing sized for EOT cranes and the heavy kit a plant runs.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalStandards;
