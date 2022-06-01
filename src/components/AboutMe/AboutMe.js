import React from "react";
import Resume from './my-resume.pdf'

const AboutMe = () => {
  return (
    <>
      <h1 className="text-2xl text-center mt-[100px]">
        <span>About</span>Me
      </h1>
      <div className="w-[95%] md:w-[80%] mx-auto mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-[40%]">
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
              className=" bg-slate-600 w-[35%] px-2 mt-4 py-2 rounded-xl flex justify-center" download={true}
            >
              Download Resume
            </a>
          </div>
          <div className="w-[60%]">
            <h1 className="text-xl ml-[-220px] text-center text-accent">Educational Background</h1>
            <div className="flex justify-center">
              <ul class="steps steps-vertical">
                <li class="step step-warning"><span>Graduation: BSc in EEE at Daffodil International University</span></li>
                <li class="step step-secondary">HSC: Science at MEH Arif College</li>
                <li class="step step-accent">SSC: Science at Rajabari High School</li>
    
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
