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
      <div className="px-[40px] lg:px-[100px] lg:flex lg:justify-center space-y-9 lg:space-y-0 lg:gap-10 mt-16 font-mona-sans">
        <div className="h-[669px] w-[380px] bg-gradient-to-tr rounded-lg from-[#AEFB2A]/50 via-transparent to-[#AEFB2A]/50 p-[1px]">
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
              <span className="text-[48px] font-bold">4998/mo</span>
            </div>
            <p className="text-[#EFEFEF]">Pause or cancel anytime</p>
            <button className="h-[48px] rounded-lg w-full bg-[#AEFB2A] text-black mt-4 font-semibold">
              Book a call
            </button>
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
              <span className="text-[48px] font-bold">8500+</span>
            </div>
            <p className="text-[#EFEFEF]">Pause or cancel anytime</p>
            <button className="h-[48px] rounded-lg w-full border border-[#FB5607] text-[#FB5607] mt-4 font-semibold">
              Book a call
            </button>
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
      <div className="px-[40px] lg:px-[100px] flex justify-center gap-10 mt-10 font-mona-sans place-content-center place-items-center">
        <div className="w-[800px] h-[215px] bg-gradient-to-br from-[#978DFF] via-transparent to-[#978DFF] rounded-lg p-[1px]">
          <div className="h-full w-full bg-black rounded-lg p-[51px]">
            <h1 className="text-center text-white font-semibold text-[24px]">
              Web development
            </h1>
            <p className="text-center leading-6 text-[#E7E7E7] w-[450px] mx-auto text-sm mt-2">
              Get your website developed in best frameworks like next.js or even
              quick developments with Framer.
            </p>
            <div className="flex items-center justify-center text-[#978DFF] mt-2">
              <span className="font-bold mr-2">$</span>
              <span className="text-[24px] font-bold">2000+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
