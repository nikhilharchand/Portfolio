import React from "react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";


const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-black h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl text-white">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          target="_blank"
          data-aos="fade-up" data-aos-duration="1000"

            href="https://www.linkedin.com/in/thakurchetan20/"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className="  text-3xl hover:scale-125 cursor-pointer" />
            <p>Linked In</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1000"

          target="_blank"
            href="https://github.com/Amcelo13"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaGithub className="  text-3xl hover:scale-125 cursor-pointer" />
            <p>Github</p>
          </a>
        </div>
        <div className="sm:text-[12px] text-white">
          | Copyright &copy;  <span>2024  </span> Chetan
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
