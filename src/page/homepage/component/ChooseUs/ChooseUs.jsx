import SingleCard from "../../../../component/SingleCard/SingleCard";
import SubHeading from "../../../../component/SubHeading/SubHeading";
import { CHOOSE_US } from "../../../../static/choose-us";

const ChooseUs = () => {
  return (
    <div className="my-28">
      <SubHeading content="Why Choose Us" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-12">
        {CHOOSE_US.map((choose) => (
          <SingleCard
            key={choose.id}
            title={choose.title}
            description={choose.description}
          >
            {" "}
            {choose.icon}{" "}
          </SingleCard>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
