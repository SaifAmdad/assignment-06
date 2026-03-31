import React from "react";
import PricingCard from "./sub/PricingCard";

function Pricing({ pricing }) {
  console.log(pricing);
  return (
    <div className="bg-[#f6f6f8] py-32">
      <div className="w-[90%] md:80% 2xl:w-[76%] mx-auto   ">
        <h1 className="font-extrabold text-5xl text-center text-black">
          Simple, Transparent Pricing
        </h1>
        <p className="font-normal text-[16px] text-[#627382] mt-4 mb-10 text-center">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-7">
        {pricing.map((data, index) => {
          return <PricingCard data={data} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Pricing;
