import { Building2, Settings, PenTool, Hammer, Layers, ArrowRight } from 'lucide-react';
import './AboutUsWhatWeDo.css';

const services = [
  {
    id: '01',
    title: 'Pre-Engineered Building (PEB)', linkTo: '/peb-contractors-in-chennai',
    desc: 'Custom-designed PEB structures fabricated in-house and erected fast — warehouses, factories and clear-span sheds built to spec.',
    icon: Building2,
  },
  {
    id: '02',
    title: 'Tensile Roofing', linkTo: '/tensile-roofing-chennai',
    desc: 'Durable, architectural tensile roofing and fabric canopies that combine wide-span coverage with a striking, modern look.',
    icon: Layers,
  },
  {
    id: '03',
    title: 'Civil Construction', linkTo: '/civil-construction-services',
    desc: 'Strong, reliable civil construction — foundations, flooring and site works engineered to carry your structure for decades.',
    icon: Hammer,
  },
  {
    id: '04',
    title: 'Architectural Design & Structural Consultancy', linkTo: '/architectural-design-structural-consultancy-chennai',
    desc: 'End-to-end architectural design and structural consultancy — from concept drawings to load analysis and approvals.',
    icon: PenTool,
  },
  {
    id: '05',
    title: 'All Types of Roofing', linkTo: '/roofing-solutions-chennai',
    desc: 'Complete roofing solutions — metal sheet, insulated, polycarbonate and curved roofing for every kind of industrial space.',
    icon: Settings,
  }
];

const AboutUsWhatWeDo = () => {
  return (
    <section className="what-we-do-section" id="what-we-do">
      <div className="what-we-do-container">
        <div className="what-we-do-header">
          <h2>What we <span className="text-green">do</span></h2>
          <span className="subtitle-brand">End-to-end steel building solutions</span>
          <p>
            Our expert engineering team and consultants deliver a full range of industrial and commercial construction services — all under one roof.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className={`service-card ${service.dark ? 'dark-card' : ''} ${index < 3 ? 'top-row' : 'bottom-row'}`}
              >
                <div className="card-header">
                  <div className="icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <span className="card-number">{service.id}</span>
                </div>
                
                <h3 className="card-title" dangerouslySetInnerHTML={{ __html: service.linkTo ? `<a href="${service.linkTo}" style="color:var(--primary-green);font-weight:700">${service.title}</a>` : service.title }}></h3>
                <p className="card-desc">{service.desc}</p>
                
                {service.hasLink && (
                  <a href="#" className="card-link">
                    Learn more <ArrowRight size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUsWhatWeDo;
