import About from "./component/About/About";
import Banner from "./component/Banner/Banner";
import ChooseUs from "./component/ChooseUs/ChooseUs";
import OurMision from "./component/OurMision/OurMision";
import OurWork from "./component/OurWork/OurWork";

const Home = () => {
  
    return (
    <div>
      <Banner />
      <About />
      <OurMision />
      <OurWork />
      <ChooseUs />
    </div>
  );
};

export default Home;
