import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

function ProductCard({ data, selected, setSelected }) {
  return (
    <div className="p-6 bg-white shadow-[#f2f2f2] w-96 rounded-2xl relative border-gray-200 border-2">
      <p className="absolute top-2.5 right-2.5 py-1.5 px-3 text-[#BB4D00] text-[12px] bg-amber-100 rounded-4xl">
        {data.badge}
      </p>
      <div className="h-14 w-14 bg-white rounded-4xl flex justify-center items-center border-gray-200 border">
        <img src={data.img} alt="" srcset="" />
      </div>
      <h1 className="text-2xl font-bold my-4">{data.name}</h1>
      <p className="text-[16px] font-normal text-[#627382] leading-5">
        {data.description}
      </p>
      <div className="flex items-center my-4">
        <h2 className="text-2xl text-[#101727] font-bold">${data.price}</h2>
        <p className="text-[16px] font-normal text-[#627382]">/Mo</p>
      </div>
      {data.services.map((service, index) => (
        <p key={index} className="flex items-center gap-2 text-[#627382] my-1">
          {" "}
          <IoCheckmarkSharp color="#30B868" /> {service}
        </p>
      ))}
      <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 rounded-4xl text-white w-full mt-4">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
