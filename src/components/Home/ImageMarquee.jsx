import Marquee from "react-fast-marquee";
import { images } from "../../assets/image/images";

const ImageMarquee = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="900"
      className="w-full flex justify-center mt-14"
    >
      <div
        className="
          w-full py-7 
          bg-gradient-to-b from-[#05070d]/95 via-[#090d15]/95 to-[#0c111c]/95
          border-y border-yellow-500/20
          backdrop-blur-xl
          relative overflow-hidden
          shadow-[0_0_35px_rgba(255,215,0,0.15)]
        "
      >
        {/* 🔥 خلفية Gold Glow Dynamic */}
        <div className="
          absolute inset-0 opacity-30 
          bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18),transparent_60%)]
          animate-pulse
        "></div>

        {/* 🔥 Golden Shine Line */}
        <div className="
          absolute top-0 left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-yellow-300 to-transparent
          animate-[shine_4s_infinite]
        "></div>

        {/* 🔥 Main Marquee */}
        <Marquee
          direction="left"
          speed={35}
          pauseOnHover
          gradient={false}
          className="py-3"
        >
          <div className="flex items-center gap-12 px-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="
                  group relative 
                  w-52 h-32 md:w-64 md:h-40
                  rounded-xl overflow-hidden 
                  border border-yellow-400/30
                  bg-[#0b0f18]/40
                  shadow-[0_0_18px_rgba(255,215,0,0.15)]
                  transition-all duration-700
                  hover:scale-[1.15]
                  hover:shadow-[0_0_40px_rgba(255,215,0,0.35)]
                  hover:border-yellow-400/70
                "
              >
                {/* Image */}
                <img
                  src={src}
                  alt={`museum-${idx}`}
                  className="
                    w-full h-full object-cover 
                    transition-all duration-700
                    group-hover:brightness-110
                    group-hover:scale-105
                  "
                />

                {/* 🔥 Egyptian Gold Mask Overlay */}
                <div className="
                  absolute inset-0 pointer-events-none
                  bg-gradient-to-t from-black/50 via-transparent to-black/30
                "></div>

                {/* 🔥 Moving Gold Light Sweep */}
                <div className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  bg-[linear-gradient(115deg,transparent,rgba(255,215,0,0.25),transparent)]
                  translate-x-[-150%]
                  group-hover:translate-x-[150%]
                  transition-all duration-[1200ms]
                "></div>

                {/* 🔥 Reflection effect */}
                <div className="
                  absolute -bottom-1 left-0 w-full h-1/3 
                  bg-gradient-to-t from-white/10 to-transparent 
                  opacity-0 group-hover:opacity-40 
                  blur-sm transition-all duration-700
                "></div>

              </div>
            ))}
          </div>
        </Marquee>

        {/* CSS Animation Keyframes */}
        <style>{`
          @keyframes shine {
            0% { opacity: 0; transform: translateX(-100%); }
            50% { opacity: 1; }
            100% { opacity: 0; transform: translateX(100%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ImageMarquee;
