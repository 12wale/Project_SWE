import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="bg-slate-900 w-full mt-20 flex items-center justify-center px-4">
      <div
        className="text-center z-20 space-y-6"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <h1
          className="text-6xl sm:text-7xl lg:text-7xl font-extrabold tracking-wider
                     bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
                     bg-clip-text text-transparent
                     
                    "
        >
          Welcome to the Egyptian Museum
        </h1>

        <p
          className="mt-4 text-lg sm:text-xl lg:text-2xl tracking-wide
                     bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400
                     bg-clip-text text-transparent
                     
                    "
        >
          Discover the timeless treasures of the Pharaohs and the enchanting
          beauty of ancient civilization 🏺
        </p>
      </div>

 
    </div>
  );
};

export default WelcomeMessage;
