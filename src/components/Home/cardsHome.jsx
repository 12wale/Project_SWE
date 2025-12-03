import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CardImg1 from "../../assets/image/im_1.jpg";
import CardImg2 from "../../assets/image/im_1.png";
import CardImg3 from "../../assets/image/im_3.png";
import HeroTitle from "./HeroTitle";

AOS.init({ once: false, mirror: true });

const cards = [
  {
    id: 3,
    title: "Grand Egyptian Museum",
    desc: "Experience the stunning modern architecture of the Egyptian Museum inspired by ancient carvings and royal heritage.",
    img: CardImg1,
    link: "/gallery/1",
  },
  {
    id: 2,
    title: "Pyramid at Sunset",
    desc: "Witness the breathtaking beauty of the Great Pyramid glowing under the golden sunset, telling stories of timeless Egyptian history.",
    img: CardImg2,
    link: "/gallery/2",
  },
  {
    id: 1,
    title: "Royal Statues Hall",
    desc: "Walk through a majestic hall filled with ancient royal statues, reflecting the glory and power of Pharaohs in an immersive museum atmosphere.",
    img: CardImg3,
    link: "/gallery/3",
  },
];

export default function CardsHome() {
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  // وظيفة حركة 3D حسب الماوس
  const handleMouseMove = (e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 15; // +/-7.5deg
    const rotateX = ((y / rect.height) - 0.5) * -15;
    cardRefs.current[index].style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index) => {
    cardRefs.current[index].style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handleMouseDown = (index) => {
    cardRefs.current[index].style.transform += " scale(0.97)";
  };

  const handleMouseUp = (index) => {
    cardRefs.current[index].style.transform = cardRefs.current[index].style.transform.replace(" scale(0.97)", " scale(1.05)");
  };

  return (
    <div className="  relative min-h-screen  flex flex-col mt-[-60px] md:mt-[5px] justify-center items-center py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <HeroTitle />

      <div className="grid grid-cols-1  sm:grid-cols-3 gap-22 mt-[70%] md:mt-[20%] lg-mt[15%] z-10 max-w-[80%] w-full px-4">
        {cards.map((card, index) => (
          <div key={card.id} className="relative group cursor-pointer perspective-1000">

            {/* الخلفية المزخرفة الفرعونية */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="
                absolute -inset-6
                rounded-[40px]
                bg-gradient-to-br from-yellow-500/30 via-amber-400/20 to-yellow-900/30
                backdrop-blur-lg
                border-2 border-yellow-300/30
                rotate-[12deg]
                shadow-[0_30px_70px_rgba(255,190,0,0.35)]
                transition-all duration-[2500ms] ease-[cubic-bezier(.25,.8,.25,1)]
                group-hover:rotate-[0deg]
                group-hover:scale-105
                group-hover:shadow-[0_5px_9px_rgba(255,215,0,0.55)]
              "
            ></div>

            {/* الكارد الأساسي */}
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              data-aos="fade-up"
              data-aos-duration="800"
              onClick={() => navigate(card.link)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseDown={() => handleMouseDown(index)}
              onMouseUp={() => handleMouseUp(index)}
              className="
                relative overflow-hidden rounded-2xl 
                bg-black/40 backdrop-blur-md
                border border-yellow-400/40
                shadow-2xl transition-all duration-500 ease-in-out
                hover:shadow-[0_0_90px_rgba(255,215,0,0.9)]
              "
            >
              {/* الصورة */}
              <div className="h-72 w-full overflow-hidden relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* لمعان متحرك أكبر وأكثر فخامة */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute w-40 h-full bg-white/25 blur-3xl -left-40 rotate-12 animate-shine"></div>
                </div>
              </div>

              {/* المحتوى يظهر عند hover */}
              <div
                className="
                  absolute inset-0 flex flex-col justify-center items-center 
                  bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 
                  transition-all duration-500 text-center px-4 scale-95 group-hover:scale-105
                "
              >
                <h2 className="cinzel-decorative text-yellow-300 text-2xl font-bold mb-3 drop-shadow-lg">
                  {card.title}
                </h2>
                <p className="text-yellow-200 text-sm leading-relaxed drop-shadow-md">
                  {card.desc}
                </p>
              </div>

              {/* طبقة لمعان هادئة */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-yellow-500/5 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Keyframes لمعان */}
      <style>
        {`
          @keyframes shine {
            0% { left: -40%; }
            100% { left: 140%; }
          }
          .animate-shine {
            animation: shine 2.5s infinite linear;
          }
        `}
      </style>
    </div>
  );
}
