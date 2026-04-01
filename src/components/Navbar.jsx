import React from "react";
import shoppingCart from "../assets/products/shopping-cart.png";

function Navbar({ selected }) {
  return (
    <>
      <div className="shadow-sm py-3">
        <div className="navbar container mx-auto px-4">
          <div className="navbar-start">
            <a className=" font-extrabold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] font-semibold gap-8">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2 md:gap-4">
            <div className="relative">
              {selected.length > 0 && (
                <p className="bg-linear-to-r from-blue-800 to-blue-600 absolute -top-4 -right-3 p-1 text-[12px] h-5 w-5 rounded-4xl flex justify-center items-center text-white">
                  {selected.length}
                </p>
              )}
              <img src={shoppingCart} alt="Shopping Cart" srcSet="" />
            </div>

            <a href="#">Login</a>
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 md:py-3 px-3 md:px-5 rounded-4xl text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
