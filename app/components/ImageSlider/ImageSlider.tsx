"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Custom Styles
import Styles from "./ImageSlider.module.css";

export default function ImageSlider() {
  return (
    <Swiper
      // direction="vertical"
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr? sed diam
        voluptua.{" "}
      </SwiperSlide>
      <SwiperSlide>
        Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat?
      </SwiperSlide>
      <SwiperSlide>Invidunt ut labore et dolore magna aliquyam?</SwiperSlide>
    </Swiper>
  );
}
