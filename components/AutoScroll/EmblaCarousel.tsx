"use client";
import { cn } from "@/lib/utils";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

type PropType = {
  slides: { src: string; title: string; link: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

  return (
    <div className="max-w-5xl pt-5 mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {slides.map((slide, index) => (
            <div className="relative flex-none w-[70%] pl-4" key={index}>
              <Image
                height={600}
                width={750}
                src={slide.src}
                alt={`Slide ${index + 1}`}
              />
              {/* Position the text over the image */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-md">
                <h3 className="text-white font-semibold">{slide.title}</h3>
                <Link
                  href={slide.link}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-white py-0"
                  )}
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
