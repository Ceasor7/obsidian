import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="px-6 bg-hero bg-no-repeat bg-center bg-cover pt-14 flex flex-col items-center justify-center text-center lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg mt-6">
          <div className="flex items-center justify-center mb-4">
            <Image src="/jeep.svg" alt="camp" width={50} height={50} />
          </div>
          <p className="uppercase text-[18px] font-[400] text-white">
            We are here for you
          </p>

          <h2 className="text-[40px] flex items-center justify-center font-[700] leading-[120%] text-white lg:text-[64px] lg:font-[700] lg:leading-[120%] xl:max-w-[390px] mt-4">
            Guide You to Easy Path
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
