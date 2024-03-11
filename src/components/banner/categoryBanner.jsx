import { CategoryItem } from "../../components/category_button/category-item"
import { useGetCategory } from "../../pages/home/service/query/useGetCategory";
import Slider from "react-slick";

const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:5000,
    
    pauseOnHover: true,
  };

  export const CategoryBanner = () => {
    const { data : categoryData} = useGetCategory();
    return (
        <Slider {...settings}>
        {categoryData?.map((item) => (
          <CategoryItem key={item.id} category={item.datakey} img={item.img} title={item.title} />
        ))}
      </Slider>
    )
  }
  