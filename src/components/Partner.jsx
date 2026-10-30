import './Partner.css';
import { Factory, PenTool, Timer, Rocket } from 'lucide-react';

const Partner = () => {
  return (
    <section className="partner-section">
      <div className="partner-bg-grid"></div> {/* Subtle background grid pattern */}
      <div className="container partner-container">
        
        {/* Left Column */}
        <div className="partner-left">
          <div className="partner-badge gradient-badge">WHY TESCO STRUCTURES</div>
          
          <h3 className="partner-title">
            Your Industrial Project<br/>
            Deserves a <span className="highlight-green">Partner</span>, Not<br/>
            Just a Contractor.
          </h3>
          
          <p className="partner-desc">
            We're a PEB industrial construction company, and it shows in how we work. From concept and engineering through fabrication and installation, we deliver turnkey EPC solutions for factories, warehouses, and industrial buildings across India - one team carrying the whole job, not a contractor who vanishes once the steel is up.
          </p>

          <div className="partner-stats-box">
            <div className="partner-stat">
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className="partner-stat">
              <p>YEARS EXPERIENCE</p>
            </div>
            <div className="partner-stat">
              <p>CERTIFIED PROCESS</p>
            </div>
            <div className="partner-stat">
              <p>SINGLE-POINT SUPPORT</p>
            </div>
          </div>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="partner-right">
          
          <div className="partner-card">
            <div className="partner-icon-wrap">
              <Factory size={20} />
            </div>
            <h3>In-House<br/>Manufacturing</h3>
            <p>We're a PEB building manufacturer that owns its workshop - one of the few pre-engineered building manufacturers controlling quality at every weld instead of outsourcing it.</p>
            <div className="partner-faint-number">01</div>
          </div>

          <div className="partner-card">
            <div className="partner-icon-wrap">
              <PenTool size={20} />
            </div>
            <h3>Expert Engineering<br/>Support</h3>
            <p>Our engineers work like proper PEB steel structure contractors, turning awkward site conditions into a clean, buildable design - then carry it through as turnkey EPC solutions.</p>
            <div className="partner-faint-number">02</div>
          </div>

          <div className="partner-card">
            <div className="partner-icon-wrap">
              <Timer size={20} />
            </div>
            <h3>Guaranteed<br/>Timelines</h3>
            <p>As experienced warehouse construction contractors and a factory construction company, we hold the schedule through tight fabrication and logistics planning.</p>
            <div className="partner-faint-number">03</div>
          </div>

          <div className="partner-card">
            <div className="partner-icon-wrap">
              <Rocket size={20} />
            </div>
            <h3>Proven Project<br/>Delivery</h3>
            <p>A solid track record as PEB contractors and a warehouse construction company, with completed projects across many industrial sectors.</p>
            <div className="partner-faint-number">04</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Partner;
