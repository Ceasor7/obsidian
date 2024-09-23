import { EmblaOptionsType } from "embla-carousel";
import "../../app/globals.css";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    src: "/slideshow/safari1.jpg",
    title: "The Dying need no Shoes",
  },
  {
    src: "/slideshow/safari2.jpg",
    title: "The Dying need no Shoes",
  },
  {
    src: "/slideshow/safari3.jpg",
    title: "The Dying need no Shoes",
  },
  {
    src: "/slideshow/safari4.jpg",
    title: "The Dying need no Shoes",
  },
];

const LandingPage = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default LandingPage;
