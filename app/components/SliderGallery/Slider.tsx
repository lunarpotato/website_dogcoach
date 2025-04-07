import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Image from "next/image";
import Style from "../SliderGallery/Slider.module.css";


export default function Slider() {

  return (
      <Carousel className={`${Style.container} ${Style.custom}`}>

        <CarouselItem>
          <div className="d-flex justify-content-center">
          <div className="col-md-6">
          <Image 
        
            src="/img/dog_backpack.jpg"
            alt="slider image 1"
            width={500}
            height={500}
            objectFit="fill"

          />
          </div>
          <div className="col-md-6"> Platzhaltertext für Bild</div>
          </div>
        </CarouselItem >
        <CarouselItem >
          <Image
            className="col-md-6"
            src="/img/forest_walk.jpg"  
            alt="slider image 2"
            width={500}
            height={500}
            objectFit="fill"
          />
         
        </CarouselItem>
        <CarouselItem >
          <Image 
            className="col-md-6"
            src="/img/paws_hands.jpg" 
            alt="slider image 2"
            width={500}
            height={500}
            objectFit="fill"
           
          />
        </CarouselItem>
      </Carousel>


  );
}
