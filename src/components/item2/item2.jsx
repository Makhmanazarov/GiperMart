import React from "react";
import { NavLink } from "react-router-dom";
const USD_TO_UZS = 10957.5;

export const Item2 = ({ img, title, price, oldPrice ,id, category}) => {
  const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const priceInSoums = formatPrice((price * USD_TO_UZS).toFixed(0));
  const oldPriceInSoums = formatPrice((oldPrice * USD_TO_UZS).toFixed(0));
  return (
    <NavLink to={`/${category}/${id}`} >
    <div className="flex items-start w-[413px] h-[157px] justify-between" >
      <div className="w-[140px] h-[140px]">
        <img src={img} alt="image" />
      </div>
      <div className="w-[249px] h-[125px] flex flex-col justify-between" >
        <div>
          <h3 className=" font-Jost font-medium text-[18px] text-[#333333]" >{title}</h3>
        </div>
        <div className="flex items-center gap-[10px]">
          <strong className=" font-Jost font-semibold text-[18px] text-[#000000]" >{priceInSoums} Сум</strong>
          <p className=" font-Jost font-normal text-[14px] text-[#999999] line-through" >{oldPriceInSoums} Сум</p>
        </div>
      </div>
    </div>
    </NavLink>
  );
};
