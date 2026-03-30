import React, { useEffect, useState } from "react";
import ProductCard from "./sub/ProductCard";

function Tools({ tools }) {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="w-[76%] mx-auto pt-32 pb-10">
        <h1 className="text-5xl font-extrabold text-center text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-center text-[16px] font-normal text-[#627382] leading-5 py-4 ">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex justify-center gap-3">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-6 rounded-4xl text-white">
            Products
          </button>
          <button className="btn shadow-base-200 py-4 px-6 rounded-4xl">
            Cart{`(${selected.length})`}
          </button>
        </div>
      </div>
      <div className="w-[76%] mx-auto grid grid-cols-3 gap-7">
        {tools.map((tool, index) => {
          return (
            <ProductCard
              index={index}
              key={tool.id}
              data={tool}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </>
  );
}

export default Tools;
