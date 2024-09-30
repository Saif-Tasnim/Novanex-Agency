import SubHeading from "../../../../component/SubHeading/SubHeading";
import SingleCard from "../OurMision/SingleCard/SingleCard";

const ChooseUs = () => {
  return (
    <div className="my-28">
      <SubHeading content="Why Choose Us" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-12">
        <SingleCard
          title="Client-Centric Approach"
          description="Our mission is to prioritize our clients' needs and deliver tailor-made solutions that align with their business goals. We believe in building lasting partnerships through trust and collaboration."
        />

        <SingleCard
          title=" Innovation & Creativity"
          description="We are committed to pushing the boundaries of innovation and creativity. By staying ahead of digital trends, we craft unique solutions that not only meet the needs of today but anticipate the needs of tomorrow."
        />
        <SingleCard
          title="Quality & Excellence"
          description="Delivering high-quality results is at the heart of everything we do. Our team strives for excellence in every project, ensuring attention to detail, flawless execution, and client satisfaction."
        />
      </div>
    </div>
  );
};

export default ChooseUs;
