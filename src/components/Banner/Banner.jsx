import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Banner.css'

const Banner = () => {
  return (
    <div>
        
      <Carousel>
        <div className="banner">
          <img src="../../../public/image/banner1.jpg" />
          <p className=" position-absolute top-50 start-50 text-white fw-bold fs-1 z-1">Welcome to Movies world</p>
        </div>
        <div className="banner">
          <img src="../../../public/image/banner2.jpg" />
          <p className="position-absolute top-50 start-50 text-white fw-bold fs-1 z-1">Legend 2</p>
        </div>
        <div className="banner">
          <img src="../../../public/image/banner3.jpg" />
          <p className="position-absolute top-50 start-50 text-white fw-bold fs-1 z-1">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
