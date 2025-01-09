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
      {pathname === "/loginstep" || ( pathname === "/loginstep/step31" && <NavbarThird />) || ( pathname === "/loginstep/step4" && <NavbarThird /> ) || (pathname === "/loginstep/step5" && <NavbarThird />) || (pathname === "/loginstep/step6" && <NavbarThird /> )||
        (pathname === "/loginstep/step2" && <NavbarThird />)}
      {pathname === "/login" && <NavbarSecond />}
      {pathname !== "/" &&
        pathname !== "/login" &&
        pathname !== "/loginstep" &&  pathname !== "/about" &&
        pathname !== "/loginstep/step2" && pathname !== "/loginstep/step31" && pathname !== "/loginstep/step4" && pathname !== "/loginstep/step5" && pathname !== "/loginstep/step6" && <Navbar />}
    </>
  );
};

export default NavbarMain;
