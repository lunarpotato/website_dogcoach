"use client";
import React, { useState, useEffect, useRef } from "react";
import Style from "../SliderGallery/Slider.module.css";

const images = [
  {
    src: "/img/dog_backpack.jpg",
    caption: "Caption Text",
  },
  {
    src: "/img/forest_walk.jpg",
    caption: "Caption Two",
  },
  {
    src: "/img/paws_hands.jpg",
    caption: "Caption Three",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const [isHovered, setIsHovered] = useState(false);

  //Images preloaden
  useEffect(() => {
    images.forEach((img) => {
      const preloadImg = new Image();
      preloadImg.src = img.src;
      preloadImg.decode().catch(() => {});
    });
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isHovered) return; // Mausover pausiert den Slider

    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // alle 7 Sekunden

    return () => clearInterval(interval); // Cleanup beim Unmount oder bei Änderung
  }, [current, isHovered]);

  return (
    <div
      className={Style["slideshow-container"]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`${Style.mySlide} ${index === current ? Style.active : ""}`}
        >
          {index === current && (
            <>
              <img
                src={img.src}
                style={{ width: "100%" }}
                alt={`Slide ${index}`}
              />
              <div className={Style.text}>{img.caption}</div>
            </>
          )}
        </div>
      ))}

      <a className={Style.prev} onClick={prevSlide}>
        ❮
      </a>
      <a className={Style.next} onClick={nextSlide}>
        ❯
      </a>

      <div style={{ textAlign: "center" }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${Style.dot} ${current === idx ? Style.active : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}
