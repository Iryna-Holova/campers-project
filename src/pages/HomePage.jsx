import Hero from 'components/Home/Hero/Hero';
import AboutUs from 'components/Home/AboutUs/AboutUs';
import Advantages from 'components/Home/Advantages/Advantages';
import CallToAction from 'components/Home/CallToAction/CallToAction';
import Services from 'components/Home/Services/Services';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Advantages />
      <CallToAction />
      <Services />
    </>
  );
};

export default HomePage;
