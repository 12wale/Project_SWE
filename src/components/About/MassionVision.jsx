import { Compass, Eye, Landmark, History } from 'lucide-react';

const MassionVision = () => {
  return (
    <section className="py-20 bg-gray-800/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>
            <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Mission */}
                <div className="bg-gray-900 p-8 rounded-xl border border-yellow-600/20 hover:border-yellow-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-500/30">
                    <Compass className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 cinzel-decorative">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                    To preserve and display the heritage of ancient Egypt for future generations, fostering a deeper understanding of Egyptian history through world-class exhibitions, research, and educational programs.
                </p>
                </div>

                {/* Vision */}
                <div className="bg-gray-900 p-8 rounded-xl border border-yellow-600/20 hover:border-yellow-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-500/30">
                    <Eye className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 cinzel-decorative">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                    To be the world's premier destination for ancient Egyptian culture, inspiring wonder and curiosity while setting global standards for museum excellence and heritage conservation.
                </p>
                </div>
            </div>
            </div>
        </section>  
    )
}

export default MassionVision