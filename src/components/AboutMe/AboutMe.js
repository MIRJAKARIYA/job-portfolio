import React from "react";

const AboutMe = () => {
  return (
    <>
      <h1 className="text-2xl text-center mt-10">
        <span>About</span>Me
      </h1>
      <div className="w-[95%] md:w-[80%] mx-auto mt-10">
        <div className="border-2 flex">
          <div className="w-[40%] border-accent border-2">
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
              href="/"
              className=" bg-slate-600 w-[35%] px-2 mt-4 py-2 rounded-xl flex justify-center"
            >
              Download Resume
            </a>
          </div>
          <div className="w-[60%] border-secondary border-2">
            <h1 className="text-xl text-center">Other information</h1>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
