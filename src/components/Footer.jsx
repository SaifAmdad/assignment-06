import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="pt-30 pb-8 bg-[#101727]">
      <div className="w-[90%] md:w-[80%] xl:w-[75%] mx-auto flex flex-col md:flex-row justify-between gap-11">
        {/* First section ======================= */}

        <div className="flex  flex-col max-w-88 mx-auto md:mx-0">
          <h1 className="font-extrabold text-3xl text-white text-center md:text-start">
            DigiTools
          </h1>
          <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7 my-4 text-center md:text-start">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Middle section =========================== */}
        <div className="flex flex-wrap sm:flex-row gap-12 justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-xl text-white leading-7">
              Product
            </h1>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Features
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Pricing
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Templates
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Integrations
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-xl text-white leading-7">
              Company
            </h1>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              About
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Blog
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Careers
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Press
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-xl text-white leading-7">
              Resources
            </h1>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Documentation
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Help Center
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Community
            </p>
            <p className="font-normal text-[16px] text-[#e0e0e0dc] leading-7">
              Contact
            </p>
          </div>
        </div>

        {/* Third section ================================== */}
        <div className="flex flex-col gap-7 items-center">
          <h1 className="font-medium text-xl text-white leading-7">
            Social Links
          </h1>
          <div className="flex gap-4">
            <div className="flex justify-center items-center bg-amber-50 h-10 w-10 rounded-4xl">
              <FaInstagram />
            </div>
            <div className="flex justify-center items-center bg-amber-50 h-10 w-10 rounded-4xl">
              <FaFacebook />
            </div>
            <div className="flex justify-center items-center bg-amber-50 h-10 w-10 rounded-4xl">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>

      <hr className="w-[90%] md:w-[80%] xl:w-[75%] border-[0.5px] border-gray-500 mx-auto mt-20 mb-7" />
      <div className="text-gray-400 text-[12px] flex flex-col justify-center items-center gap-2 sm:flex-row sm:justify-between w-[90%] md:w-[80%] xl:w-[75%] mx-auto">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-10">
          <p>Privacy Policy </p>
          <p>Terms of Service </p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
