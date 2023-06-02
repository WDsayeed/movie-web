import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Banner.css'

import img1 from '../../assets/image/banner1.jpg'
import img2 from '../../assets/image/banner2.jpg'
import img3 from '../../assets/image/banner3.jpg'

const Banner = () => {
  return (
    <div className="text-center">
        
      <Carousel>
        <div className="banner">
          <img src={img1} />
        </div>
        <div className="banner">
          <img src={img2} />
        </div>
        <div className="banner">
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
