import React from "react";
import ReactFlipCard from "reactjs-flip-card";
import { skills } from "../data/SkillsData";
import Sketch from "../assets/sketch.svg";

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-40 py-10 mt-16 mb-16 font-roboto">
      <div className="flex flex-col items-center gap-6">
        <div>
          <h1 className="text-4xl font-medium">
            Professional <span className="text-violet-700">Skillset</span>
          </h1>
          <img
            src={Sketch}
            alt="sketch"
            className="text4xl w-auto scale-y-[1] ml-14"
          />
        </div>
        <br />
        <ul className="flex justify-center flex-wrap gap-5">
          {skills.professionalSkills.map((each) => (
            <li
              key={each.id}
              className="flex justify-center items-center w-60 h-32 border border-violet-700 rounded-md hover:trasition duration-500 ease-in-out hover:scale-105"
            >
              <ReactFlipCard
                frontComponent={<img src={each.iconUrl} alt="icon" />}
                backComponent={
                  <div className="h-full flex justify-center items-center">
                    <h1
                      className={`font-medium text-5xl font-caveat ${each.textColor}`}
                    >
                      {each.text}
                    </h1>
                  </div>
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <br />
      <hr className="bg-gray-400 h-[2px] w-[100%]" />
      <div className="flex flex-col items-center gap-6">
        <div>
          <h1 className="text-4xl font-medium mt-10">
            <span className="text-violet-700">Tools </span>I use
          </h1>
          <img
            src={Sketch}
            alt="sketch"
            className="text4xl w-auto scale-y-[1]"
          />
        </div>

        <br />
        <ul className="flex justify-center flex-wrap gap-5">
          {skills.tools.map((skill) => (
            <li className="flex justify-center items-center h-32 w-60 border border-violet-700  rounded-md hover:trasition duration-500 ease-in-out hover:scale-105">
              <ReactFlipCard
                frontComponent={<img src={skill.iconUrl} alt="icon" />}
                backComponent={
                  <div className="h-full flex justify-center items-center">
                    <h1
                      className={`font-medium text-5xl font-caveat ${skill.textColor}`}
                    >
                      {skill.text}
                    </h1>
                  </div>
                }
              />{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
