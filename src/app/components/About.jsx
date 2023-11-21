import React from "react";
import Link from "next/link";
import Image from "next/image";
import Avater_img1 from "../img/r01.webp";
import Avater_img2 from "../img/r02.webp";
import Avater_img3 from "../img/r03.webp";
import About_img1 from "../img/about_img.webp";
import About_img2 from "../img/about-img2.webp";
import About_img3 from "../img/about-img3.webp";
import { FaPlay } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

function About() {
  return (
    <section>
      <div className="bg-white w-full pb-10">
        <div className="container mx-auto px-4 xl:px-10 ">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
            <div className="">
              <p className="text-lg text-[#161616] md:text-2xl">
                We are <span className="text-[#9090FC]">Delwar</span>, IT
                solutions agency!
              </p>
              <h2 className="py-5 text-3xl font-bold md:text-4xl xl:text-5xl xl:leading-[60px]">
                Choose The Best IT Service Company in the City.
              </h2>
              <div className="flex flex-col gap-5">
                <div className="py-4">
                  <p className="text-xl md:text-2xl">
                    Want to join with our connection?
                  </p>
                  <p className="text-xl md:text-2xl">
                    <Link href={"#"} className="font-semibold">
                      Contact us
                    </Link>{" "}
                    for details talk.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center -space-x-10">
                    <Image
                      src={Avater_img1}
                      alt="avaterimg"
                      className="z-[3]"
                    />
                    <Image
                      src={Avater_img2}
                      alt="avaterimg"
                      className="z-[2] hover:z-10"
                    />
                    <Image
                      src={Avater_img3}
                      alt="avaterimg"
                      className="z-[1] hover:z-10"
                    />
                  </div>
                  <div>
                    <Link
                      href={"#"}
                      className="flex items-center gap-2 text-lg"
                    >
                      <p className="text-xl">Reviews</p>
                      <HiArrowNarrowRight className="text-[#F84059] text-[1.1rem]" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-5 ">
                <Link href={"#"}>
                  <div className="bg-[#5858FE] p-5 rounded-full  ">
                    <FaPlay className="text-white animate-none text-xl" />
                  </div>
                </Link>
                <div>
                  <Link
                    href={"#"}
                    className="text-gradient text-xl md:text-2xl font-semibold "
                  >
                    How We work?
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -space-x-20">
              <Image
                src={About_img2}
                alt="about_img"
                className="mt-[24rem] md:mt-[35rem]"
              />
              <Image
                src={About_img1}
                alt="about_img"
                className="md:-mt-6 xl:w-[60rem]"
              />
              <Image src={About_img3} alt="about_img" className="-mt-[20rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
