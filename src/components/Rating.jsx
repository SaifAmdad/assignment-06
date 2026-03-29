import React from "react";

function Rating() {
  return (
    <>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
        <div className="w-[75%] mx-auto flex items-center py-14 justify-center">
          <div className="px-32 text-center">
            <h1 className="text-6xl font-extrabold text-white">50K+</h1>
            <p className="text-2xl text-blue-100 font-normal pt-3">
              Active Users
            </p>
          </div>
          <p className="w-20 bg-blue-100 h-0.5 rotate-90"></p>
          <div className="px-32 text-center">
            <h1 className="text-6xl font-extrabold text-white">200+</h1>
            <p className="text-2xl text-blue-100 font-normal pt-3">
              Premium Tools
            </p>
          </div>
          <p className="w-20 bg-blue-100 h-0.5 rotate-90"></p>
          <div className="px-32 text-center">
            <h1 className="text-6xl font-extrabold text-white">4.9</h1>
            <p className="text-2xl text-blue-100 font-normal pt-3">Rating</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;
