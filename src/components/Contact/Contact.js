import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <h1 className="text-2xl text-center mt-[100px]" id="contact-me">Contact me</h1>
      <div className="w-[95%] md:w-[80%] mx-auto mt-10 mb-[100px] lg:flex p-4">
        <div className="flex-1 flex justify-center items-center">
          <div>
            <h1 className="text-2xl text-warning underline">CONTACT INFO.</h1>
            <div className="flex items-center mt-2 text-lg">
              <p className="text-warning">
                <MdEmail />
              </p>
              <p className="ml-1">mirjakariya239@gmail.com</p>
            </div>
            <div className="flex items-center mt-2 text-lg">
              <p className="text-warning">
                <AiFillPhone />
              </p>
              <p className="ml-1">+8801793167831</p>
            </div>
            <div className="flex items-center mt-2 text-lg">
              <p className="text-warning">
                <ImLocation2 />
              </p>
              <p className="ml-1">Gazipur, Bangladesh</p>
            </div>
            <div className="flex mt-2 text-lg">
                <div className="flex items-center">
                    <p className="text-warning">
                        <AiFillLinkedin/>
                    </p>
                    <p>
                        <a href="/" className="underline text-accent ml-1">LinkedIn</a>
                    </p>
                </div>
                <div className="flex items-center ml-2">
                    <p className="text-warning">
                        <AiFillFacebook/>
                    </p>
                    <p>
                        <a href="/" className="underline text-accent ml-1">Facebook</a>
                    </p>
                </div>
                <div className="flex items-center ml-2">
                    <p className="text-warning">
                        <AiFillGithub/>
                    </p>
                    <p>
                        <a href="/" className="underline text-accent ml-1">Github</a>
                    </p>
                </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-4 lg:mt-0 text-center lg:text-left">
          <form>
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
