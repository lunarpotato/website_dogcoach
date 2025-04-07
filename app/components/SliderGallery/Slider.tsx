import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Style from "../SliderGallery/Slider.module.css";

export default function Slider() {
  return (
    <Carousel className={`${Style.container} ${Style.custom}`}>
      <CarouselItem>
        <div className="d-flex justify-content-center">
          <img
            className={Style.img}
            src="/img/dog_backpack.jpg"
            alt="slider image 1"
          />
          <div className="col-md-6"> Platzhaltertext für Bild</div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <img
          className={Style.img}
          src="/img/forest_walk.jpg"
          alt="slider image 2"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className={Style.img}
          src="/img/paws_hands.jpg"
          alt="slider image 3"
        />
      </CarouselItem>
    </Carousel>
  );
}
