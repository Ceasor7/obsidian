import Image from "next/image";
import React from "react";
import FeaturesCard from "./FeaturesCard";

const FEATURES = [
  {
    image: "/features/airport-pickups.webp",
    title: "Airport Pickup and Hotel Drop-off",
    description:
      "We Provide reliable airport pickups with options to drop tourists at their hotels. We also Offer a personalized service where a driver waits for clients with a sign at the airport.",
  },
  {
    image: "/features/airport-pickups.webp",
    title: "Hotel Bookings",
    description:
      "We Collaborate with a variety of hotels, from budget-friendly options to luxury stays, allowing tourists to choose their preferred accommodation.",
  },
  {
    image: "/features/airport-pickups.webp",
    title: "Customizable Tour Packages",
    description:
      "We provide customizable tour packages that include the client's preferences for destinations, accommodations, and activities.",
  },
  {
    image: "/features/airport-pickups.webp",
    title: "Game Drive Safaris",
    description:
      "Provide guided game drives in popular national parks and game reserves, with knowledgeable guides who offer insights into wildlife and nature.",
  },
  {
    image: "/features/airport-pickups.webp",
    title: " Booking and Payment Features",
    description:
      "We Create an easy-to-use online platform where clients can book airport transfers, hotel stays, and tours directly.",
  },
  {
    image: "/features/airport-pickups.webp",
    title: "Additional Services",
    description:
      "We Provide support with obtaining tourist visas for travelers visiting the country. We also Partner with insurance companies to offer travel insurance as an add-on for clients.",
  },
];

const Features = () => {
  return (
    <section className="flex-col flex items-center justify-center overflow-hidden bg-center bg-no-repeat py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
          <div className="relative items-center justify-center text-center">
            <Image
              src="/obsidian.png"
              alt="camp"
              width={150}
              height={150}
              className="absolute left-[380px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] ">
              Our Features
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 lg:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeaturesCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                cardImage={feature.image}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
