import Marquee from "react-fast-marquee";
import { ClockIcon } from "@heroicons/react/24/outline";

const WorkingHoursMarquee = ({ items }) => {
  return ( 
    <div data-aos="zoom-in-up"data-aos-duration="500" className="w-full flex justify-center mt-4">
      <div className="w-full py-4 px-6 bg-gradient-to-b from-black/70 to-gray-900  shadow-lg overflow-hidden">
        <Marquee direction="left" speed={50} pauseOnHover gradient={false}>
          <div className="flex gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-yellow-400 text-lg md:text-2xl font-semibold whitespace-nowrap">
                <ClockIcon className="w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default WorkingHoursMarquee;
