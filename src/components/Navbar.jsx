import React from "react";

function Navbar() {
  return (
    <>
      <div className="shadow-sm py-3">
        <div className="navbar container mx-auto">
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
          <div className="navbar-end gap-4">
            <img
              src="src/assets/products/shopping-cart.png"
              alt="Shopping Cart"
              srcset=""
            />
            <a href="#">Login</a>
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-3 px-5 rounded-4xl text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
