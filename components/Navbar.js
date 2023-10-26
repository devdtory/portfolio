/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-10">
      <div className="h-[112px] bg-[#101010]">
        <div className="w-full px-[100px] h-full flex items-center justify-between">
          <div>
            <img src="/logoPrimary.svg" alt="" />
          </div>
          <div>
            <ul className="flex items-center space-x-[60px] text-white">
              <li>Services</li>
              <li>Dtory</li>
              <li>Portfolio</li>
              <li>Tools</li>
            </ul>
          </div>
          <div>
            <button className="radialG h-[48px] px-6 flex items-center text-white rounded-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
