import backhead from "../../assets/Contact/backhead.jpeg"

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900 z-10"></div>
            <img src={backhead} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            
            <div className="relative z-20 text-center px-4">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl md:text-7xl font-bold text-yellow-500 cinzel-decorative mb-6 animate-fade-in-up">
                Contact Us
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500" className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light tracking-wide">
                We are here to answer your questions and help you plan your visit.
            </p>
            <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
            </div>
            </div>
        </div>  
        )
}

export default HeroSection
