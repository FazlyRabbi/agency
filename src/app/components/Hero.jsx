import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import Hero_img from "../img/hero_img.webp";
import Hero_img_small_1 from "../img/hero-2.webp";
import Hero_img_small_2 from "../img/hero-3.webp";

function Hero() {
  return (
    <section> 
      <div className="w-full py-10">
        <div className="container mx-auto px-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-5 xl:gap-4 xl:ml-20">
            {/* hero text section start  */}
            <div className="text-center md:text-start pt-8">
              <h1 className=" text-[3rem] xl:text-[4rem] leading-tight font-semibold text-[#5858FE]">
                U
                <span className="text-[#061B2E] ">
                  se learning technology to deliver.
                </span>

              </h1>
              <p className="text-[#85848E] text-lg pt-5">
                We are Passion Digital, a full-service digital marketing agency
                in Australia.
              </p>
              <div className="pt-10 flex items-center justify-center md:justify-start gap-10 ">
                <Link href={"#"}>
                  <div className="bg-[#C3C3FF] p-5 rounded-full">
                    <FaPlay className="text-[#5858FE]" />
                  </div>
                </Link>
                <div>
                  <Link
                    href={"#"}
                    className="text-white py-4 px-9 bg-gradient rounded-full"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
            {/* hero img section start */}
            <div className="flex items-center justify-center md:justify-normal">
              <div className="py-8 flex justify-center">
                <Image
                  src={Hero_img}
                  alt="hero_image"
                  height={400}
                  width={400}
                  className="md:w-[45rem] xl:w-[60rem] "
                />
              </div>
            </div>
          </div>
          {/* ================ clients section start ===================== */}
          <div className="py-10 px-4">
            <div className=" bg-white py-5 xl:py-8 w-full drop-shadow-3xl rounded-[15px]">
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
                <div className="text-center space-y-3 md:border-r-2 border-gray-400">
                  <p className="text-5xl text-[#061B2E] font-semibold">
                    5
                    <span className="font-normal text-[#5858FE] text-4xl">
                      K+
                    </span>
                  </p>
                  <p className="text-lg ">Happy clients</p>
                </div>
                <div className="text-center space-y-3 xl:border-r-2 border-gray-400">
                  <p className="text-5xl text-[#061B2E] font-semibold">
                    18
                    <span className="font-normal text-[#5858FE] text-4xl">
                      +
                    </span>
                  </p>
                  <p className="text-lg">Awards Winner</p>
                </div>
                <div className="text-center space-y-3 md:border-r-2 border-gray-400">
                  <p className="text-5xl text-[#061B2E] font-semibold">
                    50
                    <span className="font-normal text-[#5858FE] text-4xl">
                      +
                    </span>
                  </p>
                  <p className="text-lg">Brunches</p>
                </div>
                <div className="text-center space-y-3">
                  <p className="text-5xl text-[#061B2E] font-semibold">
                    179
                    <span className="font-normal text-[#5858FE] text-4xl">
                      +
                    </span>
                  </p>
                  <p className="text-lg">Team members</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="bg-white w-full py-4 xl:py-5 shadow-lg rounded-b-[10px]"></div>
            </div>
          </div>
          {/* =============== clients section end ====================== */}
        </div>
      </div>
    </section>
  );
}

export default Hero;