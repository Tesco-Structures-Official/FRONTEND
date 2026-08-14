import AboutUsHero from '../components/AboutUsHero';
import AboutUsWhoWeAre from '../components/AboutUsWhoWeAre';
import AboutUsWhatWeDo from '../components/AboutUsWhatWeDo';
import AboutUsPrinciples from '../components/AboutUsPrinciples';
import AboutUsOrgCulture from '../components/AboutUsOrgCulture';
import AboutUsSafety from '../components/AboutUsSafety';
import AboutUsAdvantage from '../components/AboutUsAdvantage';
import AboutUsFootprints from '../components/AboutUsFootprints';
import AboutUsCTA from '../components/AboutUsCTA';
import Seo from '../components/Seo';
import { aboutSchemas } from '../seo/schemas';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Seo
        schemas={aboutSchemas}
        title="About Us – Tesco Structures | Steel Building Experts"
        description="Meet Tesco Structures: South India's trusted PEB and steel structure company. 15+ years of turnkey warehouses, factories & sheds — on budget, on time, built to last."
        canonical="https://www.tescostructures.com/about-us"
        ogTitle="About Us – Tesco Structures | Steel Building Experts"
        ogUrl="https://www.tescostructures.com/about-us"
        ogImage="https://www.tescostructures.com/about_us_who_we_are.png"
        ogDescription="Meet Tesco Structures: South India's trusted PEB and steel structure company. 15+ years of turnkey warehouses, factories & sheds — on budget, on time, built to last."
        twitterCard="summary"
        twitterTitle="About Us – Tesco Structures | Steel Building Experts"
        twitterSite="@https://www.tescostructures.com/about-us"
        twitterDescription="Meet Tesco Structures: South India's trusted PEB and steel structure company. 15+ years of turnkey warehouses, factories & sheds — on budget, on time, built to last."
        twitterImage="https://www.tescostructures.com/about-us"
        twitterImageAlt="https://www.tescostructures.com/about_us_who_we_are.png"
      />
      <AboutUsHero />
      <AboutUsWhoWeAre />
      <AboutUsWhatWeDo />
      <AboutUsPrinciples />
      <AboutUsOrgCulture />
      <AboutUsSafety />
      <AboutUsAdvantage />
      <AboutUsFootprints />
      <AboutUsCTA />
    </div>
  );
};

export default AboutUs;
