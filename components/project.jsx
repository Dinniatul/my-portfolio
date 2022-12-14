import React from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import images
import projectImage from "../public/images/images";
import Gambar1 from "../public/images/image1.png";
import Gambar2 from "../public/images/image2.jpeg";
import Gambar3 from "../public/images/image3.jpeg";
import Gambar4 from "../public/images/puskesmas.jpg";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import swiper modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
const Project = () => {
  return (
    <div id="project" name="project" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center ">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-pink-600 ">Project</p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper mt-10">
          <SwiperSlide className="max-w-lg">
            <Image src={Gambar1} alt="project-image" className="w-auto" />
          </SwiperSlide>
          <SwiperSlide className="max-w-lg">
            <Image src={Gambar2} alt="project-image" className="w-auto" />
          </SwiperSlide>
          <SwiperSlide className="max-w-lg">
            <Image src={Gambar3} alt="project-image" className="w-auto" />
          </SwiperSlide>
          <SwiperSlide className="max-w-lg">
            <Image src={Gambar4} alt="project-image" className="w-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
