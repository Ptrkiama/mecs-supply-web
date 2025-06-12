
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
