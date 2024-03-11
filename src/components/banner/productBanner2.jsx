import { Item } from "../../components/item/item";
import { RightNavigateIcon } from "../../assets/icons/right-navigate-icon";
import { LeftNavigateIcon } from "../../assets/icons/left-navigate-icon";
import { useGetLaptops } from "../../pages/home/service/query/useGetLaptops";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position: "absolute", top: "-60px", right: "25px" }}
      onClick={onClick}
    >
      <span>
        <RightNavigateIcon />
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position: "absolute", top: "-60px", left: "1255px" }}
      onClick={onClick}
    >
      <span>
        <LeftNavigateIcon />
      </span>
    </div>
  );
}

export const ProductBanner2 = () => {
  const { data: laptopsData } = useGetLaptops();
  return (
    <Slider {...settings}>
      {laptopsData?.map((item) => (
        <Item key={item.id} {...item} category="Laptops"/>
      ))}
    </Slider>
  );
};