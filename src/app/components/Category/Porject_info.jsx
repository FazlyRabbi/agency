import React from "react";
import Link from "next/link";
import Image from "next/image";
import img_1 from "../../img/portfolio/haircutt.png";
import img_2 from "../../img/portfolio/print&graph.png";
import project_info_1 from "../../img/project_info_img-1.png";
import project_info_2 from "../../img/project_info_img-2.png";
import project_info_3 from "../../img/project_info_img-3.png";
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
      <div className="project_info_bg py-20 md:py-40 w-full">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white font-semibold text-5xl">
            Business Web
          </h1>
        </div>
      </div>
      {/* ================================ */}
      <div className="bg-[#15171cfa] py-20 w-full md:pb-40 lg:pb-48">
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
              <h1 className="text-4xl font-bold text-gradient">
                Description :
              </h1>
              <p className="text-[#606164] font-semibold leading-tight">
                Aliquam erat volutpat. Nulla molestie risus eget nibh mollis
                ultricies. Integer porttitor vehicula nisi, sit met volutpat
                erat tincidunt non. Praesent lacinia commodo massa, ac mattis
                sem facilisis ut.
              </p>
              <h1 className="text-4xl font-bold text-gradient">Client :</h1>
              <p className="text-[#606164] font-semibold leading-tight">
                Maecenas eu vehicula felis Aen ean eleme ntum tortor ac nu
                Aliquam erat volutpat. Nulla molestie risus eget nibh mollis
                ultricies. Integer porttitor vehicula nisi, sit amet volutpat
                erat tincidunt non.
              </p>
              <h1 className="text-4xl font-bold text-gradient">Category :</h1>
              <p className="text-[#606164] font-semibold leading-tight">
                Vehicula maecenas eu felis Aen ean elementum
              </p>
              <h1 className="text-4xl font-bold text-gradient">Share :</h1>
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
          <div className="py-10 lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white hover:text-[#3F81EA] transition-all duration-200">
              <div className=" relative bg-cover bg-no-repeat overflow-hidden">
                <Image
                  src={project_info_1}
                  alt="projectinfoimage"
                  className="w-full bg-cover overflow-hidden ease-in-out hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col md:items-end md:justify-center">
                <h1 className="text-7xl py-4 font-semibold  cursor-default">
                  01
                </h1>
                <Link
                  href={"#"}
                  className="text-white font-semibold text-3xl hover:text-[#3F81EA] transition-all duration-200"
                >
                  Gather The Ideas
                </Link>
                <p className="text-[#A9AAAA] leading-tight py-4 cursor-default md:text-end">
                  Ued vehicula mattis purus. Curabitur at pretium odio, sit amet
                  tincidunt erat. Pellentesque fringilla rutrum nisl, nec
                  vulputate libero mattis vel. Integer bibendum metus ac metus
                  varius, eget vestibulum arcu.
                </p>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-2 
           text-white hover:text-[#3F81EA] transition-all duration-200"
            >
              <div className="md:order-last relative bg-cover bg-no-repeat overflow-hidden">
                <Image
                  src={project_info_2}
                  alt="projectinfoimage"
                  className="w-full bg-cover overflow-hidden ease-in-out hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col md:items-start md:justify-center">
                <h1 className="text-7xl py-4 font-semibold  cursor-default">
                  02
                </h1>
                <Link
                  href={"#"}
                  className="text-white font-semibold text-3xl hover:text-[#3F81EA] transition-all duration-200"
                >
                  Create Modules
                </Link>
                <p className="text-[#A9AAAA] leading-tight py-4 cursor-default">
                  Curabitur at pretium odio, sit amet tincidunt erat.
                  Pellentesque fringilla rutrum nisl, nec vulputate libero
                  mattis vel. Integer bibendum metus ac metus varius, eget
                  vestibulum arcu. Sed vehicula mattis purus.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white hover:text-[#3F81EA] transition-all duration-200">
              <div className="relative bg-cover bg-no-repeat overflow-hidden">
                <Image
                  src={project_info_3}
                  alt="projectinfoimage"
                  className="w-full bg-cover overflow-hidden ease-in-out hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col md:items-end md:justify-center">
                <h1 className="text-7xl py-4 font-semibold  cursor-default">
                  03
                </h1>
                <Link
                  href={"#"}
                  className="text-white font-semibold text-3xl hover:text-[#3F81EA] transition-all duration-200"
                >
                  Integrate & Execute
                </Link>
                <p className="text-[#A9AAAA] leading-tight py-4 cursor-default md:text-end">
                  Integer bibendum metus ac metus varius, eget vestibulum arcu.
                  Sed vehicula mattis purus. Curabitur at pretium odio, sit amet
                  tincidunt erat. Pellentesque fringilla rutrum nisl, nec
                  vulputate libero mattis vel.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="py-10 grid gap-5 grid-cols-3">
              <div className=" relative bg-cover bg-no-repeat overflow-hidden">
                <Image
                  src={project_info_1}
                  alt="projectinfoimage"
                  className="w-full bg-cover overflow-hidden ease-in-out hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-white hover:text-[#3F81EA] transition-all duration-200">
                <h1 className="text-7xl py-4 font-semibold  cursor-default">
                  01
                </h1>
                <Link
                  href={"#"}
                  className="text-white font-semibold text-3xl hover:text-[#3F81EA] transition-all duration-200"
                >
                  Create Modules
                </Link>
                <p className="text-[#A9AAAA] text-center leading-tight py-4 cursor-default">
                  Curabitur at pretium odio, sit amet tincidunt erat.
                  Pellentesque fringilla rutrum nisl, nec vulputate libero
                  mattis vel. Integer bibendum metus ac metus varius, eget
                  vestibulum arcu. Sed vehicula mattis purus.
                </p>
              </div>

              <div className=" relative bg-cover bg-no-repeat overflow-hidden">
                <Image
                  src={project_info_2}
                  alt="projectinfoimage"
                  className="w-full bg-cover overflow-hidden ease-in-out hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-white hover:text-[#3F81EA] transition-all duration-200">
                <h1 className="text-7xl py-4 font-semibold  cursor-default">
                  02
                </h1>
                <Link
                  href={"#"}
                  className="text-white font-semibold text-3xl hover:text-[#3F81EA] transition-all duration-200"
                >
                  Gather The Ideas
                </Link>
                <p className="text-[#A9AAAA] text-center leading-tight py-4 cursor-default">
                  Ued vehicula mattis purus. Curabitur at pretium odio, sit amet
                  tincidunt erat. Pellentesque fringilla rutrum nisl, nec
                  vulputate libero mattis vel. Integer bibendum metus ac metus
                  varius, eget vestibulum arcu.
                </p>
              </div>

              <div className="relative bg-cover bg-no-repeat overflow-hidden">
                <Image
                  src={project_info_3}
                  alt="projectinfoimage"
                  className="w-full bg-cover overflow-hidden ease-in-out hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-white hover:text-[#3f81ead7] transition-all duration-200">
                <h1 className="text-7xl py-4 font-semibold  cursor-default">
                  03
                </h1>
                <Link
                  href={"#"}
                  className="text-white font-semibold text-3xl hover:text-[#3F81EA] transition-all duration-200"
                >
                  Integrate & Execute
                </Link>
                <p className="text-[#A9AAAA] leading-tight py-4 cursor-default text-center">
                  Integer bibendum metus ac metus varius, eget vestibulum arcu.
                  Sed vehicula mattis purus. Curabitur at pretium odio, sit amet
                  tincidunt erat. Pellentesque fringilla rutrum nisl, nec
                  vulputate libero mattis vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Porject_info;
