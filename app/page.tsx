import Image from "next/image";
import dogHeaderimage from "../public/img/dogwithhuman.jpg";
import Style from "./page.module.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <main>
      <div className="container" style={{ padding: "0" }}>
        <div className="container position-relative">
          <Image
            src={dogHeaderimage}
            placeholder="blur"
            quality={50}
            className="img-fluid"
            style={{
              height: "clamp(150px, 50vh, 400px)",
              objectFit: "cover",
            }}
            alt="Picture of a human and a dog"
          />

          <div
            className="container hstack mt-3 gap-3 gap-sm-1 align-items-stretch position-absolute top-0 start-0 w-100 d-flex justify-content-between "
            style={{ height: "250px", opacity: "0.8", flexShrink: 1 }}
          >
            <div
              className="h-auto w-auto mw-25 p-5 align-self-start"
              style={{
                maxWidth: "350px",
                maxHeight: "200px",
                flexShrink: 1,
                color: "#BFD59E",
                backgroundColor: "#393939",
              }}
            >
              Weil Beziehung mehr ist als Erziehung.
            </div>

            <div
              className="ms-auto h-auto w-auto mw-25 p-5 align-self-end"
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
        <img className={Style.printwalk} src="./img/printwalk.svg"></img>
      </div>

      <div className="container">
        <ImageSlider />
      </div>
    </main>
  );
}
