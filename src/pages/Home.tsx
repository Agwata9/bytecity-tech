
import Hero from "../components/Hero";
import Services from "../components/Services";
import Message from "../components/Message";
import WhyUs from "../components/WhyUs";
import OurClients from "../components/OurClients";
import TrainingHero from "../components/TrainingHero";
import CustomAccordion from "../components/CustomAccordion";

const Home: React.FC = () => {
  

  return (
    <div>
      <Hero />
    
      <CustomAccordion />
      <Services />
      <Message />
      <WhyUs />
      <TrainingHero />
      <OurClients />
    </div>
  );
};

export default Home;
