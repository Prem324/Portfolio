import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import ProfilePhoto from "../assets/Prem-Profile.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Coder from "../assets/coder.png";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="font-roboto">
      <div
        data-aos="fade-up"
        className="flex items-center justify-center px-40 py-10 mt-16"
      >
        <div className="w-[50%] flex flex-col gap-6">
          <h1 className="text-4xl pb-4">
            Hi There! <span className="wave">👋🏻</span>
          </h1>
          <h1 className="text-5xl font-semi-bold ">
            I'M
            <span className=" text-violet-700"> PREM KUMAR</span>
          </h1>
          <div className="text-4xl my-6 text-violet-700 pt-6">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Open Source Contributor",
                  "Web Developer",
                  "Freelancer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <Tilt>
            <img
              src={ProfilePhoto}
              alt="prem"
              className="w-[300px] rounded-full hover:shadow-md hover:shadow-sky-600"
            />
          </Tilt>
        </div>
      </div>
      <br />
      <div data-aos="fade-up" className="flex px-36 py-10 mt-32">
        <div className="w-[30%] flex justify-center">
          <img
            src={Coder}
            alt="coder"
            className="hover:trasition duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <div className="w-[70%] flex flex-col gap-6">
          <h1 className="text-4xl font-medium text-center">
            LET ME <span className="text-violet-700">INTRODUCE</span> MYSELF
          </h1>
          <p className="text-xl font-medium">
            I fell in love with programming and have been continuously learning
            and building ever since.
          </p>
          <p className="text-xl font-medium">
            I am fluent in classics like{" "}
            <span className="text-violet-700">Java Script </span> and{" "}
            <span className="text-violet-700">Pyhton</span> and I specialize in
            crafting modern web applications using technologies such as{" "}
            <span className="text-violet-700">React.js, Next.js</span> and{" "}
            <span className="text-violet-700">Node.js</span>.
          </p>
          <p className="text-xl font-medium">
            I enjoy developing full-stack projects that combine intuitive{" "}
            <span className="text-violet-700">front-end</span> design with
            efficient <span className="text-violet-700">back-end</span> logic.
          </p>
          <p className="text-xl font-medium">
            Demonstrated ability to build end-to-end projects with real-world
            functionality, as reflected in{" "}
            <span className="text-violet-700">e-commerce</span> and{" "}
            <span className="text-violet-700">media platform clones</span>.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center px-40 py-10 gap-1"
      >
        <h1 className="text-4xl">FIND ME ON</h1>
        <p className="text-xl">
          Feel free to <span className="text-violet-700">connect</span> with me
        </p>
        <ul className="flex gap-6 pt-4 pb-20">
          <li className="rounded-full p-2 bg-white hover:shadow-xl">
            <a
              href="https://github.com/Prem324"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-3xl text-violet-700" />
            </a>
          </li>
          <li className="rounded-full p-2 bg-white hover:shadow-xl">
            <a
              href="https://www.linkedin.com/in/prem324"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-3xl  text-violet-700" />
            </a>
          </li>
          <li className="rounded-full p-2 bg-white hover:shadow-xl">
            <a
              href="mailto:prem324r@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="text-3xl text-violet-700" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
