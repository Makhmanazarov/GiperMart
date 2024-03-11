import React from "react";
import logo from "../../assets/img/logo.png";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { OdnoklassnikIcon } from "../../assets/icons/odnoklassnik-icon";
import { InstagramIcon } from "../../assets/icons/instagram-icon";
import { WkIcon } from "../../assets/icons/wk-icon";
import { YoutubeIcon } from "../../assets/icons/youtube-icon";
import { HumoIcon } from "../../assets/icons/humo-icon";
import { PaymeIcon } from "../../assets/icons/payme-icon";
import { UzcardIcon } from "../../assets/icons/uzcard-icon";
export const Footer = () => {
  return (
    <footer>
      <div className="pt-[40px] pb-[36px] bg-[#F5F5F6]">
        <div className="container">
          <div className=" flex items-start justify-between">
            <div className=" flex flex-col text-left">
              <div className="w-[165px] h-[65px] mb-[16px]">
                <img src={logo} alt="img" />
              </div>
              <div className="mt-[16px] mb-[12px]">
                <strong className=" font-Jost font-medium text-[21px] text-[#333333] mb-[2px] ">
                  +998 88 953 33 43
                </strong>
                <p className=" font-Jost font-normal text-[14px] text-[#333333] ">
                  справочная служба
                </p>
              </div>
              <div className="mb-[16px]">
                <strong className=" font-Jost font-medium text-[21px] text-[#333333] mb-[2px] ">
                  +998 88 953 33 43
                </strong>
                <p className=" font-Jost font-normal text-[14px] text-[#333333]">
                  интернет-магазин
                </p>
              </div>
              <div>
                <strong className=" font-Jost font-semibold text-[14px] text-[#333333] ">
                  Оставайтесь на связи
                </strong>
                <div className="flex items-center gap-[16px] mt-[8px]">
                  <FacebookIcon />
                  <OdnoklassnikIcon />
                  <WkIcon />
                  <YoutubeIcon />
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left gap-[16px]">
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Условия обмена и возврата
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Каталог
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                О компании
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Контакты
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Доставка
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Оплата
              </a>
            </div>
            <div className="flex flex-col text-left gap-[16px]">
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Клиентам
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Личный кабинет
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-medium text-[14px] text-[#333333]"
                href="#"
              >
                Блог
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Обратная связь
              </a>
            </div>
            <div className="flex flex-col text-left gap-[16px]">
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Информация
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Пользовательское соглашение
              </a>
              <a
                className=" hover:text-[#FF2947] font-Jost font-normal text-[14px] text-[#333333]"
                href="#"
              >
                Политика конфиденциальности и оферта
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[23px] bg-[#EAEAEA]">
        <div className="container">
          <div className=" flex items-center justify-between">
            <p className=" font-Jost font-normal text-[14px] text-[#333333 ]">
              © 2022 Любое использование контента без письменного разрешения
              запрещено
            </p>
            <div className="flex items-center gap-[25px]">
              <PaymeIcon />
              <UzcardIcon />
              <HumoIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
