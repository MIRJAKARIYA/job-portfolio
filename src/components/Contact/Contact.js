import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const question = e.target.question.value;

    fetch("https://vast-forest-87179.herokuapp.com/addquestion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        address: address,
        question: question,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thank you for your question..");
        }
      });
  };

  return (
    <>
      <h1 className="text-2xl text-center mt-[100px]" id="contact-me">
        Contact me
      </h1>
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
                  <AiFillLinkedin />
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/mir-jakariya-99b777229/"
                    className="underline text-accent ml-1"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
              <div className="flex items-center ml-2">
                <p className="text-warning">
                  <AiFillFacebook />
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/MIRJAKARIYA239"
                    className="underline text-accent ml-1"
                  >
                    Facebook
                  </a>
                </p>
              </div>
              <div className="flex items-center ml-2">
                <p className="text-warning">
                  <AiFillGithub />
                </p>
                <p>
                  <a
                    href="https://github.com/MIRJAKARIYA"
                    className="underline text-accent ml-1"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-4 lg:mt-0 text-center lg:text-left">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered input-warning w-full max-w-[500px]"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your email"
                name="email"
                className="input input-bordered input-warning w-full max-w-[500px] mt-4"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your address"
                name="address"
                className="input input-bordered input-warning w-full max-w-[500px] mt-4"
                required
              />
            </div>
            <div>
              <textarea
                className="textarea textarea-warning w-full max-w-[500px] mt-4"
                placeholder="Your question"
                name="question"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning btn-sm mt-2 px-5">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
