import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.svg";
import footer_img_1 from "../img/footer_img_1.webp";
import footer_img_2 from "../img/footer_img_2.webp";
import footer_img_3 from "../img/footer_img_3.webp";
import footer_img_4 from "../img/footer_img_4.webp";
import footer_img_5 from "../img/footer_img_5.webp";
import footer_img_6 from "../img/footer_img_6.webp";
import app_btn from "../img/app-btn1.webp";
import {
  FaRegPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhone,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <section>
      <div className="w-full py-16 bg-[#030128]">
        <div className="container mx-auto px-4">
          {/* play store section  */}
          <div className="pb-16 md:-mt-40 xl:-mt-48">
            <div className="footer_bg_img w-full py-10 rounded-xl">
              <div className="px-8">
                <h1 className="py-10 text-center text-white text-[1.9rem] md:text-[2.2rem] font-bold ">
                  Download Our app to make marketing easy
                </h1>
                <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                  <div className="flex justify-center">
                    <Image src={app_btn} alt="app" className="cursor-pointer" />
                  </div>
                  <div className="flex justify-center">
                    <Image src={app_btn} alt="app" className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================== */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:space-y-5 xl:grid-cols-4 ">
            {/* grid 1 start */}
            <div className="xl:mt-5">
              <Image src={logo} alt="logo" />

              <p className="text-sm text-[#90A4A4] py-4">
                We work with a passion of taking challenges and creating new
                ones in advertising sector.
              </p>
              <div className="py-5">
                <Link
                  href={"#"}
                  className="text-white py-4 px-9 bg-gradient rounded-sm"
                >
                  About Us
                </Link>
              </div>
            </div>
            {/* grid 2 start */}
            <div>
              <h3 className="text-white text-2xl font-semibold">Newsletter</h3>
              <p className="h-[3px] w-[40px] bg-[#5858FE] mt-1"></p>
              <p className="text-sm text-[#90A4A4] py-4">
                Subscribe our newsletter to get our latest update & news
              </p>
              <div className="py-2">
                <div className="flex items-center">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      className="bg-black py-3 px-10 text-white w-[19rem] xl:w-[14rem] focus:outline-none"
                    />
                  </div>
                  <button type="button" className="bg-gradient p-4">
                    <FaRegPaperPlane className="text-white " />
                  </button>
                </div>
                <div className="flex items-center justify-start gap-5 pt-5 ">
                  <FaFacebookF className="text-[#494949] text-xl hover:text-[#00BFE6] cursor-pointer" />
                  <FaInstagram className="text-[#494949] text-xl hover:text-[#00BFE6] cursor-pointer" />
                  <FaTwitter className="text-[#494949] text-xl hover:text-[#00BFE6] cursor-pointer" />
                  <FaPinterestP className="text-[#494949] text-xl hover:text-[#00BFE6] cursor-pointer" />
                </div>
              </div>
            </div>
            {/* grid 3 start */}
            <div className="xl:ml-10">
              <h3 className="text-white text-2xl font-semibold">Contact Us</h3>
              <p className="h-[3px] w-[40px] bg-[#5858FE] mt-1"></p>
              <p className="text-sm text-[#90A4A4] py-4"></p>
              <div className="">
                <MdLocationOn className="text-2xl text-[#5858FE]" />
                <p className="mt-2 text-sm text-[#B2B1BC]">
                  30 Commercial Road
                </p>
                <p className="text-sm text-[#B2B1BC]">Fratton, Australia</p>
              </div>
              <div className="py-4">
                <FaPhone className="text-xl text-[#5858FE]" />
                <p className="mt-3 text-sm text-[#B2B1BC]">1-888-452-1505</p>
              </div>
              <p className=" text-white font-semibold">Open Hours:</p>
              <p className="mt-2 text-sm text-[#90A4A4]">
                Mon - Sat: 8 am - 5 pm,
              </p>
              <p className="text-sm text-[#90A4A4]">sunday: CLOSED</p>
            </div>
            {/* grid 4 start */}
            <div>
              <h3 className="text-white text-2xl font-semibold">Gallery</h3>
              <p className="h-[3px] w-[40px] bg-[#5858FE] mt-1"></p>

              <div className="py-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-2 ">
                <div className="flex justify-center">
                  <Image src={footer_img_1} alt="footer_img" />
                </div>

                <div className="flex justify-center">
                  <Image src={footer_img_2} alt="footer_img" />
                </div>

                <div className="flex justify-center">
                  <Image src={footer_img_3} alt="footer_img" />
                </div>

                <div className="flex justify-center">
                  <Image src={footer_img_4} alt="footer_img" />
                </div>

                <div className="flex justify-center">
                  <Image src={footer_img_5} alt="footer_img" />
                </div>
                <div className="flex justify-center">
                  <Image src={footer_img_6} alt="footer_img" />
                </div>
              </div>
            </div>
          </div>
          {/* ============================================= */}
          <div className="mt-20 w-full h-[2px] bg-[#02071E]">
            <p className="text-white text-center pt-6 ">
              © 2023 Invite - IT Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
