import SectionHeading from "../../../../component/SectionHeading/SectionHeading";
import SingleCard from "../../../../component/SingleCard/SingleCard";
import { OUR_STAT } from "../../../../static/our-stat";

const OurStat = () => {
  return (
    <div className="my-24">
      <SectionHeading content="Our Stats" />

      <div className="grid grid-cols-3 gap-12 mx-6 my-12">
        {OUR_STAT.map((stat) => (
          <SingleCard
            key={stat.id}
            title={stat.title}
            description={stat.description}
            number={stat.number}
          >
            {stat.icon}
          </SingleCard>
        ))}
      </div>
    </div>
  );
};

export default OurStat;
