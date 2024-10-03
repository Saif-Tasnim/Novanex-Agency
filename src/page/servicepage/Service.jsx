import PageBanner from "../../component/PageBanner/PageBanner";
import img from "../../assets/service.jpg";
import ServiceList from "./component/ServiceList/ServiceList";

const Service = () => {
  return (
    <>
      <PageBanner content="our - services" img={img} />
      <ServiceList />
    </>
  );
};

export default Service;
