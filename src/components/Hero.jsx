import React from "react";

function Hero() {
  return (
    <>
      <div className="flex sm:flex-col-reverse flex-col-reverse xl:flex-row items-center justify-between py-24 xl:w-[76%] w-[90%] mx-auto">
        <div className="flex flex-col xl:w-[52%] sm:w-[90%] mx-auto">
          <div className="flex items-center justify-center py-2 px-4 bg-blue-100 rounded-4xl gap-2 w-fit">
            <div className="flex items-center justify-center rounded-4xl bg-linear-to-r from-[#d1cbff] to-[#e8cbff] p-1.5">
              <div className="flex items-center justify-center rounded-4xl bg-linear-to-r from-[#a599ff] to-[#c985fd] p-1.5">
                <div className="flex items-center justify-center rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-1 w-1 p-0.5"></div>
              </div>{" "}
            </div>
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] bg-clip-text text-transparent font-medium ">
              New: AI-Powered Tools Available
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold py-4 leading-tight">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-[18px] font-normal leading-7 text-[#627382] max-w-xl">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>

          <div className="flex gap-4 justify-start pt-8">
            <button className="py-6 px-5 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-[16px] rounded-4xl">
              Explore Products
            </button>
            <button className="py-6 px-5 flex justify-center items-center gap-2.5 btn btn-outline text-[#4F39F6] rounded-4xl font-bold text-[16px] ">
              <img
                src="https://namprokash.github.io/assingment-06-photos/Play.png"
                alt=""
                srcSet=""
              />{" "}
              Watch Demo
            </button>
          </div>
        </div>
        <div className="xl:w-[40%] sm:w-[90%] sm:flex sm:justify-center sm:pb-4 mb-6">
          <img
            src="https://namprokash.github.io/assingment-06-photos/banner.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
