import React from "react";
import Link from "next/link";
import Image from "next/image";
import tikmark from "../../img/offer/tikmark.png";
import star from "../../img/offer/star.png";
import march from "../../img/offer/march.png";
import nonmark from "../../img/offer/non_icon.svg";
import icon from "../../img/offer/icon.png";

export default function OfferHero() {
  return (
    <section>
      <div className="offer_bg ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6 pt-20">
            <div>
              <Link href={"#"}>
                <Image src={star} alt="stars" />
              </Link>
            </div>
            <h1 className="text-[80px] font-semibold text-white leading-[86px] text-center -mt-3">
              Get a website built <br /> for you in 7 days
            </h1>
            <div className="flex items-center gap-5 flex-wrap justify-center mt-3">
              <div className="flex items-center gap-2">
                <Image src={tikmark} alt="tikmark" />
                <p className="text-white text-[20px] font-normal">Domain</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tikmark} alt="tikmark" />
                <p className="text-white text-[20px] font-normal">Email</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tikmark} alt="tikmark" />
                <p className="text-white text-[20px] font-normal">Hosting</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tikmark} alt="tikmark" />
                <p className="text-white text-[20px] font-normal">Security</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tikmark} alt="tikmark" />
                <p className="text-white text-[20px] font-normal">
                  0% Transaction Fees
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <Link
                href={"#"}
                className="text-white text-[22px] font-medium leading-[26px] py-4 px-20 rounded-md bg-[#f23c04] hover:bg-[#E63003]"
              >
                Get 75% off
              </Link>
            </div>
          </div>
          {/* March sale section  */}
          <div className="flex justify-center mt-10">
            <div className="march_border flex items-center justify-between py-4 px-10 lg:px-[6rem]">
              {/* flex start  */}
              <Image src={march} alt="march sale" className="w-80" />
              {/* flex 2  */}
              <div className="flex flex-col items-center">
                <div className=" relative ">
                  <span className=" absolute top-9">
                    <Image src={nonmark} alt="nonmark" />
                  </span>
                  <div className="flex items-center gap-2 text-white">
                    <p className=" font-normal text-[37px]">$</p>
                    <p className="text-[68px] font-normal">500</p>
                  </div>
                </div>
                <p className="text-white font-normal text-[46px] -mt-7">$149</p>
                <p className="text-white font-normal text-[18px] text-center">
                  one-time fee + then <br />
                  only $12.99/month
                </p>
              </div>
              {/* flex 3  */}
              <div className="flex flex-col items-center gap-3">
                <div className="border-dashed border border-white  py-4 px-10 rounded-md">
                  <div className="flex items-center gap-2">
                    <Image src={icon} alt="icons" />
                    <p className=" uppercase text-white font-normal text-[20px] ">
                      sale2024
                    </p>
                  </div>
                </div>
                <p className="text-white font-normal text-[18px]">
                  Use the coupon at checkout
                </p>
                <div className="py-2 px-8 bg-[#08427F] mt-1 rounded-lg">
                  <p className=" uppercase text-white font-semibold text-[18px]">
                    22 coupons left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
