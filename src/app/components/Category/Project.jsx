import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_1 from "../../img/portfolio/print&graph.png";
import project_2 from "../../img/portfolio/haircutt.png"
import { FaArrowRight, FaEye } from "react-icons/fa";

function project() {
  return (
    <section>
      <div className="project-bg w-full py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-semibold text-gradient text-5xl md:text-6xl py-5">
            Project{" "}
          </h1>
          <div className="text-white flex gap-2 items-center justify-center">
            <Link href={"#"} className=" font-semibold">
              Home
            </Link>
            <p className="text-gray-500 cursor-default">/</p>
            <Link href={"#"} className=" font-semibold">
              Projects
            </Link>
          </div>
        </div>
      </div>
      {/* ================================ */}
      <div className="bg-[#15171cfa] py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0 lg:grid-cols-6 lg:gap-0 lg:items-center lg:justify-items-center">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={93}
                viewBox="0 0 100 93"
              >
                <g data-name="Group 742" transform="translate(-1079.085 -243)">
                  <line
                    data-name="Line 51"
                    x2={32}
                    transform="translate(1092.085 249)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <line
                    data-name="Line 52"
                    x2={31}
                    transform="translate(1136.085 249)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <circle
                    data-name="Ellipse 53"
                    cx={5}
                    cy={5}
                    r={5}
                    transform="translate(1082.085 244)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <ellipse
                    data-name="Ellipse 54"
                    cx="5.5"
                    cy={5}
                    rx="5.5"
                    ry={5}
                    transform="translate(1167.085 244)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <g
                    data-name="Group 740"
                    transform="translate(1080.085 287.75)"
                  >
                    <path
                      data-name="Path 725"
                      d="M1085.66,344h-5.575v10.5h10.5V344h-4.925"
                      transform="translate(-1080.085 -344)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      data-name="Path 726"
                      d="M1285.01,344h-4.925v10.5h10.5V344h-5.575"
                      transform="translate(-1192.585 -344)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </g>
                  <g data-name="Group 741" transform="translate(1085.66 244)">
                    <path
                      data-name="Path 727"
                      d="M1131,256.8a43.738,43.738,0,0,0-38.175,38.15"
                      transform="translate(-1092.827 -251.2)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      data-name="Path 728"
                      d="M1242.26,294.95a43.738,43.738,0,0,0-38.175-38.15"
                      transform="translate(-1155.41 -251.2)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      data-name="Path 729"
                      d="M1180.085,256.8v4.9h10.5v-4.9"
                      transform="translate(-1141.91 -251.2)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      data-name="Path 730"
                      d="M1180.085,249.6V244h10.5v5.6"
                      transform="translate(-1141.91 -244)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </g>
                  <line
                    data-name="Line 53"
                    x2={10}
                    transform="translate(1124.085 267)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <line
                    data-name="Line 54"
                    y2={22}
                    transform="translate(1129.085 267)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    data-name="Path 731"
                    d="M1185.335,348a5.25,5.25,0,1,1-5.25,5.25"
                    transform="translate(-56.25 -58.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    data-name="Path 732"
                    d="M1209.335,341.5l7-17.5s-12.25-17.5-12.25-28"
                    transform="translate(-69.75 -29.25)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    data-name="Path 733"
                    d="M1159.085,341.5l-7-17.5s12.25-17.5,12.25-28"
                    transform="translate(-40.5 -29.25)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    data-name="Path 734"
                    d="M1169.585,412.75h17.5V404h-35v8.75h5.25V425"
                    transform="translate(-40.5 -90)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <line
                    data-name="Line 55"
                    y2={12}
                    transform="translate(1143.085 323)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </g>
              </svg>
            </div>
            <div className="md:col-span-2 md:-ml-10 lg:ml-0 lg:col-span-3">
              <h2 className="text-gradient font-semibold text-5xl lg:text-[3.5rem]">
                Our Best Innovative & Creative Work{" "}
              </h2>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
              <p className="text-[#ffffff8c] leading-tight text-sm md:text-[1rem] md:pt-4">
                Diam donec adipiscing tristique risus nec feugiat in fermentum.
                Porttitor leo a diam sollicitudin tempor id eu nisl nunc.
                Rhoncus mattis rhoncus urna neque viverra justo unc sodales ut.
              </p>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:py-20">
            <div className="relative group ">
              <Image
                src={project_1}
                alt="Project_1"
                className="hover:brightness-75 transition-all duration-300"
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-start px-5 items-end bg-[#15171ce1]">
                <div className="py-5">
                  <h3 className="font-semibold text-gradient text-xl">
                    Business Web
                  </h3>
                  <p className="text-sm leading-tight text-white">
                    A erat nam at lectus. Accumsan tortor posuere. Etiam erat
                    velit scelerisque in dictum non consectetur.
                  </p>
                  <div className="flex items-center gap-5 pt-4">
                    <Link
                      href={"../../Project/Project-info"}
                      target="_blank"
                      className=" px-3 py-1 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <p className="text-sm">Read more</p>
                      <FaArrowRight className="text-sm mt-[2px]" />
                    </Link>
                    <Link
                      href={"https://nprintandgraph.com/"}
                      target="_blank"
                      className=" px-3 py-1 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <FaEye className="text-sm mt-[2px]" />
                      <p className="text-sm">Live Preview</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group ">
              <Image
                src={project_2}
                alt="Project_2"
                className="hover:brightness-75 transition-all duration-300"
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-start px-5 items-end bg-[#15171ce1]">
                <div className="py-5">
                  <h3 className="font-semibold text-gradient text-xl">
                    Business Web
                  </h3>
                  <p className="text-sm leading-tight text-white">
                    A erat nam at lectus. Accumsan tortor posuere. Etiam erat
                    velit scelerisque in dictum non consectetur.
                  </p>
                  <div className="flex items-center gap-5 pt-4">
                    <Link
                      href={"../../Project/Project-info"}
                      target="_blank"
                      className=" px-3 py-1 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <p className="text-sm">Read more</p>
                      <FaArrowRight className="text-sm mt-[2px]" />
                    </Link>
                    <Link
                      href={"https://nprintandgraph.com/"}
                      target="_blank"
                      className=" px-3 py-1 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <FaEye className="text-sm mt-[2px]" />
                      <p className="text-sm">Live Preview</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative group ">
              <Image
                src={project_1}
                alt="Project_1"
                className="hover:brightness-75 transition-all duration-300"
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-start  px-5 items-end bg-[#15171ce1] lg:py-10">
                <div className="py-5">
                  <h3 className="font-semibold text-gradient text-xl lg:text-3xl">
                    Business Web
                  </h3>
                  <p className="text-sm leading-tight text-white">
                    A erat nam at lectus. Accumsan tortor posuere. Etiam erat
                    velit scelerisque in dictum non consectetur.
                  </p>
                  <div className="flex items-center gap-5 pt-4 lg:pt-6">
                    <Link
                      href={"../../Project/Project-info"}
                      target="_blank"
                      className=" px-3 py-1 lg:px-5 lg:py-2 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <p className="text-sm">Read more</p>
                      <FaArrowRight className="text-sm mt-[2px]" />
                    </Link>
                    <Link
                      href={"https://nprintandgraph.com/"}
                      target="_blank"
                      className=" px-3 py-1 lg:px-5 lg:py-2 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <FaEye className="text-sm mt-[2px]" />
                      <p className="text-sm">Live Preview</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative group ">
              <Image
                src={project_2}
                alt="Project_1"
                className="hover:brightness-75 transition-all duration-300"
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-start  px-5 items-end bg-[#15171ce1] lg:py-10">
                <div className="py-5">
                  <h3 className="font-semibold text-gradient text-xl lg:text-3xl">
                    Business Web
                  </h3>
                  <p className="text-sm leading-tight text-white">
                    A erat nam at lectus. Accumsan tortor posuere. Etiam erat
                    velit scelerisque in dictum non consectetur.
                  </p>
                  <div className="flex items-center gap-5 pt-4 lg:pt-6">
                    <Link
                      href={"../../Project/Project-info"}
                      target="_blank"
                      className=" px-3 py-1 lg:px-5 lg:py-2 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <p className="text-sm">Read more</p>
                      <FaArrowRight className="text-sm mt-[2px]" />
                    </Link>
                    <Link
                      href={"https://nprintandgraph.com/"}
                      target="_blank"
                      className=" px-3 py-1 lg:px-5 lg:py-2 text-white bg-gradient rounded-full flex items-center gap-1"
                    >
                      <FaEye className="text-sm mt-[2px]" />
                      <p className="text-sm">Live Preview</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default project;
