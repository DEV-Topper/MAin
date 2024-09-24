import About from "./landing/About";
import Benefit from "./landing/Benefit";
import Contact from "./landing/Contact";
import Distribution from "./landing/Distribution";
import FAQS from "./landing/FAQS";
import Hero from "./landing/Hero";
import HowItWorks from "./landing/HowItWorks";
import Mobile from "./landing/Mobile";
import Proceed from "./landing/Proceed";
import Tokens from "./landing/Tokens";
import WhitePaper from "./landing/WhitePaper";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <About />
      <Benefit />
      <Tokens />
      <Proceed />
      <Distribution />
      <Mobile />
      <FAQS />
      <WhitePaper />
      <Contact />
    </div>
  );
};

export default HomeScreen;
