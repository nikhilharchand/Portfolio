import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import mine2 from '../../assets/mine2.png';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  
  return (
    <div id="home" className={` bg-gradient-to-r from-blue-300 to-white-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              <span className="text-gray-500">Hello, I'm </span><span className="text-black">Nikhil Harcahnd</span>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Front-End Developer",
                2000,
                "Glad To have you here! ",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-gray-600 text-4xl  sm:text-3xl"
            />
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
        
            <a
              href={resumePDF}
              className="flex text-white items-center gap-2 border- text-[1rem] bg-black border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:transition-1s hover:bg-white hover:text-black hover:scale-105"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/nikhilharchand?tab=repositories" target="_blank">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nikhil-harchand/" target="_blank">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/NHarchand2349" target="_blank">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-white " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-6 flex-1 flex items-center justify-center md:items-end sm:items-end ">
          <div className="relative h-[100%] w-10/10 flex items-center sm:items-end ">
            <LazyLoadImage  
              id="hero-img-mine2"
              src={mine2}
              data-aos="fade-up"
              className=" h-[85%] border-black w-full object-cover md:h-[95%] md:m-auto sm:m-0 rounded-full"
              alt="mine2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
