import React from "react";
import Link from "next/link";
import Image from "next/image";
import service_img from "../img/img_01.webp";
import service_img2 from "../img/service_img.webp";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaAward } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

function Service() {
  return (
    <section>
      <div className="w-full bg-white py-10">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="flex flex-col xl:flex-row xl:gap-10">
            <div className="flex items-center -space-x-10">
              <div className="flex items-center -space-x-40 md:-space-x-60">
                <Image
                  src={service_img}
                  alt="img"
                  height={500}
                  width={600}
                  className="md:w-[65rem]"
                />
                <p className="text-2xl md:text-4xl font-bold text-white z-[3]">
                  Why Invite?
                </p>
              </div>
              <p className="h-[9rem] w-[6rem] bg-gradient z-[2]"></p>
            </div>
            <div className=" py-10 flex flex-col gap-6 md:flex-row md:gap-5 md:items-center xl:flex-col ">
              <div className="">
                <div className=" flex items-center gap-3">
                  <HiOutlineLightBulb className="text-[5.5rem] text-[#5858FE] p-1" />
                  <p className="text-3xl font-semibold text-gradient">
                    Creative ideas
                  </p>
                </div>
                <p className="pt-2 px-4 text-xl ">
                  Put your systems management in the hands of our professionals
                </p>
              </div>
              <div className="">
                <div className=" flex items-center gap-3">
                  <FaAward className="p-1 text-[5.1rem] text-[#5858FE]" />
                  <p className="text-3xl font-semibold text-gradient">
                    Best Performer
                  </p>
                </div>
                <p className="pt-2 px-4  text-xl">
                  Put your systems management in the hands of our professionals
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 md:flex-row md:gap-8 md:items-center">
            <div className="px-8 md:px-0 xl:ml-8">
              <h3 className="text-4xl xl:text-5xl font-semibold py-5 ">
                One stop IT solution
              </h3>
              <p className="text-md md:text-xl xl:text-2xl ml-6 md:ml-0 md:py-2 ">
                We’ve grown up with the internet revolution, and we know how to
                deliver on its promise of improved business efficiency. We work
                throughout the London and the southeast.
              </p>
              <div className="py-5 flex justify-start">
                <Link
                  href={"#"}
                  className="text-white py-4 px-8 bg-gradient rounded-full flex items-center justify-center gap-4 "
                >
                  <p className="text-xl">Reviews</p>
                  <BsArrowUpRight className="text-white text-[1.2rem] -mt-2 " />
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={service_img2}
                alt="service_img"
                height={500}
                width={500}
                className=" md:w-[100rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
