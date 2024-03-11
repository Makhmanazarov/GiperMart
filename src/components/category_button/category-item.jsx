import React from "react";
import { Link } from "react-router-dom";

export const CategoryItem = ({ img, title , category }) => {
  return (
    <Link to={`/${category}`} onClick={() => setIsOpen(false)} >
      <div className="p-[14px] flex items-center  ml-[10px] mr-[10px]  mt-[32px]  gap-[16px] bg-[#F6F6F6] ">
        <div className="w-[96px] h-[96px]">
          <img src={img} alt="img" />
        </div>
        <div className="w-[97px] text-center" >
          <h3 className=" font-Jost font-medium text-[16px] text-[#211A1A]" >{title}</h3>
        </div>
      </div>
    </Link>
  );
};
