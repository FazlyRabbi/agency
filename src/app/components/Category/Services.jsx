import React from "react";
import Link from "next/link";
import Image from "next/image";
import service_icon_1 from "../../img/service-img/service-1.png";
import service_icon_2 from "../../img/service-img/service-2.png";
import service_icon_3 from "../../img/service-img/service-3.png";
import service_icon_4 from "../../img/service-img/service-4.png";
import service_icon_5 from "../../img/service-img/service-5.png";
import service_icon_6 from "../../img/service-img/service-6.png";
import service_icon_7 from "../../img/service-img/service-7.png";
import service_icon_8 from "../../img/service-img/service-8.png";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  return (
    <section>
      <div className="service_bg w-full py-20 md:py-40">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-semibold text-gradient text-5xl md:text-6xl py-5">
            Services
          </h1>
          <div className="text-white flex gap-2 items-center justify-center">
            <Link href={"#"} className=" font-semibold">
              Home
            </Link>
            <p className="text-gray-500 cursor-default">/</p>
            <Link href={"#"} className=" font-semibold">
              Services
            </Link>
          </div>
        </div>
      </div>
      {/* =========================================== */}
      <div className="bg-[#15171cfa] py-20 w-full md:pb-40 lg:pb-48">
        <div className="container mx-auto px-4">
          <div className="pb-16 space-y-4">
            <h1 className="text-white text-5xl font-semibold lg:text-6xl">
              Our Services
            </h1>
            <h3 className="text-[#ffffff8c] text-3xl lg:pr-40">
              Our Services Range From Initial Design To Deployment Anywhere
              Anytime
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            <div className="border-[1px] border-[#32C5FA] pt-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_1} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">01</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">Web Designing</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] flex
                     hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#32C5FA] py-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_2} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">02</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">UI UX Designing</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] flex
                     hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#32C5FA] py-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_3} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">03</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">Web Marketing</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA]
                     flex hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#32C5FA] py-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_4} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">04</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">Web Application</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] flex
                     hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#32C5FA] py-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_5} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">05</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">Web Application</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] flex
                     hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#32C5FA] py-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_6} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">06</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">Design Writing</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] flex
                     hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#32C5FA] py-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_7} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">07</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">SEO Marketing</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] flex
                     hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#32C5FA] py-10 px-5 hvr-bounce-to-left text-[#ffffff8c] hover:text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={service_icon_8} alt="service-img" />
                </div>
                <p className="h-[2px] w-[150px] bg-gradient "></p>
                <p className="text-5xl font-semibold text-gradient">08</p>
              </div>
              <div className="py-5 space-y-2">
                <h3 className="text-3xl font-semibold">Adobe XD</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur rem doloribus eaque illum earum corrupti unde!
                  Asperiores, alias explicabo quo voluptate eos sint, voluptas
                  possimus, mollitia veniam esse veritatis dolorum?
                </p>
                <div className="pt-5 flex">
                  <Link
                    href={"#"}
                    className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] flex
                     hvr-bounce-to-right items-center gap-1  transition-all duration-300"
                  >
                    <p className="text-sm  uppercase">View More</p>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
