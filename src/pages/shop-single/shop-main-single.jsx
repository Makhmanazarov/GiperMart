import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProduct } from "../home/service/query/useGetAllProduct";
import { Star } from "../../assets/icons/star";
import { HeartIcon } from "../../assets/icons/heart-icon";

export const ShopMainSingle = () => {
  const { id, category } = useParams();
  const { data } = useGetAllProduct(category, id);
  const usdToUzsRate = 10957.5;
  const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const priceInSoums = formatPrice((data?.price * usdToUzsRate).toFixed(0));
  const oldPriceInSoums = formatPrice((data?.oldPrice * usdToUzsRate).toFixed(0));

  return (
    <section>
      <div className="container">
        <h1 className=" font-Jost font-medium text-[15px] text-[#333333] mt-[20px] mb-[36px] ">
          Home /{" "}
          <span className=" font-Jost font-semibold text-[15px] text-[#333333]">
            {category}
          </span>
        </h1>
        <div className="mb-[24px]">
          <h2 className=" font-Jost font-semibold text-[24px] text-[#333333] mb-4 ">
            {data?.title}
          </h2>
          <div className=" flex items-center justify-between pb-[15px] border-b-[1px] border-b-[#EDEDED] ">
            <div className=" flex items-center gap-[38px]">
              <div className=" flex items-center gap-[13px]">
                <div className="flex items-center gap-[10px]">
                  <button>
                    <Star />
                  </button>
                  <button>
                    <Star />
                  </button>
                  <button>
                    <Star />
                  </button>
                  <button>
                    <Star />
                  </button>
                  <button>
                    <Star />
                  </button>
                </div>
                <p className=" font-Jost font-normal text-[16px] text-[#76BC21]">
                  (0)
                </p>
              </div>
              <div className=" flex items-center gap-[15px]">
                <button>
                  <HeartIcon />
                </button>
                <p className=" font-Jost font-normal text-[16px] text-[#333333]">
                  В избранное
                </p>
              </div>
            </div>
            <p className=" font-Jost font-normal text-4 text-[#999999]">
              арт.{" "}
              <span className=" font-Jost font-normal text-[16px] text-[#5C5C5C]">
                14979
              </span>
            </p>
          </div>
        </div>
        <div className=" flex items-start justify-between" >
          <div  >
          <img className="w-[435px] h-[435px] object-cover"  src={data?.img} alt="img" />
          </div>
          <div className=" w-[340px] pt-[12px] px-[18px] pb-[17x] border-[1px] border-[#EDEDED]" >
            <div className=" flex items-center justify-between mb-[10px] ">
              <p className=" font-Jost font-medium text-[20px] text-[#999999] line-through " > {oldPriceInSoums} Сум</p>
              <p className=" px-[4px] bg-[#E44542] font-Jost font-normal text-3 text-[#fff] w-[35px]" >{data?.discount}</p>
            </div>
            <strong className=" font-Jost font-semibold text-[36px] text-[#333333] mb-[21px] " >{priceInSoums} Сум</strong>
            <div>
            <button className=" font-Jost py-[12px] px-[110px] font-medium text-[16px] bg-[#E44542] text-[#fff]" >В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
