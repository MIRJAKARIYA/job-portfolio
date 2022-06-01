import React from "react";

const Projects = () => {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto mt-10">
      <div className="border-2 grid grid-cols-3">
        <div class="card bg-gray-500 text-white shadow-xl p-2">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              className="rounded-xl" alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Electric Builders
              <div class="badge badge-secondary">MERN</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card bg-gray-500 text-white shadow-xl p-2">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              className="rounded-xl" alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Electric Builders
              <div class="badge badge-secondary">MERN</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card bg-gray-500 text-white shadow-xl p-2">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              className="rounded-xl" alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Electric Builders
              <div class="badge badge-secondary">MERN</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
