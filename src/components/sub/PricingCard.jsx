import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

function PricingCard({ data }) {
  return (
    <div
      className={`flex justify-between flex-col ${data.badge ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-[#F9FAFC]"} p-6  shadow-[#f2f2f2] max-w-95 rounded-2xl relative border-gray-200 border-2`}
    >
      <div>
        {data.badge && (
          <p
            className={`absolute -top-4 right-[50%] transform translate-x-6/12 py-1.5 px-3 text-[12px] rounded-4xl bg-amber-200 text-amber-800`}
          >
            {data.badge}
          </p>
        )}

        <div className={data.badge && "text-white"}>
          <h1
            className={`${data.badge && "text-white"} text-2xl font-bold my-4`}
          >
            {data.name}
          </h1>
          <p
            className={`${data.badge && "text-base-300"} text-[16px] font-normal text-[#627382] leading-5`}
          >
            {data.description}
          </p>
          <div className="flex items-center my-4">
            <h2
              className={`${data.badge && "text-white"} text-2xl text-[#101727] font-bold`}
            >
              ${data.price}
            </h2>
            <p
              className={`${data.badge && "text-base-300"} text-[16px] font-normal text-[#627382]`}
            >
              /Mo
            </p>
          </div>
          {data.features.map((feature, index) => (
            <p
              key={index}
              className={`${data.badge && "text-white"} flex items-center gap-2 text-[#a0b0be] my-1`}
            >
              {" "}
              <IoCheckmarkSharp color="#30B868" /> {feature}
            </p>
          ))}
        </div>
      </div>
      <button
        className={`${!data.badge ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-[#5943fa]"} btn py-4 rounded-4xl  w-full mt-4`}
      >
        {data.btnText}
      </button>
    </div>
  );
}

export default PricingCard;
