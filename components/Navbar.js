/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("hashChangeStart", () => {
      setSidebarOpen(false);
    });
  }, [router]);
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-40 font-mona-sans">
        <div className="h-[80px] lg:h-[112px] bg-[#101010]">
          <div className="w-full px-[30px] lg:px-[100px] h-full flex items-center justify-between">
            <div>
              <img src="/logoPrimary.svg" className="h-9 lg:h-11" alt="" />
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-[60px] text-[#EBEBEB]">
                <li>
                  <Link scroll href="#services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link scroll href="#pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link scroll href="#portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link scroll href="#faq">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link scroll href="#happyclients">
                    Happy Clients
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
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
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black/70 h-full w-full"
          >
            <div className="w-full bg-[#0B0B0B] mt-[80px] lg:mt-[112px] py-[40px] px-[30px]">
              <ul className="text-white space-y-10 font-mona-sans">
                <li>
                  <Link scroll href="#services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link scroll href="#pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link scroll href="#portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link scroll href="#faq">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link scroll href="#happyclients">
                    Happy Clients
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
