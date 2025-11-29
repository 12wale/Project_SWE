import HeroSection from '../components/contactUS/HeroSection';
import ContactForm from '../components/contactUS/ContactForm';
import ContactInfo from '../components/contactUS/ContactInfo';

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <HeroSection />
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact