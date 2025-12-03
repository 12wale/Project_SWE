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
          className="cinzel-decorative text-3xl sm:text-5xl  lg:text-7xl font-extrabold tracking-wider
                     bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500
                     bg-clip-text text-transparent
                    "
        >
          Welcome to the Egyptian Museum
        </h1>

        <p
          className="mt-4 text-[15px] sm:text-xl lg:text-2xl tracking-wide
                     bg-gradient-to-r from-white via-white to-orange-300
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
