import { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImage from "../assets/hero-illustration.svg";
import BrandSlider from "../components/BrandSlider";


import WhyChooseUs from "../components/WhyChooseUs";
import OurWork from "../components/OurWork";
import Testimonials from "../components/Testimonials";

import {
  FaChartLine,
  FaRobot,
  FaBullhorn,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    const typed = new Typed("#typed-text", {
      strings: [
        "Intelligent Ad Targeting",
        "Conversion-Driven Design",
        "Real-Time Analytics",
        "Growth Hacking Tactics",
        "AI-Fueled Optimization",
      ],
      typeSpeed: 55,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-40 rounded-full top-[-80px] left-[-80px] animate-blob blur-3xl"></div>
        <div className="absolute w-[200px] h-[200px] bg-pink-300 opacity-30 rounded-full top-[60%] right-[-100px] animate-blob animation-delay-2000 blur-3xl"></div>
        <div className="absolute w-[200px] h-[200px] bg-blue-300 opacity-30 rounded-full bottom-[-80px] left-[40%] animate-blob animation-delay-4000 blur-3xl"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <canvas id="particle-canvas" className="w-full h-full"></canvas>
        </div>

        <div className="relative z-10 max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              🎯 We Craft <span className="text-purple-600">Digital Campaigns</span><br />
              That <span className="text-blue-600">Convert</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              <span id="typed-text" className="font-medium text-gray-800"></span>
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:opacity-90 transition inline-flex items-center gap-2"
            >
              🚀 Get a Free Strategy Call
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center relative" data-aos="fade-left">
            <img
              src={heroImage}
              alt="Digital Marketing Illustration"
              className="w-64 sm:w-72 md:w-96 lg:w-[450px] animate-float z-10"
            />
            <FaChartLine className="text-green-600 text-2xl sm:text-3xl absolute top-0 left-[60%] animate-float-slow hidden sm:block" />
            <FaRobot className="text-blue-500 text-2xl sm:text-3xl absolute top-[40%] left-[-20px] animate-float-slow2 hidden sm:block" />
            <FaBullhorn className="text-pink-500 text-2xl sm:text-3xl absolute bottom-[-10px] right-[40%] animate-float-slow3 hidden sm:block" />
            <FaUsers className="text-yellow-500 text-2xl sm:text-3xl absolute bottom-[50px] right-[-20px] animate-float-slow hidden sm:block" />
            <FaMobileAlt className="text-blue-700 text-2xl sm:text-3xl absolute top-[30%] right-[-10px] animate-float-slow2 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Sections */}
      <BrandSlider />
      <WhyChooseUs />
      <OurWork />
      <Testimonials />
    </>
  );
}
