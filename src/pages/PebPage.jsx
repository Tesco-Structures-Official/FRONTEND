import PebHero from '../components/PebHero';
import PebAbout from '../components/PebAbout';
import PebBenefits from '../components/PebBenefits';
import PebWhyChoose from '../components/PebWhyChoose';
import PebApplications from '../components/PebApplications';
import PebProjectsGallery from '../components/PebProjectsGallery';
import PebTestimonials from '../components/PebTestimonials';
import PebFaq from '../components/PebFaq';
import PebContact from '../components/PebContact';
import Seo from '../components/Seo';
import { pebSchemas } from '../seo/schemas';

const PebPage = () => {
  return (
    <div className="peb-page">
      <Seo
        schemas={pebSchemas}
        title="Pre-Engineered Buildings Chennai | Tesco Structures"
        description="15+ years building pre-engineered steel structures across South India. Warehouses, factories, cold storage & more — IS-code engineered, on time. Book a visit."
        canonical="https://www.tescostructures.com/peb-contractors-in-chennai"
        ogTitle="Pre-Engineered Buildings Chennai | Tesco Structures"
        ogUrl="https://www.tescostructures.com/peb-contractors-in-chennai"
        ogImage="https://www.tescostructures.com/peb_about_img.png"
        ogDescription="15+ years building pre-engineered steel structures across South India. Warehouses, factories, cold storage & more — IS-code engineered, on time. Book a visit."
        twitterCard="summary"
        twitterTitle="Pre-Engineered Buildings Chennai | Tesco Structures"
        twitterSite="@https://www.tescostructures.com/peb-contractors-in-chennai"
        twitterDescription="15+ years building pre-engineered steel structures across South India. Warehouses, factories, cold storage & more — IS-code engineered, on time. Book a visit."
        twitterImage="https://www.tescostructures.com/peb_about_img.png"
        twitterImageAlt="Pre-Engineered Buildings Chennai"
      />
      <PebHero />
      <PebAbout />
      <PebWhyChoose />
      <PebBenefits />
      <PebApplications />
      <PebProjectsGallery />
      <PebTestimonials />
      <PebFaq />
      <PebContact />
      {/* Additional PEB page sections will go here */}
    </div>
  );
};

export default PebPage;
