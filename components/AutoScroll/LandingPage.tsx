import { EmblaOptionsType } from "embla-carousel";
import "../../app/globals.css";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    src: "/slideshow/safari1.jpg",
    title: "The Dying need no Shoes",
    link: "/play",
  },
  {
    src: "/slideshow/safari2.jpg",
    title: "The Dying need no Shoes",
    link: "/play",
  },
  {
    src: "/slideshow/safari3.jpg",
    title: "The Dying need no Shoes",
    link: "/play",
  },
  {
    src: "/slideshow/safari4.jpg",
    title: "The Dying need no Shoes",
    link: "/play",
  },
];

const LandingPage = () => {
  return (
    <div className=" pb-10">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default LandingPage;
