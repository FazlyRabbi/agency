import React from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

function Footer_top() {
  return (
    <section>
      <div className="bg-[#F9F9F9] w-full py-10">
        <div className="container mx-auto px-4">
          <div className="text-center py-4">
            <p className="text-[#5858FE] text-2xl md:text-3xl font-semibold">
              Get in touch any time
            </p>
            <h3 className="text-[#061B2E] font-semibold text-4xl md:text-5xl xl:text-6xl xl:px-28 py-4">
              Get Started with us for grow Your business!
            </h3>
            <p className="text-xl xl:text-2xl xl:px-28 text-[#575E79]">
              We understand small businesses come in all different shapes and
              sizes, made up of people from a range of backgrounds.
            </p>
            <div className="py-10 flex justify-center">
              <Link
                href={"#"}
                className="text-white py-4 px-8 bg-gradient rounded-full flex items-center justify-center gap-4 "
              >
                <p className="text-xl">Reviews</p>
                <BsArrowUpRight className="text-white text-[1.2rem] -mt-2 " />
              </Link>
            </div>
          </div>
        </div>
        <div className="-mt-56 md:-mt-40 xl:-mt-60">
          <div className="footer_top_bg_img w-full h-[30rem] xl:h-[50rem]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="pt-10 md:pb-28 xl:pb-36 grid grid-cols-1 space-y-4 md:grid-cols-2 md:gap-5 items-center xl:grid-cols-4 xl:space-x-5 xl:gap-0">
            <div>
              <h3 className="text-4xl md:text-5xl text-[#061B2E] font-semibold">
                +271.05%
              </h3>
              <ul className="py-2 md:py-3 space-y-1">
                <li className="text-sm md:text-xl text-[#8890AF]">
                  increase in top 3 positions
                </li>
                <li className="text-sm md:text-xl text-[#8890AF]">
                  all around the world
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl text-[#061B2E] font-semibold">
                2,300,00+
              </h3>
              <ul className="py-2 md:py-3 space-y-1">
                <li className="text-sm md:text-xl text-[#8890AF]">
                  increase in top 3 positions
                </li>
                <li className="text-sm md:text-xl text-[#8890AF]">
                  all around the world
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl text-[#061B2E] font-semibold">
                4.5
              </h3>
              <ul className="py-2 md:py-3 space-y-1">
                <li className="text-sm md:text-xl text-[#8890AF]">
                  increase in top 3 positions
                </li>
                <li className="text-sm md:text-xl text-[#8890AF]">
                  all around the world
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl text-[#061B2E] font-semibold">
                +274.77%
              </h3>
              <ul className="py-2 md:py-3 space-y-1">
                <li className="text-sm md:text-xl text-[#8890AF]">
                  increase in top 3 positions
                </li>
                <li className="text-sm md:text-xl text-[#8890AF]">
                  all around the world
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer_top;
