import Marquee from "react-fast-marquee";

const Maurqee = ({ text }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={600}
      className="w-full flex justify-center mt-4"
    >
      <div
        data-aos="fade-up"
        data-aos-delay={1000}
        className="w-full  py-4 px-6 shadow-lg overflow-hidden"
      >
        <Marquee
          direction="left"
          speed={50}
          pauseOnHover={true}
          gradient={false}
        >
          <span className="cinzel-decorative text-yellow-500   text-lg md:text-3xl tracking-wide leading-snug">
            {text}
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default Maurqee;
