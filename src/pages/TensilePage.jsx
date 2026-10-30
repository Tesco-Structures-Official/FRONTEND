import TensileHero from '../components/TensileHero';
import TensileAbout from '../components/TensileAbout';
import TensileWhyChoose from '../components/TensileWhyChoose';
import TensileBenefits from '../components/TensileBenefits';
import TensileApplications from '../components/TensileApplications';
import TensileProjectsGallery from '../components/TensileProjectsGallery';
import TensileTestimonials from '../components/TensileTestimonials';
import TensileFaq from '../components/TensileFaq';
import TensileContact from '../components/TensileContact';
import Seo from '../components/Seo';
import { tensileSchemas } from '../seo/schemas';

const TensilePage = () => {
  return (
    <div className="tensile-page">
      <Seo
        schemas={tensileSchemas}
        title="Tensile Roofing Services in Chennai | Tesco Structures"
        description="Expert tensile roofing services in Chennai. Custom tensile fabric structures for car parking, malls & stadiums. 15+ years. 350+ spans. Free site inspection."
        canonical="https://www.tescostructures.com/tensile-roofing-chennai/"
        ogTitle="Tensile Roofing Services in Chennai | Tesco Structures"
        ogUrl="https://www.tescostructures.com/tensile-roofing-chennai/"
        ogImage="https://www.tescostructures.com/about_tensile_roof.png"
        ogDescription="Expert tensile roofing services in Chennai. Custom tensile fabric structures for car parking, malls & stadiums. 15+ years. 350+ spans. Free site inspection."
        twitterCard="summary"
        twitterTitle="Tensile Roofing Services in Chennai | Tesco Structures"
        twitterSite="@https://www.tescostructures.com/tensile-roofing-chennai/"
        twitterDescription="Expert tensile roofing services in Chennai. Custom tensile fabric structures for car parking, malls & stadiums. 15+ years. 350+ spans. Free site inspection."
        twitterImage="https://www.tescostructures.com/about_tensile_roof.png"
        twitterImageAlt="Tensile Roofing Services in Chennai"
      />
      <TensileHero />
      <TensileAbout />
      <TensileWhyChoose />
      <TensileBenefits />
      <TensileApplications />
      <TensileProjectsGallery />
      <TensileTestimonials />
      <TensileFaq />
      <TensileContact />
    </div>
  );
};

export default TensilePage;
