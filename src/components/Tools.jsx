import React, { useEffect, useState } from "react";
import ProductCard from "./sub/ProductCard";
import CartCard from "./sub/CartCard";

function Tools({ tools }) {
  const [selected, setSelected] = useState([]);
  const [renderComponent, setRenderComponent] = useState("products");
  const [totalPrice, setTotalPrice] = useState(0);
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
          <button
            onClick={() => setRenderComponent("products")}
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-6 rounded-4xl text-white"
          >
            Products
          </button>
          <button
            className="btn shadow-base-200 py-4 px-6 rounded-4xl"
            onClick={() => setRenderComponent("cart")}
          >
            Cart{`(${selected.length})`}
          </button>
        </div>
      </div>

      {renderComponent === "products" ? (
        <div className="mx-auto 2xl:w-[76%] xl:w-[80%] sm:w-[90%] grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-4">
          {tools.map((tool, index) => {
            return (
              <ProductCard
                index={index}
                key={tool.id}
                data={tool}
                selected={selected}
                setSelected={setSelected}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            );
          })}
        </div>
      ) : (
        <div className="2xl:w-[76%] xl:w-[80%] w-[90%] p-10 mx-auto">
          {selected.length > 0 ? (
            <>
              {selected.map((cartData, index) => {
                return (
                  <>
                    <CartCard
                      cartData={cartData}
                      key={index}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                    />
                  </>
                );
              })}
              <div className="flex items-center justify-between p-5">
                <p className="text-[#627382]">Total</p>
                <p className="text-black text-2xl font-bold">{totalPrice}</p>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-col gap-4 md:w-[75%] w-[90%] mx-auto bg-gray-100 h-[50vh] rounded-2xl text-[#4e5660]">
              <h2>Product not found</h2>
              <p>Please select a valid product.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Tools;
