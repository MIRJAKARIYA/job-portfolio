import React from "react";
import Banner from "../Banner/Banner";
import ProfileImg from "../../images/portfolio-pic.jpg";
import './HomeDrawer.css';
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
const HomeDrawer = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content mt-20">
        {/* <!-- Page content here --> */}
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <div class="drawer-side lg:sticky top-0">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-300 text-base-content">
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
              <a className="text-center btn btn-secondary text-white flex w-[70%] mx-auto" href="/">
                Sidebar Item 1
              </a>
            </li>
            <li className="mt-3">
              <a className="text-white flex text-center btn btn-accent w-[70%] mx-auto" href="/">
                Sidebar Item 2
              </a>
            </li>
            <li className="mt-3">
              <a className="text-white flex text-center btn btn-secondary w-[70%] mx-auto" href="/">
                Sidebar Item 2
              </a>
            </li>
            <li className="mt-3">
              <a className="text-white flex text-center btn btn-accent w-[70%] mx-auto" href="/">
                Sidebar Item 2
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeDrawer;
