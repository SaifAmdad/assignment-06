import React from "react";
import StepCard from "./sub/StepCard";

function Steps({ steps }) {
  return (
    <div className="bg-[#f6f6f8]">
      <div className="w-[90%] md:80% 2xl:w-[76%] mx-auto py-32  ">
        <h1 className="font-extrabold text-5xl text-center text-black">
          Get Started in 3 Steps
        </h1>
        <p className="font-normal text-[16px] text-[#627382] mt-4 mb-10 text-center">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {steps.map((item, index) => {
            return <StepCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Steps;
