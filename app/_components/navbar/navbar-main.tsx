"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../navbar/navbar";
import NavbarSecond from "../navbar/navbar-second";
import NavbarThird from "./navbar-third";

const NavbarMain = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/loginstep" ||
        (pathname === "/loginstep/step2" && <NavbarThird />)}
      {pathname === "/login" && <NavbarSecond />}
      {pathname !== "/" &&
        pathname !== "/login" &&
        pathname !== "/loginstep" &&
        pathname !== "/loginstep/step2" && <Navbar />}
    </>
  );
};

export default NavbarMain;
