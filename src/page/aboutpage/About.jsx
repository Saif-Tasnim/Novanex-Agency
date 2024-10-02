import PageBanner from "../../component/PageBanner/PageBanner";
import img from "../../assets/about-us.jpg";
import OurStat from "./component/OurStat/OurStat";
import AboutDetails from "./component/AboutDetails/AboutDetails";

const About = () => {
  return (
    <>
      <PageBanner img={img} content="about - us" />
      <AboutDetails />
      <OurStat />
    </>
  );
};

export default About;
