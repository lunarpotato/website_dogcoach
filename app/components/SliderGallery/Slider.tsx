import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Style from "../SliderGallery/Slider.module.css";

export default function Slider() {

  return (
    <div className={Style.container}>
      <Carousel>
        <CarouselItem>
          <Image
            src="/img/dog_backpack.jpg" fluid
         
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/img/forest_walk.jpg" fluid
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/img/paws_hands.jpg" fluid
           
          />
        </CarouselItem>
      </Carousel>
       
    </div>
  );
}
