import SubHeading from "../../../../component/SubHeading/SubHeading";
import SingleCard from "../OurMision/SingleCard/SingleCard";

const OurWork = () => {
  return (
    <div className="my-28">
      <SubHeading content="How We Work" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6">
        <SingleCard
          title="Planning"
          description="Define the project goals, assess feasibility, and develop a project plan."
        />
        <SingleCard
          title="Requirements Analysis"
          description="Gather and analyze business requirements to understand what the software must accomplish."
        />
        <SingleCard
          title="Design"
          description="Define how the software will function by creating architecture and design specifications."
        />
        <SingleCard
          title="Development"
          description="Translate design documents into working software by writing code."
        />
        <SingleCard
          title="Testing & Deployment"
          description="Ensure the software works as intended and is free from defects and deploy the software to the production environment so users can begin using it"
        />
        <SingleCard
          title="Maintenance"
          description="Support the software post-deployment, ensuring it remains functional and updated."
        />
      </div>
    </div>
  );
};

export default OurWork;
