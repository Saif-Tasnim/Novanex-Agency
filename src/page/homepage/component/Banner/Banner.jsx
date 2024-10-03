import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import img1 from "../../../../assets/Banner/bg-1.jpg";
import img2 from "../../../../assets/Banner/bg-2.jpg";
import img3 from "../../../../assets/Banner/bg-3.avif";
import SingleBanner from "./SingleBanner";
import Button from "../../../../component/Button/Button";

const Banner = () => {
  return (
    <div className="h-screen">
      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ position: "relative" }}
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

        <div className="absolute bottom-10 left-8 flex gap-6 md:gap-12 z-50">
          <Button content="See Our Works" type="primary" />
          <Button content="Contact With Us" type="secondary" />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
