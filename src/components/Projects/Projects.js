import React from "react";
import Electric from "../../images/electric-builders.png";
import Warehouse from "../../images/warehouse-management.png";
import Volunteer from "../../images/volunteer-network.png";

const Projects = () => {
  return (
    <>
      <h1 id="projects" className="text-2xl mt-[100px] text-center">
        Full Stack Projects
      </h1>
      <div className="w-[95%] md:w-[80%] mx-auto mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card bg-slate-900 text-white shadow-xl p-2">
            <figure>
              <img src={Electric} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Electric Builders
                <div className="badge badge-secondary">MERN</div>
              </h2>
              <p>
                This is a full stack project made with HTML5, CSS3, TailwindCSS,
                React, Node.js, Express.js and Mongodb
              </p>
              <a
                href="https://last-assignment-auth.web.app/"
                className="btn btn-warning btn-sm w-[40%]  ml-auto"
              >
                Live site
              </a>
            </div>
          </div>
          <div className="card bg-slate-900 text-white shadow-xl p-2">
            <figure>
              <img src={Warehouse} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Military Warehouse
                <div className="badge badge-secondary">MERN</div>
              </h2>
              <p>
                This is a full stack project made with HTML5, CSS3, TailwindCSS,
                React, Node.js, Express.js and Mongodb
              </p>
              <a
                href="https://inventory-management-11-9b48e.web.app/"
                className="btn btn-warning btn-sm w-[40%] ml-auto"
              >
                Live site
              </a>
            </div>
          </div>
          <div className="card bg-slate-900 text-white shadow-xl p-2">
            <figure>
              <img src={Volunteer} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Volunteer Network
                <div className="badge badge-secondary">MERN</div>
              </h2>
              <p>
                This is a full stack project made with HTML5, CSS3, TailwindCSS,
                React, Node.js, Express.js and Mongodb
              </p>
              <a
                href="https://voluteer-service.web.app/"
                className="btn btn-warning btn-sm w-[40%] ml-auto"
              >
                Live site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
