import SectionHeading from "../../../../component/SectionHeading/SectionHeading";
import SingleCard from "../../../../component/SingleCard/SingleCard";
import { SERVICES } from "../../../../static/services";

const ServiceList = () => {
  return (
    <div className="my-28">
      <SectionHeading content="What We Do ?" />

      {SERVICES.map((service) => (
        <>
          <h1 className="text-4xl text-green-600 m-10">{service.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-20">
            {service.number.map((project) => (
              <SingleCard
                key={project.project_no}
                title={project.project_title}
                description={project.project_des}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default ServiceList;
