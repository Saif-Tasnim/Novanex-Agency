import Aos from "aos";
import { useEffect } from "react";
import SectionHeading from "../../../../component/SectionHeading/SectionHeading";

const AboutDetails = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-28">
      
      <SectionHeading content="Who Are We ?" />

      <p
        className="text-lg mx-9 my-12"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        At Novanex IT, we are a dedicated team of passionate professionals
        committed to delivering innovative digital solutions that empower
        businesses to succeed in todays ever-evolving digital landscape. Our
        team comprises experienced web developers, creative designers, and savvy
        marketing experts who work collaboratively to craft customized
        strategies and solutions tailored to meet the unique needs of each
        client. We believe in the power of technology to transform businesses,
        and we strive to stay at the forefront of industry trends and
        innovations, ensuring that our clients receive cutting-edge solutions
        that keep them ahead of the competition. With our expertise in web
        development, we build robust, user-friendly websites that are not only
        visually appealing but also optimized for performance, ensuring seamless
        user experiences across all devices. Our design team brings creativity
        and attention to detail to every project, crafting visually striking
        designs that capture the essence of our clients brands and communicate
        their message effectively. Whether its creating a brand-new website,
        redesigning an existing one, or enhancing functionality, we approach
        each project with the goal of delivering a product that exceeds
        expectations. In addition to web development and design, we offer
        comprehensive digital marketing services that drive engagement and
        growth. From search engine optimization (SEO) and pay-per-click (PPC)
        advertising to social media management and content marketing, we help
        businesses connect with their target audience, boost conversions, and
        expand their online presence. At Novanex IT, we see ourselves not just
        as service providers, but as partners invested in the success of our
        clients. We take pride in our ability to turn ideas into impactful
        digital experiences, helping businesses thrive, engage customers, and
        build lasting relationships in the digital age. Let us help you
        transform your vision into a reality.
      </p>
    </div>
  );
};

export default AboutDetails;
