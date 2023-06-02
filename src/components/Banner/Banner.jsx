import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Banner.css'

const Banner = () => {
  return (
    <div className="text-center">
        
      <Carousel>
        <div className="banner">
          <img src="../../../public/image/banner1.jpg" />
        </div>
        <div className="banner">
          <img src="../../../public/image/banner2.jpg" />
        </div>
        <div className="banner">
          <img src="../../../public/image/banner3.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
