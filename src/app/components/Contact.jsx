import React from "react";
import Image from "next/image";
import Link from "next/link";
import contact_img from "../img/image-ct.webp";
import { FaRegPaperPlane } from "react-icons/fa";


function Contact() {
  return (
    <section>
      <div className="bg-white py-20 w-full">
        <div className="container mx-auto px-4">
          <p className="text-2xl text-[#586EFC] font-semibold">Get in touch!</p>
          <div className="flex flex-col space-y-10 xl:flex-row xl:justify-between">
            <div>
              <h3 className="text-4xl font-semibold py-4">
                It’s very easy to contact!
              </h3>
              <div className="pt-5 flex flex-col space-y-6 xl:flex-row xl:gap-10">
                <input
                  type="name"
                  placeholder="Your Name"
                  className="text-black border-b-2 py-2 px-2 text-xl w-full placeholder-black focus:outline-none focus:border-[#F72750] transition duration-300 "
                />
                <input
                  type="address"
                  placeholder="Web Address"
                  className="text-black border-b-2 py-2 px-2 text-xl w-full placeholder-black  focus:outline-none focus:border-[#F72750] transition duration-300 "
                />
              </div>
              <div className="pt-6 space-y-6 flex flex-col">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="text-black border-b-2 py-2 px-2 text-xl placeholder-black  focus:outline-none focus:border-[#F72750] transition duration-300"
                />
                <textarea
                  name="text"
                  rows="7"
                  placeholder="Type your message..."
                  className="text-black border-b-2 py-2 px-2 text-xl placeholder-black  focus:outline-none focus:border-[#F72750] transition duration-300"
                ></textarea>
              </div>
              <div className="py-10 flex justify-center md:justify-start">
              <Link
                href={"#"}
                className="text-white py-4 px-8 bg-gradient rounded-full flex items-center gap-4 "
              >
                <p className="text-xl">Send Message Now</p>
                <FaRegPaperPlane className="text-white text-[1.2rem] " />
              </Link>
            </div>
            </div>
            <div>
            <Image
               src={contact_img} 
               alt="contact_img"
               className="" 
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
