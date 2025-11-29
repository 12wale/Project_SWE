
const HeroSection = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565058688647-e8df135e1e7b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
            
            <div className="relative z-20 text-center px-4">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl md:text-7xl font-bold text-yellow-500 cinzel-decorative mb-6 animate-fade-in-up">
                About The Museum
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500" className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light tracking-wide">
                A Monument to Eternity, Preserving the Legacy of Ancient Egypt
            </p>
            <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
            </div>
            </div>
        </div>  
        )
}

export default HeroSection