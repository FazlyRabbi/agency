"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Footer_top from "./components/Footer_top";
import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import Hero from "./components/Hero";
import Service from "./components/Service";

// imports components

export default function Home() {
  return (
    <>
      <HeaderTop/>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Contact/>
      <Footer_top/>
      <Footer/>
    </>
  );
}
