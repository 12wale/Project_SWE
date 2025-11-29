import { useEffect } from "react";

export default function HeroTitle() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      const el = document.getElementById("parallax-text");
      if (el) el.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="cinzel-decorative absolute top-24 w-full text-center z-20 px-4 sm:px-6 md:px-0">
      <div className="relative inline-block px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 rounded-[30px] sm:rounded-[40px] bg-black/60 backdrop-blur-lg border border-yellow-500 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-w-[95%] mx-auto">

        {/* دخان خلفي */}
        <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] pointer-events-none overflow-hidden">
          <div className="smoke"></div>
        </div>

        <div id="parallax-text" className="relative transition-transform duration-200 ease-out">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide 
                         bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 
                         bg-clip-text text-transparent animate-gold-shine animate-glow 
                        ">
            Discover the Secrets of Ancient Egypt!
          </h1>

          <div className="mx-auto mt-3 sm:mt-4 w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 animate-pulse "></div>

          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-yellow-200 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto ">
            Embark on a magical journey among pyramids and golden treasures at our amazing museum.
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes goldShine { 
            0% { background-position: -400% center; } 
            100% { background-position: 400% center; } 
          }
          .animate-gold-shine { background-size: 400% auto; animation: goldShine 8s linear infinite; }

          @keyframes glowPulse {
            0%,100% { : 0 0 15px #000, 0 0 30px gold, 0 0 60px rgba(255,215,0,0.6), 0 0 80px rgba(255,215,0,0.3); }
            50% { text-shadow: 0 0 25px #000, 0 0 60px gold, 0 0 90px rgba(255,215,0,1), 0 0 120px rgba(255,215,0,0.6); }
          }
          .animate-glow { animation: glowPulse 3s ease-in-out infinite; }

          .smoke {
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 65%);
            animation: smokeMove 30s ease-in-out infinite;
            filter: blur(25px);
            opacity: 0.5;
          }
          @keyframes smokeMove {
            0% { transform: translate(-40%,0); opacity: 0.5; }
            50% { transform: translate(0,-25%); opacity: 0.7; }
            100% { transform: translate(-40%,0); opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
}
