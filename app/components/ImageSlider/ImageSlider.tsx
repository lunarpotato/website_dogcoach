"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Custom Styles
import Styles from "./ImageSlider.module.css";

export default function ImageSlider() {
  return (
    <Swiper
      direction="horizontal"
      loop={true}
      autoplay={{ delay: 7000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      mousewheel={{ invert: true }}
      modules={[Pagination, Mousewheel, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={Styles.slideWrapper}>
          <img
            src="../img/sitzen_am_waldrand.jpg"
            className={Styles.slideImage}
          ></img>
          <p className={Styles.slideText}>
            Du verstehst das Verhalten deines Hundes nicht?
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.slideWrapper}>
          <img
            src="../img/spazieren_mithunden.jpg"
            className={Styles.slideImage}
          ></img>

          <p className={Styles.slideText}>
            Du hast den Eindruck keinen Kontakt zu deinem Hund zu haben?{" "}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.slideWrapper}>
          <img
            src="../img/sitzen_in_der_wiese.jpg"
            className={Styles.slideImage}
          ></img>
          <p className={Styles.slideText}>
            Du wünschst dir Unterstützung für eine Veränderung Eures
            Problems?{" "}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
