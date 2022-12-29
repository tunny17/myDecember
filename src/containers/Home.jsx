import React, { useState, useEffect, useRef } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";

import "../styles/home.scss";
import useLocoScroll from "../hooks/useLocoScroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />

      {preloader ? (
        <div  className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de janeiro</h2>
        </div>
      ) : (
        <div className="main-container" id="main-container" 
          
          
          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
