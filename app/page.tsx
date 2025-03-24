import Image from "next/image";
import dogHeaderimage from "../public/img/dogwithhuman.jpg";



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
          className="hstack gap-3 align-items-stretch position-absolute top-0 start-0 w-100 d-flex justify-content-between"
          style={{ height: "250px", opacity: "0.8"}}
        >
          <div
            className="h-auto w-auto mw-25 p-5 align-self-start"
            style={{ 
              maxWidth: "350px", 
              color: "#BFD59E",
              backgroundColor: "#393939"}}
          >
            Weil Beziehung mehr ist als Erziehung.
          </div>

          <div
            className=" ms-auto h-auto w-auto mw-25 p-5 align-self-end"
            style={{
              maxWidth: "350px",
              wordBreak: "break-word",
              color: "#BFD59E",
              backgroundColor: "#393939",
            }}
          >
            Individuelles Coaching für ein harmonisches Mensch-Hund-Team.
          </div>
        </div>
      </div>

      {/* Slider für Beispielbilder */}
      {/* <Carousel>
      <Carousel.Item interval={1000}>
        <div> </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div> </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div> </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

    </main>
  );
}
