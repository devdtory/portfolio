/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Pricing() {
  return (
    <div className="font-mona-sans">
      <h3 className="text-[#BFD200] text-center text-sm tracking-[1.6px]">
        WHAT&apos;S INCLUDED
      </h3>
      <h1 className="text-white font-bold text-center text-[40px]">Pricing</h1>
      <p className="text-sm text-[#CCC] text-center mt-2 leading-6">
        Choose what works best for you!
      </p>
      <div className="px-[5px] lg:px-[100px] lg:flex lg:justify-center space-y-9 lg:space-y-0 lg:gap-10 mt-16 font-mona-sans relative">
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1700762847/portfolio/Vector_1_._rleqov.webp"
          className="absolute top-1/2 -left-[7%] h-[900px] object-contain -translate-y-[100%] lg:-translate-y-[50%] z-0"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1700762847/portfolio/WhatsApp_Catalyst_Gradient_ppm7mt.webp"
          className="absolute top-1/2 -right-[2%] h-[900px] object-contain -translate-y-[50%] z-0"
          alt=""
        />

        <div className="h-[669px] lg:w-[380px] bg-gradient-to-tr rounded-lg from-[#AEFB2A]/50 via-transparent to-[#AEFB2A]/50 p-[1px]">
          <div className="h-full w-full bg-black rounded-lg p-[45px] relative z-10">
            <div className="absolute top-0 right-6 bg-[#AEFB2A] rounded-lg flex items-center text-[#000] px-[10px] py-[6px] space-x-1 font-medium -translate-y-1/2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.7114 8.90747C11.8889 7.92413 11.478 7.43247 11.0047 7.50747C10.5322 7.5833 10.3114 8.17663 9.8697 9.3633L9.7547 9.66997C9.6297 10.0075 9.56637 10.1758 9.44387 10.3C9.3222 10.4241 9.15387 10.49 8.81887 10.6216L8.51303 10.7408C7.3322 11.2033 6.74136 11.435 6.67386 11.9075C6.6072 12.38 7.1072 12.7816 8.10803 13.5833L8.36636 13.7916C8.65136 14.0191 8.79386 14.1333 8.87553 14.2891C8.95886 14.445 8.97136 14.6258 8.9972 14.9866L9.02137 15.315C9.11303 16.5841 9.1597 17.2191 9.59053 17.4358C10.0214 17.6525 10.5522 17.3066 11.613 16.6166L11.8872 16.4375C12.1889 16.2416 12.3397 16.1433 12.5122 16.115C12.6855 16.0875 12.8622 16.1333 13.213 16.225L13.5339 16.3083C14.7714 16.63 15.3905 16.7916 15.7247 16.4525C16.058 16.1133 15.8855 15.4991 15.5405 14.2691L15.4505 13.9525C15.353 13.6025 15.3039 13.4275 15.328 13.255C15.353 13.0816 15.4489 12.93 15.6397 12.625L15.8147 12.3483C16.4872 11.2775 16.823 10.7425 16.598 10.3166C16.3739 9.8908 15.7372 9.8558 14.463 9.78747L14.133 9.76913C13.7714 9.74997 13.5897 9.73997 13.4322 9.6608C13.2739 9.58163 13.1572 9.44163 12.9239 9.16163L12.7114 8.90747Z"
                  fill="currentColor"
                />
                <path
                  d="M12.3992 4.30404L12.5517 4.73904C12.7192 5.21654 12.8034 5.45571 12.9659 5.63071C13.1292 5.80737 13.3526 5.90071 13.8001 6.08654L14.2076 6.25654C15.7826 6.91154 16.5701 7.23987 16.6592 7.90904C16.6967 8.18737 16.6034 8.44904 16.3842 8.74071C16.3142 8.72182 16.2436 8.70515 16.1726 8.69071C15.7342 8.60154 15.1767 8.57154 14.6084 8.54071L14.2001 8.51904L14.0084 8.50821L13.8826 8.35821L13.6192 8.04404C13.2526 7.60404 12.8942 7.17487 12.5592 6.87654C12.2034 6.55821 11.6084 6.14321 10.8067 6.27154C9.99674 6.40154 9.56508 6.99071 9.33174 7.41071C9.11591 7.80071 8.92174 8.32237 8.72508 8.84987L8.58341 9.23154L8.52341 9.39237C8.47841 9.40904 8.42674 9.42987 8.36258 9.45571L7.98258 9.60404C7.45758 9.80987 6.93841 10.0124 6.55174 10.2349C6.13674 10.474 5.55174 10.9157 5.43591 11.729C5.32174 12.5349 5.75091 13.1232 6.07508 13.4724C6.31674 13.7315 6.64258 14.0057 6.99008 14.2874C5.68258 14.6415 4.98758 14.774 4.59258 14.3474C4.14758 13.8674 4.37758 12.9974 4.83841 11.2557L4.95674 10.8057C5.08758 10.3099 5.15341 10.0632 5.12091 9.81737C5.08758 9.57237 4.96008 9.35654 4.70508 8.92571L4.47341 8.53404C3.57591 7.01654 3.12758 6.25821 3.42591 5.65404C3.72591 5.05071 4.57508 5.00154 6.27424 4.90404L6.71341 4.87904C7.19674 4.85071 7.43758 4.83737 7.64841 4.72487C7.85841 4.61237 8.01424 4.41487 8.32591 4.01821L8.60924 3.65821C9.70591 2.26404 10.2542 1.56737 10.8842 1.67487C11.5142 1.78237 11.8092 2.62237 12.3984 4.30321L12.3992 4.30404Z"
                  fill="currentColor"
                />
              </svg>
              <span>Most Popular</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 8V16L17 17L13.91 11.5C13.65 11.04 12.92 11.27 13 11.81L14 21L4 17L5.15 8.94C5.38646 7.29158 6.20918 5.78363 7.46732 4.69262C8.72546 3.60162 10.3347 3.00069 12 3H20L18.42 5.37C19.36 5.88 20 6.86 20 8Z"
                  fill="#AEFB2A"
                />
              </svg>
            </div>
            <h2 className="text-[24px] font-semibold text-[#AEFB2A] mt-3">
              Startup
            </h2>
            <p className="text-[#EFEFEF] mt-2">Perfect for bigger projects</p>
            <div className="flex items-center text-[#AEFB2A] mt-2">
              <span className="font-bold mr-2">$</span>
              <span className="text-[48px] font-[1000]">4998/mo</span>
            </div>
            <p className="text-[#EFEFEF]">Pause or cancel anytime</p>
            <Link
              href={"https://calendly.com/dtory_studios/30min"}
              target="_blank"
            >
              <button className="h-[48px] rounded-lg w-full bg-[#AEFB2A] text-black mt-4 font-semibold">
                Book a call
              </button>
            </Link>
            <div className="my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="292"
                height="2"
                viewBox="0 0 292 2"
                fill="none"
              >
                <path
                  d="M1 1L291 1.00003"
                  stroke="#3C3C3C"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold">Whats included:</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>One request at a time</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Unlimited designs</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Mobile/Web App Designs</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Branding Services</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Easy Credit Card payments</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Pause or cancel anytime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[669px] w-[380px] bg-gradient-to-tr rounded-lg from-[#FB5607]/50 via-transparent to-[#FB5607]/50 p-[1px]">
          <div className="h-full w-full bg-black rounded-lg p-[45px] relative">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.4419 1.67344C13.3494 1.59657 13.2398 1.54306 13.1224 1.51741C13.0049 1.49177 12.883 1.49474 12.7669 1.52608C12.6508 1.55742 12.544 1.61621 12.4554 1.69749C12.3668 1.77878 12.299 1.88017 12.2578 1.99313L10.1953 7.65656L7.93031 5.46188C7.85425 5.3881 7.76341 5.33128 7.66379 5.29516C7.56417 5.25904 7.45802 5.24444 7.35235 5.25232C7.24667 5.26021 7.14387 5.29039 7.05071 5.34089C6.95755 5.3914 6.87615 5.46107 6.81188 5.54531C4.78125 8.20594 3.75 10.8825 3.75 13.5C3.75 15.688 4.61919 17.7865 6.16637 19.3336C7.71354 20.8808 9.81196 21.75 12 21.75C14.188 21.75 16.2865 20.8808 17.8336 19.3336C19.3808 17.7865 20.25 15.688 20.25 13.5C20.25 7.92656 15.4884 3.375 13.4419 1.67344ZM17.2397 14.3756C17.0452 15.4619 16.5226 16.4625 15.7422 17.2428C14.9618 18.023 13.961 18.5454 12.8747 18.7397C12.8335 18.7468 12.7918 18.7502 12.75 18.75C12.5619 18.75 12.3806 18.6792 12.2422 18.5518C12.1038 18.4244 12.0183 18.2496 12.0028 18.0621C11.9872 17.8746 12.0426 17.6881 12.1581 17.5396C12.2736 17.3911 12.4407 17.2914 12.6262 17.2603C14.1797 16.9987 15.4978 15.6806 15.7612 14.1244C15.7946 13.9282 15.9045 13.7533 16.0667 13.6381C16.229 13.523 16.4304 13.477 16.6266 13.5103C16.8227 13.5436 16.9976 13.6535 17.1128 13.8158C17.228 13.9781 17.2739 14.1794 17.2406 14.3756H17.2397Z"
                  fill="#FB5607"
                />
              </svg>
            </div>
            <h2 className="text-[24px] font-semibold text-[#FB5607] mt-3">
              Catalyst
            </h2>
            <p className="text-[#EFEFEF] mt-2">Custom web/apps</p>
            <div className="flex items-center text-[#FB5607] mt-2">
              <span className="font-bold mr-2">$</span>
              <span className="text-[48px] font-[1000]">8500+</span>
            </div>
            <p className="text-[#EFEFEF]">Pause or cancel anytime</p>
            <Link
              href={"https://calendly.com/dtory_studios/30min"}
              target="_blank"
            >
              <button className="h-[48px] rounded-lg w-full border border-[#FB5607] text-[#FB5607] mt-4 font-semibold">
                Book a call
              </button>
            </Link>
            <div className="my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="292"
                height="2"
                viewBox="0 0 292 2"
                fill="none"
              >
                <path
                  d="M1 1L291 1.00003"
                  stroke="#3C3C3C"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold">Whats included:</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>One request at a time</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Unlimited designs</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Mobile/Web App Designs</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Branding Services</span>
                </li>
                <li className="flex items-center space-x-2 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M14.0465 3.98582C14.1828 4.13065 14.256 4.32367 14.25 4.52245C14.244 4.72123 14.1593 4.90948 14.0145 5.04582L6.08455 12.5198C5.92289 12.6721 5.70808 12.755 5.48606 12.7509C5.26405 12.7468 5.05245 12.6559 4.89655 12.4978L2.21655 9.77782C2.14558 9.70809 2.08919 9.62494 2.05067 9.5332C2.01216 9.44147 1.99227 9.34299 1.99219 9.24349C1.9921 9.144 2.01181 9.04548 2.05017 8.95368C2.08853 8.86188 2.14477 8.77863 2.21562 8.70878C2.28647 8.63892 2.37051 8.58387 2.46284 8.54681C2.55518 8.50975 2.65396 8.49144 2.75344 8.49293C2.85293 8.49442 2.95112 8.5157 3.0423 8.55551C3.13348 8.59532 3.21583 8.65288 3.28455 8.72482L5.51855 10.9918L12.9865 3.95382C13.1314 3.81753 13.3244 3.74434 13.5232 3.75034C13.722 3.75634 13.9102 3.84105 14.0465 3.98582Z"
                      fill="white"
                    />
                  </svg>
                  <span>Easy Credit Card payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-16 relative">
        <img
          src="https://res.cloudinary.com/dxfa5a3ya/image/upload/v1700762847/portfolio/WhatsApp_web_development_gradient_rieem6.webp"
          className="absolute top-1/2 left-[28%] -rotate-12 h-[430px] object-contain -translate-y-[50%] z-0"
          alt=""
        />
        <div className="px-[5px] lg:px-[100px] flex justify-center font-mona-sans place-content-center place-items-center">
          <div className="w-full lg:w-[800px] relative h-[215px] bg-gradient-to-tr from-[#978DFF] via-transparent to-[#978DFF] rounded-lg p-[1px]">
            <div className="absolute top-0 p-[1px] left-6 bg-gradient-to-r from-[#978DFF] to-transparent rounded-full flex items-center text-[#fff] font-medium -translate-y-1/2 text-sm">
              <div className="w-full h-full px-[24px] py-[10px] rounded-full bg-[#171439]">
                <span>Free with catalyst</span>
              </div>
            </div>
            <div className="h-full w-full bg-black rounded-lg py-[51px] px-[20px] lg:p-[51px]">
              <h1 className="text-center text-white font-semibold text-[24px]">
                Web development
              </h1>
              <p className="text-center leading-6 text-[#E7E7E7] lg:w-[450px] mx-auto text-sm mt-2">
                Get your website developed in best frameworks like next.js or
                even quick developments with Framer.
              </p>
              <div className="flex items-center justify-center text-[#978DFF] mt-2">
                <span className="font-bold mr-2">+$</span>
                <span className="text-[24px] font-[1000]">2000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
