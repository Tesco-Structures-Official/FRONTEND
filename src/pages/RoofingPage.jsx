import RoofingHero from '../components/RoofingHero';
import RoofingAbout from '../components/RoofingAbout';
import RoofingWhyChoose from '../components/RoofingWhyChoose';
import RoofingBenefits from '../components/RoofingBenefits';
import RoofingApplications from '../components/RoofingApplications';
import RoofingTestimonials from '../components/RoofingTestimonials';
import RoofingFaq from '../components/RoofingFaq';
import RoofingContact from '../components/RoofingContact';
import Seo from '../components/Seo';
import { roofingSchemas } from '../seo/schemas';

const RoofingPage = () => {
  return (
    <div className="roofing-page">
      <Seo
        schemas={roofingSchemas}
        title="Roofing Contractors in Chennai | Tesco Structures"
        description="Expert roofing contractors in Chennai offering uPVC, polycarbonate, GI, glass, Mangalore tile & shingles roofing. Trusted across Tamil Nadu & South India."
        canonical="https://www.tescostructures.com/roofing-solutions-chennai"
        ogTitle="Roofing Contractors in Chennai | Tesco Structures"
        ogUrl="https://www.tescostructures.com/roofing-solutions-chennai"
        ogImage="https://www.tescostructures.com/peb_roofing_bg.png"
        ogDescription="Expert roofing contractors in Chennai offering uPVC, polycarbonate, GI, glass, Mangalore tile & shingles roofing. Trusted across Tamil Nadu & South India."
        twitterCard="summary"
        twitterTitle="Roofing Contractors in Chennai | Tesco Structures"
        twitterSite="@https://www.tescostructures.com/roofing-solutions-chennai"
        twitterDescription="Expert roofing contractors in Chennai offering uPVC, polycarbonate, GI, glass, Mangalore tile & shingles roofing. Trusted across Tamil Nadu & South India."
        twitterImage="https://www.tescostructures.com/peb_roofing_bg.png"
        twitterImageAlt="all type of roofing"
      />
      <RoofingHero />
      <RoofingAbout />
      <RoofingWhyChoose />
      <RoofingBenefits />
      <RoofingApplications />
      <RoofingTestimonials />
      <RoofingFaq />
      <RoofingContact />
    </div>
  );
};

export default RoofingPage;
