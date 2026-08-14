import Hero from '../components/Hero';
import Clients from '../components/Clients';
import About from '../components/About';
import Services from '../components/Services';
import TensileServices from '../components/TensileServices';
import WhyChooseUs from '../components/WhyChooseUs';
import ManufacturingHub from '../components/ManufacturingHub';
import Process from '../components/Process';
import Partner from '../components/Partner';
import GlobalStandards from '../components/GlobalStandards';
import ProjectsGallery from '../components/ProjectsGallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import { homeSchemas } from '../seo/schemas';

const Home = () => {
  return (
    <>
      <Seo
        schemas={homeSchemas}
        title="PEB Company in Chennai | Turnkey PEB Solutions – Tesco Structures"
        description="Tesco Structures provides turnkey Pre-Engineered Buildings in Chennai — from design to on-site erection of warehouses, factories, sheds & MEP. Get a quote."
        canonical="https://www.tescostructures.com/"
        ogTitle="PEB Company in Chennai | Turnkey PEB Solutions – Tesco Structures"
        ogUrl="https://www.tescostructures.com/"
        ogImage="https://www.tescostructures.com/ts-logo.png"
        ogDescription="Tesco Structures provides turnkey Pre-Engineered Buildings in Chennai — from design to on-site erection of warehouses, factories, sheds & MEP. Get a quote."
        twitterCard="summary"
        twitterTitle="PEB Company in Chennai | Turnkey PEB Solutions – Tesco Structures"
        twitterSite="@https://www.tescostructures.com/"
        twitterDescription="Tesco Structures provides turnkey Pre-Engineered Buildings in Chennai — from design to on-site erection of warehouses, factories, sheds & MEP. Get a quote."
        twitterImage="https://www.tescostructures.com/ts-logo.png"
        twitterImageAlt="PEB contractors in Chennai"
      />
      <Hero />
      <Clients />
      <About />
      <Services />
      <TensileServices />
      <WhyChooseUs />
      <ManufacturingHub />
      <Process />
      <Partner />
      <GlobalStandards />
      <ProjectsGallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
