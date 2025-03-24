import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

import Image from "next/image";
import dogHeaderimage from "../public/img/dogwithhuman.jpg";


function SliderGallery() {

  return (
    <div className="Slider container">
      <Carousel>
        <CarouselItem>
          <img className="d-block w-100" src= {'./img/dog_backpack.jpg'} alt="First slide" />  
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src= {'./img/running_dog.jpg'} alt="Second slide" />        
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src= {'./img/paws_hands.jpg'} alt="Third Slide" />        
        </CarouselItem>
      
      </Carousel>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="container position-relative">
        <Image
          src={dogHeaderimage}
          placeholder="blur"
          quality={50}
          className="img-fluid"
          // height={}
          // blurDataURL="data:..." automatically provided
          alt="Picture of a human and a dog"
        />

        <div
          className="container hstack gap-3 gap-sm-1 align-items-stretch position-absolute top-0 start-0 w-100 d-flex justify-content-between "
          style={{ height: "250px", opacity: "0.8", flexShrink: 1}}
        >
          <div
            className="h-auto w-auto mw-25 p-5 align-self-start"
            style={{ 
              maxWidth: "350px", 
              maxHeight: "200px",
              flexShrink: 1,
              color: "#BFD59E",
              backgroundColor: "#393939"}}
          >
            Weil Beziehung mehr ist als Erziehung.
          </div>

          <div
            className=" ms-auto h-auto w-auto mw-25 p-5 align-self-end"
            style={{
              maxWidth: "350px",
              maxHeight: "200px",
              flexShrink: 1,
              wordBreak: "break-word",
              color: "#BFD59E",
              backgroundColor: "#393939",
            }}
          >
            Individuelles Coaching für ein harmonisches Mensch-Hund-Team.
          </div>
        </div>
      </div>

      <SliderGallery/>

    </main>
  );
}
