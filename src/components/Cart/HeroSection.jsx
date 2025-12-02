import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566218237388-319777174676?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
      
      <div className="relative z-20 text-center px-4">
        <h1 data-aos="fade-up" data-aos-duration="1000" className="text-4xl md:text-6xl font-bold text-yellow-500 cinzel-decorative mb-4 animate-fade-in-up">
          Your Cart
        </h1>
        <p data-aos="fade-up" data-aos-duration="1500" className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light tracking-wide">
          Review your selected treasures before checkout
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
