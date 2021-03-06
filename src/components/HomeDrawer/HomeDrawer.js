import React from "react";
import Banner from "../Banner/Banner";
import ProfileImg from "../../images/portfolio-pic.jpg";
import "./HomeDrawer.css";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
const HomeDrawer = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-20 scroll-smooth">
        {/* <!-- Page content here --> */}
        <Banner></Banner>
        <Skills></Skills>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <div className="drawer-side lg:sticky top-0">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-300 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div className="bg-yellow-600 border-yellow-600 mx-auto rounded-full p-1 h-[200px] w-[200px] mt-10">
            <img
              src={ProfileImg}
              className="w-full h-full rounded-full object-cover"
              alt=""
            />
          </div>
          <h1 className="text-center text-4xl font-semibold mt-3">
            Mir Jakariya
          </h1>
          <h1 className="text-center text-xl">Front End Developer</h1>
          <li className="mt-3">
            <a
              href="#about-me"
              className="text-center btn btn-secondary text-white flex w-[70%] mx-auto"
            >
              About me
            </a>
          </li>
          <li className="mt-3">
            <a
              className="text-white flex text-center btn btn-accent w-[70%] mx-auto"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="mt-3">
            <a
              className="text-white flex text-center btn btn-secondary w-[70%] mx-auto"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="mt-3">
            <a
              className="text-white flex text-center btn btn-accent w-[70%] mx-auto"
              href="#contact-me"
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeDrawer;
