import SubHeading from "../../../../component/SubHeading/SubHeading";
import SingleCard from "./SingleCard/SingleCard";

const OurMision = () => {
  return (
    <div>
      <SubHeading content="Our Mission" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-12">
        <SingleCard
          title="Web Development"
          description="Web development is the process of creating websites and web applications for the internet or intranet."
          link="web"
        />
        <SingleCard
          title="UI/UX Design"
          description="Web development is the process of creating websites and web applications for the internet or intranet."
          link="ui"
        />
        <SingleCard
          title="System Design"
          description="Web development is the process of creating websites and web applications for the internet or intranet."
          link="system"
        />
      </div>
    </div>
  );
};

export default OurMision;
