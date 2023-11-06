/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroSection() {
  return (
    <section className="min-h-[800px] relative">
      <img
        src="/mesh-1.png"
        alt=""
        className="absolute inset-0 h-full w-full z-0 opacity-50"
      />
      <div className="absolute inset-0 h-full w-full z-20 pt-[160px] lg:pt-[218px] px-[20px] lg:px-[100px]  ">
        <h1 className="headingGradient text-[40px] lg:text-[72px] text-center font-bold leading-[50px] lg:leading-[90.36px] relative">
          Every Design Woven <br /> Into A Story
        </h1>
        <p className="text-white text-center mt-7 leading-[24px] z-30">
          We play with colors and elements to create <br /> visually amazing
          shit for your brand.
        </p>
        <div className="flex items-center justify-center mt-12 z-20">
          <button className="radialG h-[48px] px-[75px] flex items-center text-white rounded-lg border-[1px] border-[#BAB4FF]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
