/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroSection() {
  return (
    <section className="min-h-[800px] relative font-mona-sans">
      <img
        src="/mesh-1.png"
        alt=""
        className="absolute inset-0 h-full w-full z-0 opacity-70"
      />
      <div className="absolute inset-0 h-full w-full z-20 pt-[160px] lg:pt-[218px] px-[20px] lg:px-[100px]  ">
        <h1 className="headingGradient  font-[1000] font-mona-sans w-fit mx-auto text-[40px] lg:text-[72px] text-center leading-[50px] lg:leading-[90.36px] relative">
          Every Design Woven <br /> Into A Story
          <div className="absolute -top-1 left-1 flex items-center space-x-1">
            <div className="h-3 w-3 bg-[#BFD200]"></div>
            <div className="h-3 w-3 bg-[#BFD200]"></div>
          </div>
        </h1>
        <p className="text-white text-center mt-4 leading-[24px] z-30 font-mona-sans">
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
