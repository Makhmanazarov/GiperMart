import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCategory } from "../home/service/query/useGetSingleCategory";
import { Item } from "../../components/item/item";


export const Products = () => {
  const { category } = useParams();
  const {data } = useGetSingleCategory(category);
  return (
    <section className="pb-[50px]">
      <div className="container">
        <ul className="flex items-center gap-[40px] mb-[25px] ">
          <li>
            <a className=" font-Jost font-medium text-[16px] text-[#333333] hover:text-[#E44542]" href="#">Смартфоны и планшеты</a>
          </li>
          <li>
            <a className=" font-Jost font-medium text-[16px] text-[#333333] hover:text-[#E44542]" href="#">Ноутбуки, планшеты и компьютеры</a>
          </li>
          <li>
            <a className=" font-Jost font-medium text-[16px] text-[#333333] hover:text-[#E44542]" href="#">Техника для дома</a>
          </li>
          <li>
            <a className=" font-Jost font-medium text-[16px] text-[#333333] hover:text-[#E44542]" href="#">Игры и развлечения</a>
          </li>
          <li>
            <a className=" font-Jost font-medium text-[16px] text-[#333333] hover:text-[#E44542]" href="#">Телевизоры, Аудио-видео, Hi-Fi</a>
          </li>
          <li>
            <a className=" font-Jost font-medium text-[16px] text-[#333333] hover:text-[#E44542]" href="#">Фото и видеотехника</a>
          </li>
        </ul>
        <h1 className="font-Jost font-medium text-[14px] text-[#333333]">
          Home / <span className=" font-Jost font-semibold text-[15px] text-[#333333]">
            {category}
          </span>
        </h1>
        <div className="flex items-start flex-wrap gap-[35px] mt-[30px] " >
          {data?.map((item) => (
            <Item key={item.id} {...item} category={category}/>
          ))}
        </div>
      </div>
    </section>
  );
};
