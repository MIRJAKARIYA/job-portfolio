import React from "react";
import Resume from "./my-resume.pdf";
import { BiDownload } from "react-icons/bi";

const AboutMe = () => {
  return (
    <>
      <h1 id="about-me" className="text-2xl text-center mt-[100px]">
        <span>About</span>Me
      </h1>
      <div className="w-[95%] md:w-[80%] mx-auto mt-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[40%] mx-auto lg:ml-0">
            <p className="text-xl font-semibold">
              Name: <span className="text-yellow-600">Mir Jakariya</span>
            </p>
            <p className="text-xl font-semibold mt-3">
              Age: <span className="text-yellow-600">25</span>
            </p>
            <p className="text-xl font-semibold mt-3">
              Qualification:{" "}
              <span className="text-yellow-600">BSc in Engineering</span>
            </p>
            <p className="text-xl font-semibold mt-3">
              Profession:{" "}
              <span className="text-yellow-600">Front End Developer</span>
            </p>
            <p className="text-xl font-semibold mt-3">
              Language: <span className="text-yellow-600">Bangla, English</span>
            </p>
            <a
              href={Resume}
              className="bg-slate-600 lg:w-[35%] px-2 mt-4 py-2 rounded-xl text-white flex justify-center items-center"
              download={true}
            >
              <span className="mr-2">Download Resume</span> <BiDownload />
            </a>
          </div>
          <div className="lg:w-[60%]">
            <h1 className="text-xl ml-[-220px] text-center text-accent">
              Educational Background
            </h1>
            <div className="flex justify-center">
              <ul className="steps steps-vertical">
                <li className="step step-warning">
                  <span>
                    <span className="text-warning">Graduation</span>: BSc in EEE
                    at Daffodil International University
                  </span>
                </li>
                <li className="step step-secondary">
                  <span>
                    <span className="text-warning">HSC</span>: Science at MEH
                    Arif College
                  </span>
                </li>
                <li className="step step-accent">
                  <span>
                    <span className="text-warning">SSC</span>: Science at
                    Rajabari High School
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
