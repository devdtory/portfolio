import React from "react";

function HeroSection() {
  return (
    <section className="mt-[218px] px-[100px]">
      <h1 className="headingGradient text-[72px] text-center font-bold leading-[90.36px]">
        Every Design Woven <br /> Into A Story
      </h1>
      <p className="text-white text-center mt-7 leading-[24px]">
        We play with colors and elements to create <br /> visually amazing shit
        for your brand.
      </p>
      <div className="flex items-center justify-center mt-12">
        <button className="radialG h-[48px] px-[75px] flex items-center text-white rounded-lg border-[1px] border-[#BAB4FF]">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default HeroSection;