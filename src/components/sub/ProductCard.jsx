import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from "react-toastify";

function ProductCard({
  data,
  selected,
  setSelected,
  index,
  totalPrice,
  setTotalPrice,
}) {
  const [productAdded, setProductAdded] = useState("no");
  const handleSelect = (data, index) => {
    setSelected([...selected, data]);
    setTotalPrice(totalPrice + data.price);
    setProductAdded("yes");
    toast.success(data.name + " : has been added successfully!");
  };

  return (
    <div className="p-6 bg-white shadow-[#f2f2f2] max-w-96 rounded-2xl relative border-gray-200 border-2">
      <p
        className={`absolute top-2.5 right-2.5 py-1.5 px-3 text-[12px] rounded-4xl ${data.badge === "Best Seller" ? "bg-amber-100 text-[#BB4D00]" : data.badge === "Popular" ? "bg-[#E1E7FF] text-[#4F39F6]" : "bg-[#DBFCE7] text-[#0A883E]"}`}
      >
        {data.badge}
      </p>
      <div className="h-14 w-14 bg-white rounded-4xl flex justify-center items-center border-gray-200 border">
        <img src={data.img} alt="" srcSet="" />
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
      <button
        onClick={() => handleSelect(data, index)}
        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 rounded-4xl text-white w-full mt-4"
      >
        {productAdded === "no" ? "Buy Now" : "Added to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
