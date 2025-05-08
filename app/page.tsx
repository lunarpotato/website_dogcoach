import Image from "next/image";
import dogHeaderimage from "../public/img/dogwithhuman.jpg";
import Slider from "./components/SliderGallery/Slider";
import Button from "./components/Button/Button";
import Style from "./page.module.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h3>Landing Page</h3>

        <span className="text">Dies ist ein Willkommenstext!</span>
      </div>
    </main>
  );
}
