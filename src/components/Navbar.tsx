"use client";
import Image from "next/image";
import React from "react";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";
const Navbar = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="h-10 tablet:h-24 w-full relative flex justify-between items-center desktop:h-24 ">
      <Image
        src={`/shared/logo.svg`}
        alt="logo"
        width={40}
        height={40}
        className="object-contain cursor-pointer"
      />
      <hr className="h-0.5 w-1/2 hidden desktop:block bg-white" />
      <div className="tablet:flex hidden desktop:w-1/2 home_desktop-bg bg-black h-full w-2/3">
        <ul className="justify-between items-center   flex text-p-white h-full w-full px-11">
          <div className="relative">
            <Link href="/" className="nav_li">
              <li className="barlow ">HOME</li>
            </Link>
            <span className="nav_span "></span>
          </div>
          <div className="relative">
            <Link href="/destination" className="nav_li">
              <li className="barlow ">DESTINATION</li>
            </Link>
            <span className="nav_span"></span>
          </div>
          <div className="relative">
            <Link href="/crew" className="nav_li">
              <li className="barlow ">CREW</li>
            </Link>
            <span className="nav_span"></span>
          </div>
          <div className="relative">
            <Link href="/technology" className="nav_li">
              <li className="barlow ">TECHNOLOGY</li>
            </Link>
            <span className="nav_span"></span>
          </div>
        </ul>
      </div>
      <Image
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        src={`/shared/icon-${isMenuOpen ? "close" : "hamburger"}.svg`}
        alt="logo"
        width={24}
        height={21}
        className="object-contain tablet:hidden cursor-pointer z-20"
      />
      {isMenuOpen && <ToggleMenu />}
    </nav>
  );
};

export default Navbar;
