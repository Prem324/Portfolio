import React from "react";
import Developer from "../assets/about.png";
import Sketch from "../assets/sketch.svg";

function About() {
  return (
    <div className="flex items-center justify-center px-40 py-10 font-roboto pt-32 pb-28">
      <div className="w-[70%] flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-center mb-2 font-medium">
            Know Who <span className="text-violet-700">I'M</span>
          </h1>
          <img
            src={Sketch}
            alt="sketch"
            className="text4xl w-auto scale-y-[1]"
          />
        </div>

        <div className="text-lg font-medium">
          <p>
            Hi Everyone, I am{" "}
            <span className="text-violet-700">Prem Kumar Ramavarapu</span> from
            &nbsp;
            <span className="text-violet-700">
              Kakinada, AndhraPradesh, India.
            </span>{" "}
            <br />
            I'm a passionate and dedicated full-stack developer, currently
            upskilling through{" "}
            <span className="text-violet-700">
              Nxtwave’s Industry-Ready Certification
            </span>{" "}
            in &nbsp;
            <span className="text-violet-700">Full-Stack Development</span>.
          </p>
          <br />
          <p>Core Competencies:</p>
          <ul className="list-decimal pl-4">
            <li>
              Proficient in building full-stack web applications using the{" "}
              <span className="text-violet-700">MERN</span> stack (MongoDB,
              Express.js, React.js, Node.js).
            </li>
            <li>
              Solid understanding of{" "}
              <span className="text-violet-700">data structures</span> and{" "}
              <span className="text-violet-700">algorithms</span>.
            </li>
            <li>
              {" "}
              Familiar with working on cloud-based projects and tools like{" "}
              <span className="text-violet-700">Postman, GitHub</span> and{" "}
              <span className="text-violet-700">API integration</span>.
            </li>
            <li>
              Skilled in frontend development with{" "}
              <span className="text-violet-700">HTML, CSS, JavaScript</span> and
              &nbsp;
              <span className="text-violet-700">Bootstrap</span>.
            </li>
            <li>
              Hands-on experience with{" "}
              <span className="text-violet-700">
                JWT-based authentication, React Router
              </span>{" "}
              and <span className="text-violet-700">REST API integration</span>.
            </li>
          </ul>
        </div>
        <div className="text-lg font-medium">
          <p>
            Beyond coding, I enjoy engaging in activities that inspire
            creativity and continuous growth. Some of my personal interests
            include:
          </p>
          <br />
          <ul className="list-none">
            <li>👉🏻 Exploring and learning emerging technologies.</li>
            <li>
              👉🏻 Learning from others through collaboration, conversations, and
              shared experiences.
            </li>
            <li>
              👉🏻 Engaging in music learning and performance enhances focus and
              creativity.
            </li>
          </ul>
        </div>
        <div className="text-amber-800 text-md flex flex-col items-end">
          <p>"Believe, Begin, and Become"</p>
          <p>--PremKumar</p>
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-6">
        <img
          src={Developer}
          alt="about"
          className="scale-125 hover:trasition duration-500 ease-in-out hover:scale-150"
        />
      </div>
    </div>
  );
}

export default About;
