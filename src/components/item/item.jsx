import React from "react";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { Bucket2Icon } from "../../assets/icons/bucket2-icon";
import { Link, NavLink } from "react-router-dom";
const USD_TO_UZS = 10957.5;

export const Item = ({ img, title, price, oldPrice, discount, id,category }) => {
  
  const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const priceInSoums = formatPrice((price * USD_TO_UZS).toFixed(0));
  const oldPriceInSoums = formatPrice((oldPrice * USD_TO_UZS).toFixed(0));
  const truncatedTitle = title.length > 20 ? title.slice(0, 20) + "..." : title;
  return (
    <>
      <Link to={`/${category}/${id}`}>
        <div className="w-[215px] h-[325px] ml-3 mr-3 ">
          <div className=" relative mb-[14px]">
            {discount && (
              <p className=" px-[4px] bg-[#E44542] font-Jost font-normal text-3 text-[#fff] w-[35px] absolute top-0 left-[-15px] ">
                {discount}
              </p>
            )}
            <img className="w-[165px] h-[165px]" src={img} alt="image" />
            <div className=" absolute top-0 right-[35px]">
              <HeartIcon />
            </div>
          </div>
          <div className="w-[157px]">
            <h3 className=" font-Jost font-medium text-[16px] text-[#333333]">
              {truncatedTitle}
            </h3>
            <p className=" font-Jost font-normal text-[14px] text-[#999999] line-through">
              {oldPriceInSoums} Сум
            </p>
            <div className="flex items-center justify-between">
              <strong>{priceInSoums} Сум</strong>
                <div className=" py-[5px] pl-[7px] pr-[3px] bg-[#ff2947] w-[36px] ">
                  <Bucket2Icon />
                </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
