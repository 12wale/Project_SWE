import { useEffect } from "react";
import BannerImg1 from "../../assets/image/im_4.png";
import BannerImg2 from "../../assets/image/photo_2025-11-27_17-40-51.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: false, mirror: true });

export default function Banner() {
  useEffect(() => {
    const canvas = document.getElementById("particles-canvas");
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const colors = ["#FFD700", "#FFC300", "#FFB000"];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen  px-4 sm:px-6 lg:px-8">
      {/* Canvas للـParticles */}
      <canvas
        id="particles-canvas"
        className="absolute inset-0 z-0 pointer-events-none"
      ></canvas>

      <div className="flex flex-col justify-center z-20 items-center w-full max-w-6xl space-y-20 lg:space-y-20 py-12 ">
        {/* Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-[15%] lg:mt-[4%] sm:gap-25 items-center py-10 px-12 lg:px-0 w-full ">
          <div className="relative group flex justify-center    items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="absolute -inset-6 bg-gradient-to-br from-yellow-600/50 via-amber-500/40 to-yellow-900/30 rounded-3xl rotate-[10deg] shadow-[0_25px_5px_rgba(255,180,0,0.35)] blur-[1px] border-2 border-yellow-400 transition-all duration-700 ease-out group-hover:rotate-[14deg] group-hover:scale-105 z-0"
            ></div>
            <img
              src={BannerImg1}
              data-aos="fade-right"
              data-aos-duration="800"
              className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-cover mx-auto rounded-xl drop-shadow-[0_0_35px_gold] transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="flex flex-col gap-4 sm:gap-6 justify-center text-center sm:text-left px-2 sm:px-0"
          >
            <h1 className="cinzel-decorative text-2xl sm:text-4xl lg:text-5xl font-extrabold   glow-text">
              A Journey to the Heart of Civilization
            </h1>
            <p className=" bg-gradient-to-r from-amber-100 via-yellow-300 to-orange-400
                     bg-clip-text text-transparent leading-6 sm:leading-9 ">
              An amazing journey begins here—where one of Egypt’s greatest kings stands to tell a story of thousands of years amidst an atmosphere that combines modernity and antiquity.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-[15%] lg:mt-[4%] sm:gap-25 lg:pb-20 items-center px-12 lg:px-0 w-full ">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex flex-col gap-4 sm:gap-6 justify-center text-center sm:text-left order-2 sm:order-1 px-2 sm:px-0"
          >
            <h1 className="cinzel-decorative text-2xl sm:text-4xl lg:text-5xl font-extrabold   glow-text">
              Secrets of the Ancient Temple
            </h1>
            <p className=" bg-gradient-to-r from-amber-100 via-yellow-300 to-orange-400
                     bg-clip-text text-transparent leading-6 sm:leading-9 ">
              Enjoy an unforgettable moment in front of one of the greatest kings of ancient Egypt.
            </p>
          </div>

          <div className="relative group flex justify-center items-center order-1 sm:order-2">
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              className="absolute -inset-6 bg-gradient-to-br from-yellow-600/50 via-amber-500/40 to-yellow-900/30 rounded-3xl border-2 border-yellow-400 rotate-[-10deg] shadow-[0_25px_50px_rgba(255,180,0,0.35)] blur-[1px] transition-all duration-700 ease-out group-hover:rotate-[-14deg] group-hover:scale-105 z-0"
            ></div>
            <img
              src={BannerImg2}
              data-aos="fade-left"
              data-aos-duration="800"
              className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-cover mx-auto rounded-xl drop-shadow-[0_0_35px_gold] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Glow CSS */}
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 8px #FFD700, 0 0 15px #FFC300, 0 0 20px #FFB000;
          }
        `}
      </style>
    </div>
  );
}
