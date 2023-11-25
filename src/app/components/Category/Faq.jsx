"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ_part_img from "../../img/faq-acq-img.webp";
import { FaAngleDoubleRight } from "react-icons/fa";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function FAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section>
      {/* Hero section started */}
      <div className="w-full faq-hero-bg">
        <div className="container mx-auto">
          <div className="py-36">
            <h1 className="font-bold text-[6.125rem] text-white text-center">
              Faq
            </h1>

            <div className="max-w-[13.5rem] mx-auto flex justify-center">
              <div className="border rounded-md p-3">
                <ul className="flex gap-5">
                  <li>
                    <Link href={"#"} className="font-bold text-base text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <FaAngleDoubleRight className="text-white" />
                  </li>
                  <li>
                    <span className="font-bold text-base text-white">Faq</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero section ended */}

      {/* Accordion section started */}
      <div className="py-28">
        <div className="container mx-auto">
          {/* Titles part */}
          <div className="text-center">
            <h4 className="text-bg font-semibold text-base">
              WELCOME CREATIVE AGENCY
            </h4>

            <h2 className="font-bold leading-[3.75rem] text-[3.125rem]">
              Frequently Asked any Questions
            </h2>
          </div>

          {/* Image & Accordion part */}
          <div className="w-full flex">
            <div className="">
              <Image src={FAQ_part_img} alt="FAQ Image" className="" />
            </div>

            <div className="w-1/2">
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* Accordion section ended */}
    </section>
  );
}

export default FAQ;
