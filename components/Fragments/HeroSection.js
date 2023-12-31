/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="min-h-[650px] lg:h-screen relative font-mona-sans bg-[#030303]">
      <img
        src="/mesh-1.png"
        alt=""
        className="absolute inset-0 h-full w-full z-0 opacity-100 object-cover"
      />
      <div className="absolute inset-0 h-full w-full z-20 pt-[160px] lg:pt-[218px] px-[20px] lg:px-[100px]  ">
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 2 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
          className="text-white font-[1000] font-mona-sans w-fit mx-auto text-[40px] lg:text-[72px] text-center leading-[50px] lg:leading-[90.36px] relative"
        >
          <span className="relative">
            <span>Every</span>
            <div className="absolute -top-4 left-0 flex items-center space-x-1">
              <div className="h-3 w-3 bg-[#BFD200]"></div>
              <div className="h-3 w-3 bg-[#BFD200]"></div>
            </div>
          </span>{" "}
          Design Woven <br /> Into A{" "}
          <span className="story-gradient">Story</span>
        </motion.h1>
        <motion.p
          viewport={{
            once: true,
          }}
          initial={{ opacity: 0, y: 30, scale: 1.3 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-center mt-4 leading-[24px] z-30 font-mona-sans"
        >
          We play with colors and elements to create <br /> visually amazing
          shit for your brand.
        </motion.p>
        <div className="flex items-center justify-center mt-8 z-20">
          <Link href={"/#pricing"}>
            <motion.button
              viewport={{
                once: true,
              }}
              initial={{ opacity: 0, y: 30, scale: 1.3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="radialG group h-[48px] w-[180px] lg:w-[210px] px-6 flex items-center text-white rounded-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 h-full w-full group-hover:-translate-x-[0%] rounded-lg -translate-x-[100%] bg-[#B4AEF6] transition-all"></div>
              <div className="absolute inset-0 h-full w-full flex items-center justify-center group-hover:text-black transition-all">
                Contact us
              </div>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
