import outside from "../../assets/About/outside.png"
const Introduction = () => {
  return (
    <section className="py-20 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div data-aos="fade-right" className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 cinzel-decorative border-l-4 border-yellow-500 pl-4">
              The Largest Archaeological Museum
            </h2>
            <p className="text-lg leading-relaxed text-gray-400">
              The Grand Egyptian Museum (GEM) is a scientific, cultural, and educational institution that is scientifically and historically integrated. It is one of the largest museums in the world dedicated to a single civilization.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Located just 2 kilometers from the Giza Pyramids, the GEM stands as a bridge between the past and the future, designed to house over 100,000 artifacts, including the complete Tutankhamun collection.
            </p>
          </div>
          <div data-aos="fade-left" className="md:w-1/2 h-[400px] relative">
            <div className="absolute  -inset-4 border-2 border-yellow-500/30 rounded-lg transform rotate-3"></div>
            <img 
              src={outside} 
              alt="Egyptian Statues" 
              className="rounded-lg shadow-2xl relative z-10 w-full h-[400px] object-cover border-2 border-yellow-500/50 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>
  )
}

export default Introduction