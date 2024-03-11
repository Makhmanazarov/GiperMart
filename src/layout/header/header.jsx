import React from "react";
import { PhoneIcon } from "../../assets/icons/phone-icon";
import logo from "../../assets/img/logo.png";
import { ProfileIcon } from "../../assets/icons/profile-icon";
import { UserIcon } from "../../assets/icons/user-icon";
import { BucketIcon } from "../../assets/icons/bucket-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { HamburgerIcon } from "../../assets/icons/hamburger-icon";
import { SearchIcon } from "../../assets/icons/search-icon";
import useDebounce from "../../hook/useDebounse";
import { Modal } from "../../components/modal/modal";
import { useGetCategory } from "../../pages/home/service/query/useGetCategory";
import { CategoryItem } from "../../components/category_button/category-item";
import { Link, useParams } from "react-router-dom";
import { useGetAllData } from "../../pages/home/service/query/useGetAllData";

export const Header = () => {
  const [value, setValue] = React.useState("");
  const search = useDebounce(value);
  const { data, isLoading } = useGetAllData(search);
  const { data: categoryData } = useGetCategory();
  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="" >
      <div className=" xl:bg-[#FCFCFC] md:bg-[#FCFCFC] ">
        <div className="container">
          <div className=" xl:py-[8px] md:py-[8px] sm:pt-[30px] sm:flex sm:items-center sm:justify-between  md:flex md:items-center md:justify-end md:gap-[35px] ">
            <button className="md:hidden">
              <UserIcon />
            </button>
            <div className="w-[81px] h-[46px] md:hidden">
              <img src={logo} alt="img" />
            </div>
            <div className="flex items-center gap-[20px] md:hidden ">
              <HeartIcon />
              <BucketIcon />
            </div>
            <ul className=" sm:hidden xl:flex xl:items-center xl:gap-[24px] md:flex md:items-center md:gap-[20px] ">
              <li>
                <a
                  className=" font-Jost font-normal text-4 text-[#211A1A] hover:text-[#FF2947] "
                  href="#"
                >
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a
                  className=" font-Jost font-normal text-4 text-[#211A1A] hover:text-[#FF2947] "
                  href="#"
                >
                  Пункты выдачи
                </a>
              </li>
              <li>
                <a
                  className=" font-Jost font-normal text-4 text-[#211A1A] hover:text-[#FF2947] "
                  href="#"
                >
                  Поддержка
                </a>
              </li>
            </ul>
            <div className=" sm:hidden xl:flex xl:items-center xl:gap-[20px] md:flex md:items-center md:gap-[15px] ">
              <PhoneIcon />
              <p className=" font-Jost font-normal text-[14px] text-[#211A1A] hover:text-[#FF2947]">
                +998 88 953 33 43
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="flex items-center justify-between py-[18px]">
            <Link to="/">
              <div className="w-[120px] h-[70px]">
                <img src={logo} alt="img" />
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="pt-[18px] pr-[45px] pb-[18px] pl-[15px] flex items-center gap-[15px] font-Jost font-medium text-5 text-[#fff] bg-[#ff2947] rounded-[3px] "
            >
              <HamburgerIcon />
              Каталог
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <h3 className=" font-Jost font-semibold text-center text-[20px] text-[#000]">
                Categorys
              </h3>
              <div className="flex items-center flex-wrap justify-center gap-[20px]">
                {categoryData?.map((item) => (
                  <CategoryItem
                    key={item.id}
                    category={item.datakey}
                    img={item.img}
                    title={item.title}
                  />
                ))}
              </div>
            </Modal>
            <form className="relative max-w-[675px] w-[100%]">
              <input
                className="w-[100%] p-[16px] border-[1px] border-[#857372] outline-[#FF2947] font-Jost font-medium text-[20px] text-[#211A1A] rounded-[3px] "
                placeholder="Поиск"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
              />

              <button className=" absolute top-[20px] right-[20px]">
                <SearchIcon />
              </button>
            </form>

            {value.length >= 2 ? (
                <div className=" absolute top-[130px] right-[200px] left-[455px] w-[675px] h-[400px] overflow-y-scroll over p-[15px] bg-[#fff] rounded-[12px] z-50 ">
                {data?.map((item) => (
                <Link to={`${item.category}/${item.id}`} onClick={(e)=> setValue(e.target.reset()) } >
                  <div key={item.id} className=" border-[1px] border-[#FF2947] rounded-[3px] mb-[10px] p-[10px] flex items-center gap-[30px]">
                  <img
                    className="w-[60px] h-[60px]"
                    src={item?.img}
                    alt="img"
                  />
                  <h3>{item?.title}</h3>
                </div>
                </Link>
                ))}
                {!data?.length && (
                  <div className="flex items-center justify-center" >
                     <h1 className=" font-Jost font-semibold text-[24px] text-[#FF2947]" >Not Found</h1>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            <div className="flex items-center gap-[32px]">
              <div className="flex justify-center items-center flex-col gap-[6px] group hover:text-[#FF2947] ">
                <button>
                  <ProfileIcon />
                </button>
                <p className=" font-Jost text-[16px] font-medium text-[#211A1A] group-hover:text-[#FF2947] ">
                  Войти
                </p>
              </div>
              <div className="flex justify-center items-center flex-col gap-[6px] group hover:text-[#FF2947] ">
                <button>
                  <HeartIcon />
                </button>
                <p className=" font-Jost text-[16px] font-medium text-[#211A1A] group-hover:text-[#FF2947]">
                  Избранное
                </p>
              </div>
              <div className="flex justify-center items-center flex-col gap-[6px] group hover:text-[#FF2947] ">
                <button>
                  <BucketIcon />
                </button>
                <p className=" font-Jost text-[16px] font-medium text-[#211A1A] group-hover:text-[#FF2947]">
                  Корзина
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
