import HeroSection from '../components/About/HeroSection';
import Introduction from '../components/About/Introduction';
import MassionVision from '../components/About/MassionVision';
import Arch from '../components/About/Arch';

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <HeroSection />      
      <Introduction/>
      <MassionVision/>
      <Arch/>
    </div>
  );
};

export default About;