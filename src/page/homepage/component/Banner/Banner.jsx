import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,Mousewheel} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
import img1 from "../../../../assets/Banner/bg-1.jpg";
import img2 from "../../../../assets/Banner/bg-2.jpg";
import img3 from "../../../../assets/Banner/bg-3.avif";
import SingleBanner from "./SingleBanner";

const Banner = () => {
  return (
    <div className="h-[90vh] flex justify-center">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Mousewheel]}
        className="mySwiper"
        autoplay
        mousewheel
        loop
      >
        <SwiperSlide>
          <SingleBanner 
          heading="Transforming Ideas into Reality"
          des="We bring your vision to life with innovative solutions that drive success."
          img={img1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBanner 
          heading="Elevating Brands with Creative Excellence"
          des="Let us take your business to the next level with bespoke design and development."
          img={img2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBanner
          heading="Your Trusted Partner in Digital Growth"
          des="From concept to launch, we craft digital experiences that captivate and convert."
          img={img3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
