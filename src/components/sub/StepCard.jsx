import React from "react";

function StepCard({ item }) {
  return (
    <div className="bg-white max-w-95 py-22 px-6 relative rounded-2xl">
      <p className="flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-3 font-bold text-sm rounded-4xl text-white h-10 w-10 absolute top-5 right-5">
        {item.id}
      </p>
      <div className="flex items-center justify-center h-24 w-24 mx-auto bg-purple-200 rounded-[50%]">
        <img src={item.img} alt="" srcSet="" className="h-12 w-12" />
      </div>
      <h1 className="text-center text-2xl font-bold text-[#101727] my-4">
        {item.title}
      </h1>
      <p className="text-[16px] font-normal text-[#627382] text-center">
        {item.description}
      </p>
    </div>
  );
}

export default StepCard;
