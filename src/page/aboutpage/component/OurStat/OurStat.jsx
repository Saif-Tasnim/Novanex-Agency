import { useEffect } from "react";
import SectionHeading from "../../../../component/SectionHeading/SectionHeading";
import SingleCard from "../../../../component/SingleCard/SingleCard";
import { OUR_STAT } from "../../../../static/our-stat";
import Aos from "aos";

const OurStat = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const element = document.getElementById("animatedGrid");
    if (window.innerWidth >= 768) {
      element.setAttribute("data-aos", "fade-right");
      element.setAttribute("data-aos-easing", "ease-in-sine");
      element.setAttribute("data-aos-duration", "1500");
    }
  }, []);

  return (
    <div className="my-24">
      <SectionHeading content="Our Stats" />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-12"
        id="animatedGrid"
      >
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
