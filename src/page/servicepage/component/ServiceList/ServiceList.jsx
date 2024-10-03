import SectionHeading from "../../../../component/SectionHeading/SectionHeading";
import SingleCard from "../../../../component/SingleCard/SingleCard";
import { SERVICES } from "../../../../static/services";

const ServiceList = () => {
  return (
    <div className="my-28">
      <SectionHeading content="What We Do ?" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-12">
        {SERVICES.map((service) => (
          <SingleCard
            key={service.title}
            title={service.title}
            description={service.description}
            link={service.link}
          >
            {" "}
            {service.icon}{" "}
          </SingleCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
