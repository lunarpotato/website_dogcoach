import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Image from "next/image";
import Style from "../SliderGallery/Slider.module.css";

export default function Slider() {
  const _width = 0;
  const _height = 0;

  return (
    <div className={Style.container}>
      <Carousel>
        <CarouselItem>
          <Image
            src={"/img/dog_backpack.jpg"}
            alt="First Slide"
            layout="responsive"
            width={_width}
            height={_height}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/img/forest_walk.jpg"
            alt="Second Slide"
            layout="responsive"
            width={_width}
            height={_height}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/img/paws_hands.jpg"
            alt="Second Slide"
            layout="responsive"
            width={_width}
            height={_height}
          />
        </CarouselItem>
      </Carousel>
       
    </div>
  );
}
