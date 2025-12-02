import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image7 from "../../../assets/image/n14.jpeg";
import Image5 from "../../../assets/image/n131.jpg";
import Image4 from "../../../assets/image/photo_2025-11-27_17-40-55.jpg";
import Image3 from "../../../assets/image/im_3.png";
import Image2 from "../../../assets/image/im_2.png";
import Image1 from "../../../assets/image/n2.jpg";

import Maurqee from "./Maurqee/Maurqee";

const Heroslider = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const ImageList = [
    { id: 51, img: Image4, subtitle: "Explore the Ancient Secrets" },
    { id: 41, img: Image5, subtitle: "Journey Through History" },
    { id: 21, img: Image7, subtitle: "Discover the Pharaohs" },
    { id: 1, img: Image1, subtitle: "Walk Among Legends" },
    { id: 2, img: Image2, subtitle: "Timeless Wonders" },
    { id: 3, img: Image3, subtitle: "Immersive Experience" },
  ];

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        ImageList.map(
          (i) =>
            new Promise((res) => {
              const img = new Image();
              img.src = i.img;
              img.onload = res;
            })
        )
      );
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950 px-4 sm:px-0">

      {/* Glassmorphism marquee */}
      <div className="absolute top-4 left-1/2 w-full max-w-5xl -translate-x-1/2 flex justify-center z-20 text-center
                      bg-black/30 backdrop-blur-xl border border-yellow-400/30
                      rounded-[50px] px-6 py-4 
                      before:content-[''] before:absolute before:inset-0
                      before:bg-[url('https://www.transparenttextures.com/patterns/ancient-egypt.png')]
                      before:opacity-25 before:rounded-[50px]">
        <div className="flex items-center gap-4 text-yellow-300 text-2xl sm:text-3xl font-extrabold drop-shadow-[0_0_20px_rgba(255,215,0,0.9)]">
          <span className="animate-pulse">🏺</span>
          <Maurqee text="Welcome to the Egyptian Museum" className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent" />
          <span className="animate-pulse">🏺</span>
        </div>
      </div>

      {imagesLoaded ? (
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 25,
            stretch: 100,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          speed={1500}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-full !pb-0"
        >
          {ImageList.map((data) => (
            <SwiperSlide
              key={data.id}
              className="w-[280px] sm:w-[360px] lg:w-[700px] flex justify-center !h-auto !p-0"
            >
              <ParallaxCard img={data.img} subtitle={data.subtitle} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-white text-xl">Loading images...</p>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes shine {
            0% { left: -30%; }
            100% { left: 130%; }
          }
          .animate-shine {
            animation: shine 2.5s infinite linear;
          }

          @keyframes pulseGlow {
            0%,100% { opacity:0.3; transform:scale(1); }
            50% { opacity:0.6; transform:scale(1.05); }
          }
          .animate-pulseGlow {
            animation: pulseGlow 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

// Parallax Card Component
const ParallaxCard = ({ img, subtitle }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    cardRef.current.style.transform = `scale(1.05) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="relative group perspective-1000"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={img}
        alt="Slider Image"
        className="w-full h-[280px] sm:h-[480px] lg:h-[700px] object-cover rounded-2xl
                   shadow-[0_0_60px_rgba(255,215,0,0.7),0_0_120px_rgba(255,215,0,0.3)]
                   transition-transform duration-700 ease-out"
      />
      {/* Glass overlay on hover */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg opacity-0
                      group-hover:opacity-100 transition-all duration-700
                      rounded-2xl border border-yellow-400/20 shadow-[0_0_60px_rgba(255,215,0,0.5)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/ancient-egypt.png')] opacity-25 rounded-2xl"></div>
        {/* Subtitle */}
        <div className="absolute bottom-6 left-6 text-yellow-200 text-lg sm:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-700 drop-shadow-lg">
          {subtitle}
        </div>
      </div>

      {/* Moving shine */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-40 h-full bg-white/20 blur-3xl -left-40 rotate-12 animate-shine"></div>
        <div className="absolute w-full h-full rounded-2xl bg-gradient-to-r from-yellow-400/20 via-yellow-300/10 to-yellow-400/10 animate-pulseGlow"></div>
      </div>
    </div>
  );
};

export default Heroslider;
