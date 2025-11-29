import Banner from "../components/Home/Banner"
import CardsHome from "../components/Home/cardsHome"
import HeroSection from "../components/Home/HeroSection"
import Maurqee from "../components/Home/Slider/Maurqee/Maurqee"
import WelcomeMessage from "../components/Home/WelcomeMessage"
import WorkingHoursMarquee from "../components/Home/WorkingHoursMarquee"

const Home = () => {
  return (
    <div className="overflow-hidden bg-slate-900">
        <HeroSection />
        <WelcomeMessage/>
        <Banner/>
        <CardsHome/>
       <WorkingHoursMarquee
          items={[
            "Daily except Saturday and Wednesday",
            "Museum Complex: 8:30 AM to 7:00 PM",
            "Exhibition Halls: 9:00 AM to 6:00 PM",
            "Last Ticket Sale: 5:00 PM",
            "Saturday and Wednesday",
            "Museum Complex: 8:30 AM to 10:00 PM",
            "Exhibition Halls: 9:00 AM to 9:00 PM",
            "Last Ticket Sale: 8:00 PM",
          ]}
/>


    </div>
  )
}

export default Home