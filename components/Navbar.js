/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-30">
      <div className="h-[90px] lg:h-[112px] bg-[#101010]">
        <div className="w-full px-[30px] lg:px-[100px] h-full flex items-center justify-between">
          <div>
            <img src="/logoPrimary.svg" className="h-11" alt="" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-[60px] text-white">
              <li>Services</li>
              <li>Dtory</li>
              <li>Portfolio</li>
              <li>Tools</li>
            </ul>
          </div>
          <div>
            <button className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M5.33203 10.6641H26.6654M5.33203 21.3307H26.6654"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="radialG h-[48px] px-6 hidden lg:flex items-center text-white rounded-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
