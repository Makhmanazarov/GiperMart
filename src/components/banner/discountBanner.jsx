import Slider from "react-slick";
import { useGetTodo } from "../../pages/home/service/query/useGetTodo";

const settingsMain = {
  infinite: true,
  speed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 15000,
  arrows: false,
};

export const DiscountBanner = () => {
  const { data: bannerData } = useGetTodo();
  return(
    <Slider {...settingsMain}>
    {bannerData?.slice(3, 6)?.map((item) => (
      <div key={item.id}>
        <img
          className="w-[500px] h-[190px] pl-[24px]"
          src={item.img}
          alt="img"
        />
      </div>
    ))}
  </Slider>
  )
};
