import React from "react";
import { slider_List, images } from "../../assets/assets.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { FaArrowRight } from "react-icons/fa";


function Carousal() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrow:true,
  };


  return (
    <div>
        <div className="px-6">
        <Slider {...settings}>
        
            {
              slider_List.map((item, index)=>(
                <div key={index} className='w-full !flex mt-1'>

                  <div className='md:w-1/2 flex items-center h-100 w-100  md:h-150 md:w-185 text-[10px] md:text-2xl font-semibold px-10' style={{ backgroundImage: `url(${images.b1})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                  <ul>
                    <li>{item.title}</li>
                    <li>{item.title2}</li>
                    <li>{item.title3}</li>
                    <li>{item.title4}</li>
                    <button className="bg-gray-900 text-white py-2 px-7 flex items-center shadow-xl hover:scale-110 mt-2">Buy now&nbsp; <FaArrowRight />
                    </button>
                  </ul>
                  
                  </div>

                  <div className='md:w-1/2'>
                  <img src={item.img} alt='clothes' className='md:h-150 md:w-185 h-100 w-100'/>
                  </div>                  

                </div>
              ))
            }
            </Slider>

        </div>
    </div>
  )
}

export default Carousal