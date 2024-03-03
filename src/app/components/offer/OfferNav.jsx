import React, { useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Logo_1 from "../../img/offer/logo.svg";
import Link from "next/link";

export default function OfferNav() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setScroll(scrollHeight);

      if (scrollHeight >= 140) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      id="header"
      className={`container mx-auto  px-4 w-full py-4 bg- transition-all duration-300 fixed shadow-none lg:px-20 z-50 max-w-full rounded-none border-none ${
        scroll ? " bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center container mx-auto justify-between text-blue-gray-900">
        <Link href={"/"}>
          <Image
            src={Logo_1}
            height={100}
            width={90}
            alt="logo"
            className="w-20"
          />
        </Link>
        <Link
          href={"#"}
          className="text-[18px] leading-[22px] font-medium text-white hover:text-[#B41A2C]"
        >
          Examples
        </Link>
        <Link
          href={"#"}
          className="text-[18px] leading-[22px] font-medium text-white hover:text-[#B41A2C]"
        >
          UENI vs Others
        </Link>
        <Link
          href={"#"}
          className="text-[18px] leading-[22px] font-medium text-white hover:text-[#B41A2C]"
        >
          Pricing
        </Link>
        <Link
          href={"#"}
          className="text-[18px] leading-[22px] font-medium text-white hover:text-[#B41A2C]"
        >
          Questions?
        </Link>
      </div>
    </Navbar>
  );
}
