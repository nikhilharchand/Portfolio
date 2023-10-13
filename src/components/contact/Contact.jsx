import { LoadingOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { notification, message } from "antd";
const Contact = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Now we are talking 😃",
      description:
        "I will get back to you as 🍟 soon as possible.",
      duration: 4,
    });
  };
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_u0uv0yq",
        "template_djmf7qu",
        form.current,
        "mqH4sfzsZR9xYgZoZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          openNotification();
        },
        (error) => {
          console.log(error.text);
          message.error("Something is Off🥲");
        }
      );
    setTimeout(() => {
      setLoading(false);
      form.current.reset();
    }, 2000);
  };

  return (<>  
      {contextHolder}
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-3xl font-bold sm:text-3xl pr-4 w-full">
                Let's engage Professionally
              </h1>
            </div>
          </div>
          <div className="outline-none flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className="outline-none border-none text-black font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] ml-10"
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            <input
              className="px-3 outline-none shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              required
              placeholder="Your Email"
              name="user_email"
            />
            <input
              className="px-3 outline-none shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Your Name"
              required
              name="user_name"
            />
            <textarea
              className="px-3 outline-none shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              required
              cols="50"
              placeholder="Write your message"
              name="message"
              id=""
            />
            <button
              disabled={loading}
              className="bg-black hover:bg-gray-800 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              {loading ? (
                <LoadingOutlined style={{ padding: ".25rem" }} />
              ) : (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <span>Send</span>
                  <RiSendPlaneFill />
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
