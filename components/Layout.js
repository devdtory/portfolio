import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[112px]">{children}</div>
    </div>
  );
}

export default Layout;
