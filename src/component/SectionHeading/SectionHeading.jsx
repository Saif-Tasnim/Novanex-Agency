import Aos from "aos";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const SectionHeading = ({content}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <h1
      className="text-center text-3xl font-semibold underline"
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
    >
      {content}
    </h1>
  );
};

export default SectionHeading;
