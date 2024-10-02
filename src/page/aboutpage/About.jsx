import PageBanner from "../../component/PageBanner/PageBanner";
import img from "../../assets/about-us.jpg";

const About = () => {
  return (
    <div>
      <PageBanner img={img} content="about - us" />

      <div className="my-28">
        <h1 className="text-center text-3xl font-semibold underline">Who We Are ? </h1>
      </div>
    </div>
  );
};

export default About;
