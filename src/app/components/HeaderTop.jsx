import React from "react";
import Link from "next/link";
import {
  FaRegMap,
  FaRegPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaPhone,
} from "react-icons/fa";

function HeaderTop() {
  return (
    <section id="headertop">
      <div className="w-full bg-[#1355ff] py-4 hidden xl:block">
        <div className=" container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaRegMap className="text-white text-[1.1rem]" />
              <p className="text-white">
                102 Ave Ozone Park , queens, New york , NY 11416
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <ul className="flex items-center text-white gap-1">
                  <li>
                    <Link href={"#"}>Live Chat</Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href={"#"}>Support</Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href={"#"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Link
                  target="_blank"
                  href={`https://www.facebook.com/delwarit`}
                >
                  <FaFacebookF className="text-xl  cursor-pointer" />
                </Link>
                <Link
                  target="_blank"
                  href={`https://www.instagram.com/delwarit/`}
                >
                  <FaInstagram className="text-xl  cursor-pointer" />
                </Link>

                <Link
                  target="_blank"
                  href={`https://www.pinterest.com/delwarit/`}
                >
                  <FaPinterestP className="text-xl  cursor-pointer" />
                </Link>

                <Link
                  target="_blank"
                  href={`https://www.linkedin.com/company/delwarit`}
                >
                  <FaLinkedin className="text-xl  cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTop;
