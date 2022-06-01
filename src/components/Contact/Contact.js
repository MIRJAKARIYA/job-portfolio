import React from "react";

const Contact = () => {
  return (
   <>
   <h1 className="text-2xl text-center mt-10">Contact me</h1>
     <div className="w-[95%] md:w-[80%] mx-auto mt-10 border-2 flex p-4">
      <div className="flex-1">
        <h1>CONTACT INFO</h1>
        <div>
          <p></p>
          <p>mirjakariya239@gmail.com</p>
        </div>
        <div>
          <p></p>
          <p>+8801793167831</p>
        </div>
        <div>
          <p></p>
          <p>Gazipur, Bangladesh</p>
        </div>
      </div>
      <div className="flex-1">
        <form action="">
          <div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-warning w-full max-w-[500px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-warning w-full max-w-[500px] mt-4"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-warning w-full max-w-[500px] mt-4"
            />
          </div>
          <div>
            <textarea
              class="textarea textarea-warning w-full max-w-[500px] mt-4"
              placeholder="Bio"
            ></textarea>
          </div>
          <button className="btn btn-warning btn-sm mt-2 px-5">Send</button>
        </form>
      </div>
    </div>
   </>
  );
};

export default Contact;
