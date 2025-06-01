/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Custom Styles
import Styles from "./ImageSlider.module.css";

export default function ImageSlider() {
  const router = useRouter();

  return (
    <Swiper
      direction="horizontal"
      loop={true}
      autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={Styles.slideWrapper}>
          <img
            src="../img/sitzen_am_waldrand.jpg"
            className={Styles.slideImage}
            loading="lazy"
            onClick={() => router.push("/contact")}
          ></img>
          <p
            className={Styles.slideText}
            onClick={() => router.push("/contact")}
          >
            Du verstehst das Verhalten deines Hundes nicht?
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.slideWrapper}>
          <img
            src="../img/spazieren_mithunden.jpg"
            loading="lazy"
            className={Styles.slideImage}
            onClick={() => router.push("/contact")}
          ></img>

          <p
            className={Styles.slideText}
            onClick={() => router.push("/contact")}
          >
            Du hast den Eindruck keinen Kontakt zu deinem Hund zu haben?{" "}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Styles.slideWrapper}>
          <img
            src="../img/sitzen_in_der_wiese.jpg"
            loading="lazy"
            className={Styles.slideImage}
            onClick={() => router.push("/contact")}
          ></img>
          <p
            className={Styles.slideText}
            onClick={() => router.push("/contact")}
          >
            Du wünschst dir Unterstützung für eine Veränderung Eures
            Problems?{" "}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
