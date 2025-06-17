import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import NxtwaveLogo from "../assets/nxtwave.png";
import AdityaLogo from "../assets/Aditya-logo.png";
import PRLogo from "../assets/pg-logo.png";
import MplSchool from "../assets/mpl high school.png";
import Sketch from "../assets/sketch.svg";

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-16 px-40 py-10 font-roboto pt-28 pb-28"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-medium">
          My <span className="text-violet-700">Educational</span> Journey
        </h1>
        <img
          src={Sketch}
          alt="sketch"
          className="text4xl w-auto scale-y-[1] mr-14"
        />
      </div>
      <div data-aos="fade-up" className="flex items-center">
        <div className="w-[70%] flex flex-col gap-2">
          <h1 className="text-xl font-medium">
            <span className="text-violet-700">NXTWAVE</span> DISRUPTIVE
            TECHNOLOGIES
          </h1>
          <p>
            Industry Ready Certification in{" "}
            <span className="text-violet-700">MERN Fullstack</span> Development
          </p>
          <p>Duration: 2023-2024</p>
          <p>Grade: A</p>
        </div>
        <div className="w-[30%]">
          <Tilt>
            <img
              src={NxtwaveLogo}
              alt="Nxtwave-Logo"
              className="rounded-md h-40 hover:trasition duration-500 ease-in-out hover:scale-125"
            />
          </Tilt>
        </div>
      </div>
      <hr className="bg-gray-400 h-[2px]" />

      <div data-aos="fade-up" className="flex items-center">
        <div className="w-[50%]">
          <Tilt>
            <img
              src={AdityaLogo}
              alt="Aditya-Logo"
              className="rounded-md h-40 hover:trasition duration-500 ease-in-out hover:scale-125"
            />
          </Tilt>
        </div>
        <div className="w-[40%] flex flex-col items-baseline gap-2">
          <h1 className="text-xl font-medium">
            <span className="text-violet-700">ADITYA</span> DEGREE COLLEGE,
            KAKINADA
          </h1>
          <p>BSc (Bachelor of Science) in Computer Science</p>
          <p>Duration: 2021-2023</p>
          <p>CGPA: 7.09</p>
        </div>
      </div>
      <hr className="bg-gray-400 h-[2px]" />
      <div data-aos="fade-up" className="flex items-center">
        <div className="w-[70%] flex flex-col gap-2">
          <h1 className="text-xl font-medium">
            <span className="text-violet-700">PITHAPUR RAJA'S</span> GOVT JUNIOR
            COLLEGE, KAKINADA
          </h1>
          <p>Intermediate MPC (Maths, Physics, Chemistry)</p>
          <p>Duration: 2018-2020</p>
          <p>CGPA: 6.46</p>
        </div>
        <div className="w-[30%]">
          <Tilt>
            <img
              src={PRLogo}
              alt="PR-Logo"
              className="rounded-md h-40 hover:trasition duration-500 ease-in-out hover:scale-125"
            />
          </Tilt>
        </div>
      </div>
      <hr className="bg-gray-400 h-[2px]" />

      <div data-aos="fade-up" className="flex items-center">
        <div className="w-[50%]">
          <Tilt>
            <img
              src={MplSchool}
              alt="Mpl-School"
              className="rounded-md h-40 hover:trasition duration-500 ease-in-out hover:scale-125"
            />
          </Tilt>
        </div>
        <div className="w-[40%] flex flex-col gap-2">
          <h1 className="text-xl font-medium">
            <span className="text-violet-700">MAHATMAGANDHI</span> MUNICIPLE
            CORP HIGH SCHOOL, KAKINADA
          </h1>
          <p>SSC (Secondary School Of Certificate)</p>
          <p>Duration: 2021-2023</p>
          <p>CGPA: 8.5</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
