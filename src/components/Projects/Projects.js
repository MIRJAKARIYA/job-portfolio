import React from "react";
import Electric from '../../images/electric-builders.png'
import Warehouse from '../../images/warehouse-management.png'
import Volunteer from '../../images/volunteer-network.png'

const Projects = () => {
  return (
   <>
   <h1 className="text-2xl mt-10 text-center">Full Stack Projects</h1>
     <div className="w-[95%] md:w-[80%] mx-auto mt-10">
      <div className="border-2 grid grid-cols-3 gap-5">
        <div class="card bg-slate-900 text-white shadow-xl p-2">
          <figure>
            <img
              src={Electric}
              className="rounded-xl" alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Electric Builders
              <div class="badge badge-secondary">MERN</div>
            </h2>
            <p>This is a full stack project made with HTML5, CSS3, TailwindCSS, React, Node.js, Express.js and Mongodb</p>
            <a href="https://last-assignment-auth.web.app/" className="btn btn-warning btn-sm w-[40%]  ml-auto">Live site</a>
          </div>
        </div>
        <div class="card bg-slate-900 text-white shadow-xl p-2">
          <figure>
            <img
              src={Warehouse}
              className="rounded-xl" alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
            Military Warehouse
              <div class="badge badge-secondary">MERN</div>
            </h2>
            <p>This is a full stack project made with HTML5, CSS3, TailwindCSS, React, Node.js, Express.js and Mongodb</p>
            <a href="https://inventory-management-11-9b48e.web.app/" className="btn btn-warning btn-sm w-[40%] block ml-auto">Live site</a>
          </div>
        </div>
        <div class="card bg-slate-900 text-white shadow-xl p-2">
          <figure>
            <img
              src={Volunteer}
              className="rounded-xl" alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Volunteer Network
              <div class="badge badge-secondary">MERN</div>
            </h2>
            <p>This is a full stack project made with HTML5, CSS3, TailwindCSS, React, Node.js, Express.js and Mongodb</p>
            <a href="https://voluteer-service.web.app/" className="btn btn-warning btn-sm w-[40%] ml-auto">Live site</a>
          </div>
        </div>


      </div>
    </div>
   </>
  );
};

export default Projects;
