import React from "react";
import Link from "next/link";
import Image from "next/image";
import img_1 from "../../img/portfolio/haircutt.png";
import img_2 from "../../img/portfolio/print&graph.png";
import { Carousel } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

function Porject_info() {
  return (
    <section>
      <div className="project_info_bg py-40 w-full">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white font-semibold text-5xl">
            Business Web
          </h1>
        </div>
      </div>
      {/* ================================ */}
      <div className="bg-[#15171cfa] py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
            <div className="lg:order-last">
              <Carousel>
                <Image
                  src={img_1}
                  alt="img-1"
                  className="w-full brightness-75"
                />
                <Image
                  src={img_2}
                  alt="img-1"
                  className="w-full brightness-75"
                />
                <Image
                  src={img_1}
                  alt="img-1"
                  className="w-full brightness-75"
                />
                <Image
                  src={img_2}
                  alt="img-1"
                  className="w-full brightness-75"
                />
              </Carousel>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold text-white">Description :</h1>
              <p className="text-[#606164] font-semibold leading-tight">
                Aliquam erat volutpat. Nulla molestie risus eget nibh mollis
                ultricies. Integer porttitor vehicula nisi, sit met volutpat
                erat tincidunt non. Praesent lacinia commodo massa, ac mattis
                sem facilisis ut.
              </p>
              <h1 className="text-4xl font-bold text-white">Client :</h1>
              <p className="text-[#606164] font-semibold leading-tight">
                Maecenas eu vehicula felis Aen ean eleme ntum tortor ac nu
                Aliquam erat volutpat. Nulla molestie risus eget nibh mollis
                ultricies. Integer porttitor vehicula nisi, sit amet volutpat
                erat tincidunt non.
              </p>
              <h1 className="text-4xl font-bold text-white">Category :</h1>
              <p className="text-[#606164] font-semibold leading-tight">
                Vehicula maecenas eu felis Aen ean elementum
              </p>
              <h1 className="text-4xl font-bold text-white">Share :</h1>
              <div className="flex items-center gap-4">
                <Link href={"#"}>
                  <FaFacebookF className="text-lg text-[#606164] hover:text-white transition-all duration-200" />
                </Link>
                <Link href={"#"}>
                  <FaInstagram className="text-lg text-[#606164] hover:text-white transition-all duration-200" />
                </Link>
                <Link href={"#"}>
                  <FaTwitter className="text-lg text-[#606164] hover:text-white transition-all duration-200" />
                </Link>
                <Link href={"#"}>
                  <FaPinterestP className="text-lg text-[#606164] hover:text-white transition-all duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Porject_info;
