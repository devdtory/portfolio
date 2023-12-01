/* eslint-disable @next/next/no-img-element */
import { works } from "@/static/works";
import React from "react";

function Works() {
  const [scroll, setScroll] = React.useState(1);
  const Card = ({ img, title, desc }) => {
    return (
      <div className="w-[100%] md:w-[400px] lg:w-[520px] shrink-0 pcard snap-center snap-proximity snap-always mr-16">
        <div className="h-[320px] w-full bg-red-100 rounded-md">
          <img
            src={img}
            className="h-full w-full object-cover rounded-md"
            alt=""
          />
        </div>
        <h2 className="text-[#F0F0F0] text-[20px] font-semibold mt-6 whitespace-normal">
          {title}
        </h2>
        <p className="text-[#ccc] text-sm leading-6 mt-2 whitespace-normal">
          {desc}
        </p>
      </div>
    );
  };

  return (
    <div id="portfolio" className="font-mona-sans pt-[100px] lg:pt-[180px]">
      <div className="px-[30px] lg:px-[100px]">
        <h3 className="text-[#BFD200] text-sm tracking-[1.6px]">OUR WORKS</h3>
        <h1 className="text-white font-bold text-[40px]">Portfolio </h1>
      </div>

      <div className="px-[30px] worksContainer lg:px-[100px] mt-5 flex overflow-x-auto scroll-smooth scrollbar-hide">
        {works.map((work, i) => (
          <Card
            key={i}
            img={work.image}
            title={work.title}
            desc={work.description}
          />
        ))}
      </div>

      <div className="lg:px-[100px] mt-10 flex justify-center lg:justify-start space-x-4">
        <button
          onClick={() => {
            console.log("clicked");
            let container = document.querySelector(".worksContainer");
            let width = container.clientWidth;
            console.log(width, container.scrollLeft);
            container.scrollLeft = container.scrollLeft - width;
          }}
          className="opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M15.9307 12.2308L14.0454 10.3455L8.38672 16.0028L14.0441 21.6602L15.9294 19.7735L13.4934 17.3362H23.5427V14.6695H13.4934L15.9307 12.2308Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.62998 5.63063C-0.0980155 11.3586 -0.0980155 20.644 5.62998 26.372C11.358 32.1 20.6433 32.1 26.3713 26.372C32.0993 20.644 32.0993 11.3586 26.3713 5.63063C20.6433 -0.0973644 11.358 -0.0973644 5.62998 5.63063ZM7.51532 7.51597C5.26487 9.76642 4.00058 12.8187 4.00058 16.0013C4.00058 19.1839 5.26487 22.2362 7.51532 24.4866C9.76577 26.7371 12.818 28.0014 16.0007 28.0014C19.1833 28.0014 22.2355 26.7371 24.486 24.4866C26.7364 22.2362 28.0007 19.1839 28.0007 16.0013C28.0007 12.8187 26.7364 9.76642 24.486 7.51597C22.2355 5.26552 19.1833 4.00123 16.0007 4.00123C12.818 4.00123 9.76577 5.26552 7.51532 7.51597Z"
              fill="#CCCCCC"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            console.log("clicked");
            let container = document.querySelector(".worksContainer");
            let width = container.clientWidth;
            console.log(width, container.scrollLeft);
            container.scrollLeft = container.scrollLeft + width;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16.0693 12.2308L17.9546 10.3455L23.6133 16.0028L17.9559 21.6602L16.0706 19.7735L18.5066 17.3362H8.45728V14.6695H18.5066L16.0693 12.2308Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.37 5.63063C32.098 11.3586 32.098 20.644 26.37 26.372C20.642 32.1 11.3567 32.1 5.62868 26.372C-0.0993176 20.644 -0.0993176 11.3586 5.62868 5.63063C11.3567 -0.0973644 20.642 -0.0973644 26.37 5.63063ZM24.4847 7.51597C26.7351 9.76642 27.9994 12.8187 27.9994 16.0013C27.9994 19.1839 26.7351 22.2362 24.4847 24.4866C22.2342 26.7371 19.182 28.0014 15.9993 28.0014C12.8167 28.0014 9.76447 26.7371 7.51402 24.4866C5.26357 22.2362 3.99928 19.1839 3.99928 16.0013C3.99928 12.8187 5.26357 9.76642 7.51402 7.51597C9.76447 5.26552 12.8167 4.00123 15.9993 4.00123C19.182 4.00123 22.2342 5.26552 24.4847 7.51597Z"
              fill="#CCCCCC"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Works;
