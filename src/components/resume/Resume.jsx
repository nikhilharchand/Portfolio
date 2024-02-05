import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-500 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="cursor-pointer w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 bg-black rounded-3xl py-1 px-8 font-semibold text-xl text-white hover:text-black hover:bg-white">
              Achievment
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl ">
                  React Js Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base transition-2s hover:scale-95">
                  CipherSchools
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">
                  June 2023 - July 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Achieved React.js certification, showcasing proficiency in the popular JavaScript library for building user interfaces. Demonstrated ability to create dynamic and interactive web applications, enhancing user experience and interactivity. Leveraging React's component-based architecture, I've developed scalable and maintainable solutions. This certification reflects dedication to mastering new technologies and a commitment to delivering high-quality projects. It strengthens my portfolio, highlighting expertise in modern web development and adding value to prospective endeavors.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="cursor-pointer w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 bg-black rounded-3xl py-1 px-8 font-semibold text-xl text-white hover:text-black hover:bg-white">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Information Technology
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-600 sm:text-base transition-2s hover:scale-95">
                  Lovely Professional University
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">
                  2020 - 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Pursued a comprehensive Bachelor of Technology degree with a
                  focus on Information Technology. Gained a strong
                  academic foundation in programming, algorithms, and software
                  development. Majored in Full Stack Development and gained
                  expertise in JavaScript, npm, and React. learned how to build
                  full-stack web applications using a variety of technologies.
                 
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
