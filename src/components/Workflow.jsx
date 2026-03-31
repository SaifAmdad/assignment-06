import React from "react";

function Workflow() {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
      <div className="w-[90%] xl:w-[75%] mx-auto">
        <h1 className="font-extrabold text-[40px] text-white text-center mb-5">
          Ready to Transform Your Workflow?
        </h1>
        <p className="font-normal text-[16px] text-white text-center">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="flex justify-center gap-4 mb-4 mt-10 flex-col md:flex-row items-center">
          <button className="btn bg-white text-[#7968fd] rounded-4xl w-41 flex items-center justify-center">
            Explore Products
          </button>
          <button className="btn btn-outline bg-transparent text-white rounded-4xl w-41 flex items-center justify-center">
            View Pricing
          </button>
        </div>
        <p className="font-normal text-[16px] leading-5 text-[#ffff] text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default Workflow;
