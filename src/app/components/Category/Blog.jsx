import React from "react";
import Link from "next/link";
import Image from "next/image";
import blog_img_1 from "../../img/blog-1.jpg";
import blog_img_2 from "../../img/blog-2.jpg";
import blog_small_img_1 from "../../img/blog_small_img-1.jpg";
import blog_small_img_2 from "../../img/blog_small_img-2.png";
import blog_small_img_3 from "../../img/blog_small_img-3.png";
import blog_gallery_1 from "../../img/Blog-gallery-1.jpg";
import blog_gallery_2 from "../../img/Blog-gallery-2.jpg";
import blog_gallery_3 from "../../img/Blog-gallery-3.jpg";
import blog_gallery_4 from "../../img/Blog-gallery-4.jpg";
import blog_gallery_5 from "../../img/Blog-gallery-5.jpg";
import blog_gallery_6 from "../../img/Blog-gallery-6.jpg";
import blog_tags from "../../img/blog-tags.jpg";

function Blog() {
  return (
    <section>
      <div className="project_info_bg py-20 md:py-40 w-full">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-semibold text-gradient text-5xl md:text-6xl py-5">
            Blog
          </h1>
          <div className="text-white flex gap-2 items-center justify-center">
            <Link href={"#"} className=" font-semibold">
              Home
            </Link>
            <p className="text-gray-500 cursor-default">/</p>
            <Link href={"#"} className=" font-semibold">
              Blog
            </Link>
          </div>
        </div>
      </div>
      {/* ====================================== */}
      <div className="bg-[#15171cfa] py-20 w-full md:pb-40 lg:pb-48">
        <div className="container mx-auto px-4">
          <div className="py-10 grid grid-cols-1 gap-10 lg:grid-cols-3 ">
            <div className="lg:col-span-2 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-10">
              <div>
                <div className="bg-cover bg-no-repeat overflow-hidden relative">
                  <Image
                    src={blog_img_1}
                    alt="blog-1"
                    className="w-full bg-cover overflow-auto ease-in-out hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className=" text-[#3F81EA] font-semibold text-sm py-2">
                  JUNE 22, 2023
                </p>
                <Link
                  href={"#"}
                  className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-2xl md:text-3xl"
                >
                  Creative & smart business ideas
                </Link>
                <p className="text-[#A9AAAA] text-sm font-semibold py-2 leading-tight md:mr-40 lg:mr-0">
                  Phasellus faucibus scelerisque eleifend donec. Sit amet
                  aliquam id diam. Scelerisque varius morbi enim...
                </p>
                <div className="flex items-center">
                  <p className="h-[2px] w-[20px] bg-[#A9AAAA]"></p>
                  <p className="h-[10px] w-[10px] bg-gradient rounded-full"></p>
                  <Link
                    href={"#"}
                    className="px-1 py-1 text-white text-gradient rounded-full flex items-center gap-1"
                  >
                    <p className="text-lg font-semibold">Read more</p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="bg-cover bg-no-repeat overflow-hidden relative">
                  <Image
                    src={blog_img_2}
                    alt="blog-1"
                    className="w-full bg-cover overflow-auto ease-in-out hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className="text-[#3F81EA] font-semibold text-sm py-2">
                  JUNE 22, 2023
                </p>
                <Link
                  href={"#"}
                  className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-2xl md:text-3xl"
                >
                  Gaaga’s Email Marketing Campaigns
                </Link>
                <p className="text-[#A9AAAA] text-sm font-semibold py-2 leading-tight md:mr-40">
                  Phasellus faucibus scelerisque eleifend donec. Sit amet
                  aliquam id diam. Scelerisque varius morbi enim...
                </p>
                <div className="flex items-center">
                  <p className="h-[2px] w-[20px] bg-[#A9AAAA]"></p>
                  <p className="h-[10px] w-[10px] bg-gradient rounded-full"></p>
                  <Link
                    href={"#"}
                    className="px-1 py-1 text-white text-gradient rounded-full flex items-center gap-1"
                  >
                    <p className="text-lg font-semibold">Read more</p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="bg-cover bg-no-repeat overflow-hidden relative">
                  <Image
                    src={blog_img_2}
                    alt="blog-1"
                    className="w-full bg-cover overflow-auto ease-in-out hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className="text-[#3F81EA] font-semibold text-sm py-2">
                  JUNE 22, 2023
                </p>
                <Link
                  href={"#"}
                  className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-2xl md:text-3xl"
                >
                  Creative & smart business ideas
                </Link>
                <p className="text-[#A9AAAA] text-sm font-semibold py-2 leading-tight md:mr-40">
                  Phasellus faucibus scelerisque eleifend donec. Sit amet
                  aliquam id diam. Scelerisque varius morbi enim...
                </p>
                <div className="flex items-center">
                  <p className="h-[2px] w-[20px] bg-[#A9AAAA]"></p>
                  <p className="h-[10px] w-[10px] bg-gradient rounded-full"></p>
                  <Link
                    href={"#"}
                    className="px-1 py-1 text-white text-gradient rounded-full flex items-center gap-1"
                  >
                    <p className="text-lg font-semibold">Read more</p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="bg-cover bg-no-repeat overflow-hidden relative">
                  <Image
                    src={blog_img_1}
                    alt="blog-1"
                    className="w-full bg-cover overflow-auto ease-in-out hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className="text-[#3F81EA] font-semibold text-sm py-2">
                  JUNE 22, 2023
                </p>
                <Link
                  href={"#"}
                  className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-2xl md:text-3xl"
                >
                  Gaaga’s Email Marketing Campaigns
                </Link>
                <p className="text-[#A9AAAA] text-sm font-semibold py-2 leading-tight md:mr-40">
                  Phasellus faucibus scelerisque eleifend donec. Sit amet
                  aliquam id diam. Scelerisque varius morbi enim...
                </p>
                <div className="flex items-center">
                  <p className="h-[2px] w-[20px] bg-[#A9AAAA]"></p>
                  <p className="h-[10px] w-[10px] bg-gradient rounded-full"></p>
                  <Link
                    href={"#"}
                    className="px-1 py-1 text-white text-gradient rounded-full flex items-center gap-1"
                  >
                    <p className="text-lg font-semibold">Read more</p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="bg-cover bg-no-repeat overflow-hidden relative">
                  <Image
                    src={blog_img_1}
                    alt="blog-1"
                    className="w-full bg-cover overflow-auto ease-in-out hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className="text-[#3F81EA] font-semibold text-sm py-2">
                  JUNE 22, 2023
                </p>
                <Link
                  href={"#"}
                  className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-2xl md:text-3xl"
                >
                  Creative & smart business ideas
                </Link>
                <p className="text-[#A9AAAA] text-sm font-semibold py-2 leading-tight md:mr-40">
                  Phasellus faucibus scelerisque eleifend donec. Sit amet
                  aliquam id diam. Scelerisque varius morbi enim...
                </p>
                <div className="flex items-center">
                  <p className="h-[2px] w-[20px] bg-[#A9AAAA]"></p>
                  <p className="h-[10px] w-[10px] bg-gradient rounded-full"></p>
                  <Link
                    href={"#"}
                    className="px-1 py-1 text-white text-gradient rounded-full flex items-center gap-1"
                  >
                    <p className="text-lg font-semibold">Read more</p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="bg-cover bg-no-repeat overflow-hidden relative">
                  <Image
                    src={blog_img_2}
                    alt="blog-1"
                    className="w-full bg-cover overflow-auto ease-in-out hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className="text-[#3F81EA] font-semibold text-sm py-2">
                  JUNE 22, 2023
                </p>
                <Link
                  href={"#"}
                  className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-2xl md:text-3xl"
                >
                  Gaaga’s Email Marketing Campaigns
                </Link>
                <p className="text-[#A9AAAA] text-sm font-semibold py-2 leading-tight md:mr-40">
                  Phasellus faucibus scelerisque eleifend donec. Sit amet
                  aliquam id diam. Scelerisque varius morbi enim...
                </p>
                <div className="flex items-center">
                  <p className="h-[2px] w-[20px] bg-[#A9AAAA]"></p>
                  <p className="h-[10px] w-[10px] bg-gradient rounded-full"></p>
                  <Link
                    href={"#"}
                    className="px-1 py-1 text-white text-gradient rounded-full flex items-center gap-1"
                  >
                    <p className="text-lg font-semibold">Read more</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full border-[1px] border-[#32C5FA] py-16 px-5">
              <h2 className="text-white font-bold text-3xl pb-5">
                Recent Post
              </h2>
              <div className="grid grid-cols-1">
                <div className="py-5 border-b-[1px] border-[#2e3138fa]">
                  <div className="flex gap-6">
                    <div>
                      <Image src={blog_small_img_1} alt="blog_small" />
                    </div>
                    <div>
                      <p className=" text-gradient font-semibold">
                        JUN 22, 2023
                      </p>
                      <Link
                        href={"#"}
                        className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-xl md:text-2xl lg:text-lg"
                      >
                        Creative & smart business ideas
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-5 border-b-[1px] border-[#2e3138fa]">
                  <div className="flex gap-6">
                    <div>
                      <Image src={blog_small_img_2} alt="blog_small" />
                    </div>
                    <div>
                      <p className=" text-gradient font-semibold">
                        JUN 22, 2023
                      </p>
                      <Link
                        href={"#"}
                        className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-xl md:text-2xl lg:text-lg"
                      >
                        Gaaga’s Email Marketing Campaigns
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-5 border-b-[1px] border-[#2e3138fa]">
                  <div className="flex gap-6">
                    <div>
                      <Image src={blog_small_img_3} alt="blog_small" />
                    </div>
                    <div>
                      <p className=" text-gradient font-semibold">
                        JUN 22, 2023
                      </p>
                      <Link
                        href={"#"}
                        className="text-white hover:text-[#3F81EA] transition-all duration-300 font-semibold text-xl md:text-2xl lg:text-lg"
                      >
                        History & Future of AI in Marketing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-white font-bold text-3xl py-8">Instagram</h2>
              <div className="grid grid-cols-3 gap-3">
                <Image
                  src={blog_gallery_1}
                  alt="blog_gallery"
                  className="w-full"
                />
                <Image
                  src={blog_gallery_2}
                  alt="blog_gallery"
                  className="w-full"
                />
                <Image
                  src={blog_gallery_3}
                  alt="blog_gallery"
                  className="w-full"
                />
                <Image
                  src={blog_gallery_4}
                  alt="blog_gallery"
                  className="w-full"
                />
                <Image
                  src={blog_gallery_5}
                  alt="blog_gallery"
                  className="w-full"
                />
                <Image
                  src={blog_gallery_6}
                  alt="blog_gallery"
                  className="w-full"
                />
              </div>
              <h2 className="text-white font-bold text-3xl pt-8">Tags</h2>
              <div className="flex items-center gap-5 pt-4 lg:pt-6">
                <Link
                  href={"#"}
                  className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] text-gradient flex items-center gap-1 hover:rotate-3 transition-all duration-300"
                >
                  <p className="text-sm tracking-[1px] uppercase">
                    Digital Marketing
                  </p>
                </Link>
                <Link
                  href={"#"}
                  className=" px-3 py-1 lg:px-5 lg:py-2 text-white border-[1px] border-[#32C5FA] text-gradient flex items-center gap-1 hover:-rotate-3 transition-all duration-300"
                >
                  <p className="text-sm tracking-[1px] uppercase">
                    inspiration
                  </p>
                </Link>
              </div>
              <div className="pt-8">
                <Image src={blog_tags} alt="blog_tags" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
