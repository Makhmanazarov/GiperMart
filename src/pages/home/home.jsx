import React from "react";
import { useGetTodo } from "./service/query/useGetTodo";
import { Banner } from "../../components/banner/banner";
import { CategoryBanner } from "../../components/banner/categoryBanner";
import { ProductBanner } from "../../components/banner/productBanner";
import { DiscountBanner } from "../../components/banner/discountBanner";
import { useGetPhones } from "../../pages/home/service/query/useGetPhones";
import { useGetLaptops } from "../../pages/home/service/query/useGetLaptops";
import { Item2 } from "../../components/item2/item2";
import { ProductBanner2 } from "../../components/banner/productBanner2";
import { useGetBrands } from "../home/service/query/useGetBrands";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data: bannerData } = useGetTodo();
  const { data: phonesData  } = useGetPhones();
  const { data: laptopsData,isLoading } = useGetLaptops();
  const { data: brandsData } = useGetBrands();

  return (
    <div>
      <section>
        <Banner>
          {bannerData?.slice(0, 3)?.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="img" />
            </div>
          ))}
        </Banner>
      </section>
      <section>
        <div className="container">
          <CategoryBanner />
        </div>
      </section>
      <section className="py-[48px]">
        <div className="container">
          <h2 className=" font-Jost font-semibold text-[24px] text-[#333333] mb-[28px]">
            Смартфоны и планшеты
          </h2>
          <ProductBanner />
        </div>
      </section>
      <section className="pt-[16px] pb-[30px] bg-[#ff2947]">
        <div className="container">
          <h2 className=" font-Jost font-semibold text-[24px] text-[#fff] mb-[24px] ">
            Акции
          </h2>
          <DiscountBanner />
        </div>
      </section>
      <section className="py-[65px]">
        <div className="container">
          <ul className="flex items-center justify-between mb-[32px]">
            <li className="w-[417px] border-b-[1px] border-b-[#EDEDED]">
              <h3 className=" font-Jost font-normal text-[24px] text-[#333333] pb-[14px]">
                Смартфоны и планшеты
              </h3>
            </li>
            <li className="w-[417px] border-b-[1px] border-b-[#EDEDED]">
              <h3 className=" font-Jost font-normal text-[24px] text-[#333333] pb-[14px]">
                Ноутбуки, планшеты и компьютеры
              </h3>
            </li>
            <li className="w-[417px] border-b-[1px] border-b-[#EDEDED]">
              <h3 className=" font-Jost font-normal text-[24px] text-[#333333] pb-[14px]">
                Смартфоны и планшеты
              </h3>
            </li>
          </ul>
          <ul className="flex items-start justify-between">
            <li>
              {phonesData?.slice(0, 3)?.map((item) => (
                <Item2 key={item.id} {...item} category="Phones" />
              ))}
            </li>
            <li>
              {laptopsData?.slice(0, 3)?.map((item) => (
                <Item2 key={item.id} {...item} category="Laptops" />
              ))}
            </li>
            <li>
              {phonesData?.slice(3, 6)?.map((item) => (
                <Item2 key={item.id} {...item} category="Phones" />
              ))}
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className=" font-Jost font-semibold text-[24px] text-[#333333] mb-[28px]">
            Смартфоны и планшеты
          </h2>
          <ProductBanner />
        </div>
      </section>
      <section className="py-[64px]">
        <div className="container">
          <h2 className=" font-Jost font-semibold text-[24px] text-[#333333] mb-[35px]">
            Ноутбуки, планшеты и компьютеры
          </h2>
          <ProductBanner2 />
        </div>
      </section>
      <section className="pb-[114px]" >
        <div className="container">
          <h3 className="font-Jost font-semibold text-[24px] text-[#333333] mb-[30px]">
            Популярные бренды
          </h3>
          <div className="flex items-start gap-[16px] flex-wrap" >

          {brandsData?.map((item) => (
            <Link key={item.id}>
              <div className="w-[175px] h-[90px] flex items-center justify-center bg-[#F8F8F8] " >
                <img src={item.img} alt="image" />
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};
