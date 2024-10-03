import SingleCard from "../../../../component/SingleCard/SingleCard";
import SubHeading from "../../../../component/SubHeading/SubHeading";
import { SERVICES } from "../../../../static/services";

const OurMision = () => {
  return (
    <>
      <SubHeading content="Our Mission" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-12">
        {SERVICES.map((service) => (
          <SingleCard
            key={service.title}
            title={service.title}
            description={service.description}
            link={service.link}
          >
            <img src={service.icon} alt="icons" className="w-24 h-24 bg-purple-900 mx-auto rounded-2xl"/>
          </SingleCard>
        ))}
      </div>
    </>
  );
};

export default OurMision;
