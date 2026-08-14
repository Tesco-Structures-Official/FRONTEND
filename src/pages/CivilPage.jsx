import CivilHero from '../components/CivilHero';
import CivilAbout from '../components/CivilAbout';
import CivilWhyChoose from '../components/CivilWhyChoose';
import CivilBenefits from '../components/CivilBenefits';
import CivilApplications from '../components/CivilApplications';
import CivilProjectsGallery from '../components/CivilProjectsGallery';
import CivilTestimonials from '../components/CivilTestimonials';
import CivilFaq from '../components/CivilFaq';
import CivilContact from '../components/CivilContact';
import Seo from '../components/Seo';
import { civilSchemas } from '../seo/schemas';

const CivilPage = () => {
  return (
    <div className="civil-page">
      <Seo
        schemas={civilSchemas}
        title="Civil Construction Company in Chennai | Tesco Structure"
        description="Tesco Structure – trusted civil construction company in Chennai, Coimbatore, Madurai & South India. RCC foundations & turnkey civil works. Get a free quote today."
        canonical="https://www.tescostructures.com/civil-construction-services"
        ogTitle="Civil Construction Company in Chennai | Tesco Structure"
        ogUrl="https://www.tescostructures.com/civil-construction-services"
        ogImage="https://www.tescostructures.com/images/about_civil_construction.png"
        ogDescription="Tesco Structure – trusted civil construction company in Chennai, Coimbatore, Madurai & South India. RCC foundations & turnkey civil works. Get a free quote today."
        twitterCard="summary"
        twitterTitle="Civil Construction Company in Chennai | Tesco Structure"
        twitterSite="@https://www.tescostructures.com/civil-construction-services"
        twitterDescription="Tesco Structure – trusted civil construction company in Chennai, Coimbatore, Madurai & South India. RCC foundations & turnkey civil works. Get a free quote today."
        twitterImage="https://www.tescostructures.com/images/about_civil_construction.png"
        twitterImageAlt="civil construction"
      />
      <CivilHero />
      <CivilAbout />
      <CivilWhyChoose />
      <CivilBenefits />
      <CivilApplications />
      <CivilProjectsGallery />
      <CivilTestimonials />
      <CivilFaq />
      <CivilContact />
    </div>
  );
};

export default CivilPage;
