import React from "react";
import Navbar from "./Navbar";
import localFont from "@next/font/local";

const monaSans = localFont({
  src: [
    {
      path: "../public/mona/Mona-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/mona/Mona-Sans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/mona/Mona-Sans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/mona/Mona-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/mona/Mona-Sans-BoldWide.ttf",
      weight: "1000",
      style: "wide",
    },
    {
      path: "../public/mona/Mona-Sans-RegularWide.ttf",
      weight: "1100",
      style: "wide",
    },
    {
      path: "../public/mona/Mona-Sans-Regular.ttf",
      weight: "1200",
      style: "normal",
    },
  ],
  variable: "--font-mona",
});

function Layout({ children }) {
  return (
    <div className={`${monaSans.variable}`}>
      <Navbar />
      <div className="pt-[80px] lg:pt-[112px]">{children}</div>
    </div>
  );
}

export default Layout;
