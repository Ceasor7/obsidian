import React from "react";

const About = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="w-full h-screen bg-hero bg-no-repeat bg-center bg-cover bg-fixed pt-14 flex flex-col items-center justify-center text-center lg:px-20 3xl:px-0 mx-auto pb-24">
        <div className="bg-black bg-opacity-50 p-6 mt-6">
          <h2 className="text-xl flex items-center justify-center font-[700] leading-[120%] text-white lg:font-[700] lg:leading-[120%]  mt-4">
            Discover Kenya with Ease and Comfort
          </h2>

          <p className="text-white text-[18px] leading-relaxed mt-4 max-w-[500px] mx-auto">
            At Obsidian, we make your Kenyan adventure seamless and memorable.
            Whether you&apos;re arriving for the first time or a returning
            visitor, we’ve got you covered from the moment you land. Enjoy our
            reliable
            <span className="font-bold"> airport pickups</span> and
            <span className="font-bold"> hotel drop-offs</span>, along with easy
            <span className="font-bold"> hotel bookings</span> for a hassle-free
            stay. For nature lovers, immerse yourself in our thrilling
            <span className="font-bold"> game drives</span> as we guide you
            through Kenya&apos;s iconic wildlife reserves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
