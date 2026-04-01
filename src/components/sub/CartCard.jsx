import React from "react";

function CartCard({ cartData, index, handleRemove }) {
  return (
    <div className="flex items-center justify-between p-5 bg-[#f1f1f1] rounded-2xl mb-4">
      <div className="flex items-center gap-4">
        <div className="bg-white flex items-center justify-center border-2 border-gray-200 p-2 rounded-4xl">
          <img src={cartData.img} alt="" srcSet="" />
        </div>

        <div>
          <h1 className="text-xl font-semibold text-black">{cartData.name}</h1>
          <p className="text-[16px] font-medium text-[#627382]">
            ${cartData.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleRemove(cartData, index)}
        className="text-[#FF3980]"
      >
        Remove
      </button>
    </div>
  );
}

export default CartCard;
