"use client";
import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Footer_top from "./components/Footer_top";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";

// imports components

export default function Home() {
  return (
    <>
      <HeaderTop/>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer_top/>
      <Footer/>
    </>
  );
}
