import ArchHero from '../components/ArchHero';
import ArchAbout from '../components/ArchAbout';
import ArchWhyChoose from '../components/ArchWhyChoose';
import ArchBenefits from '../components/ArchBenefits';
import ArchApplications from '../components/ArchApplications';
import ArchProjectsGallery from '../components/ArchProjectsGallery';
import ArchTestimonials from '../components/ArchTestimonials';
import ArchFaq from '../components/ArchFaq';
import ArchContact from '../components/ArchContact';
import Seo from '../components/Seo';
import { archSchemas } from '../seo/schemas';

const ArchPage = () => {
  return (
    <div className="arch-page">
      <Seo
        schemas={archSchemas}
        title="Architectural Design & Structural Consultancy | Tesco Structures"
        description="Expert architectural design and structural consultancy in Chennai & South India. ISO-certified. 15+ years. 150+ projects. STAAD Pro,ETABS, BIM. Call for a free proposal."
        canonical="https://www.tescostructures.com/architectural-design-structural-consultancy-chennai/"
        ogTitle="Architectural Design & Structural Consultancy | Tesco Structures"
        ogUrl="https://www.tescostructures.com/architectural-design-structural-consultancy-chennai/"
        ogImage="https://www.tescostructures.com/images/about_structural_consultancy.png"
        ogDescription="Expert architectural design and structural consultancy in Chennai & South India. ISO-certified. 15+ years. 150+ projects. STAAD Pro,ETABS, BIM. Call for a free proposal."
        twitterCard="summary"
        twitterTitle="Architectural Design & Structural Consultancy | Tesco Structures"
        twitterSite="@https://www.tescostructures.com/architectural-design-structural-consultancy-chennai/"
        twitterDescription="Expert architectural design and structural consultancy in Chennai & South India. ISO-certified. 15+ years. 150+ projects. STAAD Pro,ETABS, BIM. Call for a free proposal."
        twitterImage="https://www.tescostructures.com/images/about_structural_consultancy.png"
        twitterImageAlt="Architectural Design & Structural Consultancy"
      />
      <ArchHero />
      <ArchAbout />
      <ArchWhyChoose />
      <ArchBenefits />
      <ArchApplications />
      <ArchProjectsGallery />
      <ArchTestimonials />
      <ArchFaq />
      <ArchContact />
    </div>
  );
};

export default ArchPage;
