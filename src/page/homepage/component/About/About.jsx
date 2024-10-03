import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../../../../assets/Banner/bg-1.jpg";
import Button from "../../../../component/Button/Button";
import SubHeading from "../../../../component/SubHeading/SubHeading";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-32">
      <SubHeading content="About Novanex IT" />
      <div className="flex flex-col md:flex-row justify-around gap-12 mx-8">
        <div
          className="w-full h-auto"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <img src={img1} alt="image" />
        </div>
        <div
          className="w-fit py-14"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <p className="text-center md:text-justify text-lg">
            At Novanex IT, we are a team of passionate professionals committed
            to delivering innovative digital solutions that help businesses
            thrive in the digital age. With expertise in web development,
            design, and marketing, we partner with clients to bring their ideas
            to life, creating powerful online experiences that engage, convert,
            and grow their brand.
          </p>

          <div className="text-center my-9">
            <Button content="Know More" type="secondary" to="/about-us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
