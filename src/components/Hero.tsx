import React from "react";
import Image from "next/image";
import PlayStoreButton from "./PlayStoreButton";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[1px] h-40 bg-gradient-to-b from-transparent via-[#1d202180] to-[#1d2021]"></div>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-extrabold max-w-lg md:max-w-2xl mx-auto">
          <span className="text-[#ebdbb2]">
            {heroDetails.heading.split(" ").slice(0, 2).join(" ")}
          </span>{" "}
          <span className="text-[#fe8019]">
            {heroDetails.heading.split(" ").slice(3).join(" ")}
          </span>
        </h1>

        <p className="mt-4 text-lg text-[#a89984] max-w-xl mx-auto">
          {heroDetails.subheading}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <PlayStoreButton  dark />
        </div>
        <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
