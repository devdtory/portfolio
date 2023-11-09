/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

function TrustedBy() {
  return (
    <section className="bg-[#101010] pt-8 pb-[87px] px-[20px] font-mona-sans">
      <p className="text-center text-[#A1A1A1]">Trusted by</p>
      <div className="hidden lg:flex justify-evenly mt-[60px]">
        <Marquee>
          <img
            src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211401/portfolio/hoot_logo_yo2gvq.webp"
            alt=""
            className="h-10 mr-20 grayscale object-contain"
          />
          <img
            src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211401/portfolio/Clients_devpriyangsu_Image_ryuohj.webp"
            alt=""
            className="h-6 mr-20 grayscale object-contain"
          />
          <img
            src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/Level_Box_Games_Logo_w2w23e.webp"
            alt=""
            className="h-6 mr-20 grayscale object-contain"
          />
          <img
            src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/richribbit_t8srjf.webp"
            alt=""
            className="h-12 mr-20 grayscale object-contain"
          />
          <img
            src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/Rocketbird_1_._fuoyin.webp"
            alt=""
            className="h-12 mr-20 grayscale object-contain"
          />
          <img
            src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/froggies_text_logo_ewvxej.webp"
            alt=""
            className="h-8 mr-20 grayscale object-contain"
          />
        </Marquee>
      </div>

      <div className="grid gap-12 lg:hidden grid-cols-2 mt-16 place-content-center place-items-center">
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211401/portfolio/hoot_logo_yo2gvq.webp"
          alt=""
          className="h-16 grayscale object-contain col-span-2"
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211401/portfolio/Clients_devpriyangsu_Image_ryuohj.webp"
          alt=""
          className="h-10 grayscale object-contain"
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/Level_Box_Games_Logo_w2w23e.webp"
          alt=""
          className="h-9 grayscale object-contain"
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/richribbit_t8srjf.webp"
          alt=""
          className="h-20 grayscale object-contain"
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/Rocketbird_1_._fuoyin.webp"
          alt=""
          className="h-14 grayscale object-contain"
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699211400/portfolio/froggies_text_logo_ewvxej.webp"
          alt=""
          className="h-10 grayscale object-contain col-span-2"
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699555776/portfolio/Hello_Legal_Logo_afxhpb.webp"
          alt=""
          className="h-10 grayscale object-contain col-span-2"
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1699555775/portfolio/elmo_logo_wogfua.webp"
          alt=""
          className="h-10 grayscale object-contain col-span-2"
        />
      </div>
    </section>
  );
}

export default TrustedBy;
