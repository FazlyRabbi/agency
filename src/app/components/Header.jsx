import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import { Link } from "react-scroll";
import logo from "../img/logo.webp";
import { FaBlenderPhone } from "react-icons/fa";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5 z-50">
      <Typography
        as="li"
        variant="small"
        className="p-1 text-[#06D889] text-md transition-all duration-200 "
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-200 text-white text-md hover:text-[#06D889]"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-200  text-white text-md hover:text-[#06D889]"
      >
        <a href="#" className="flex items-center">
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-200  text-white text-md hover:text-[#06D889]"
      >
        <a href="#" className="flex items-center">
          Project
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-200  text-white text-md hover:text-[#06D889]"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-200  text-white text-md hover:text-[#06D889]"
      >
        <a href="#" className="flex items-center">
          Case Study
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-200  text-white text-md hover:text-[#06D889]"
      >
        <a href="#" className="flex items-center">
          Blog
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      id="header"
      className="sticky container mx-auto px-4 border-none top-0 bg-black z-10 h-max max-w-full rounded-none py-2 lg:py-4 2xl:px-7"
    >
      <div className="flex items-center container mx-auto justify-between text-[#06D889]">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 transition-all duration-200"
        >
          <Image src={logo} height={150} width={200} alt="logo" />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="flex flex-row-reverse gap-5 2xl:gap-20">
            <div className="flex flex-row-reverse items-center gap-5">
              <div className="hidden md:block">
                <button className="border-[1px] border-[#06D889] font-bold py-2 px-8 rounded-md hover:bg-[#06D889] hover:text-black transition-all duration-300">
                  Get A Quote
                </button>
              </div>
              <div className=" hidden lg:block">
                <div className="flex items-center gap-1">
                  <FaBlenderPhone className="text-gray-400" />
                  <p className="text-sm text-white text-[0.6rem]">
                    For Client Support :
                  </p>
                </div>
                <Link
                  href="#"
                  className="text-white ml-5 font-semibold hover:text-[#06D889] transition-all duration-200"
                >
                   9296429246
                </Link>
              </div>
            </div>

            <div className="mr-4 mt-2 hidden lg:block">{navList}</div>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
  );
}
