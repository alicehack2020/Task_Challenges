import React from "react";
import img1 from "./icon/slider_image_1.jpg";
import img2 from "./icon/slider_image_2.jpg";
import img3 from "./icon/slider_image_3.jpg";
import img4 from "./icon/slider_image_4.jpg";
import img5 from "./icon/slider_image_5jpg";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const index = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex w-full justify-center p-4 lg:mt-4">
      <div className="">
        <div className="space-y-2 pt-14">
          <p className="h-6 w-1 bg-gray-500  rounded-full"></p>
          <p className="h-8 w-1 bg-gray-500  rounded-full"></p>
          <p className="h-8 w-1 bg-gray-500  rounded-full"></p>
        </div>
      </div>
      <div className="border-4 border-gray-500 lg:p-2 w-full  lg:w-1/5 rounded-3xl relative   overflow-x-hidden">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-10 w-1/2 border-b-2 border-x-2  border-gray-500 rounded-2xl"></div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2  w-1/2">
          <div className="w-full bg-white h-2.5"></div>
          <div className="flex gap-2 justify-center items-center">
            <p className="h-2 w-8 bg-gray-500 rounded-md"></p>
            <p className="h-2 w-2 bg-gray-500  rounded-full"></p>
          </div>
        </div>
        <div className="border-2 border-gray-500 rounded-2xl m-2 lg:m-0 lg:p-2 overflow-hidden ">
          <Slider {...settings} className="outline-none p-4 lg:p-2">
            <div className="outline-none">
              <Image src={img1} alt="" className="h-full w-full  " />
            </div>
            <div className="outline-none">
              <Image src={img2} alt="" className="h-full w-full" />
            </div>
            <div className="outline-none">
              <Image src={img3} alt="" className="h-full w-full  " />
            </div>
            <div className="outline-none">
              <Image src={img4} alt="" className="h-full w-full  " />
            </div>
            <div className="outline-none">
              <Image src={img5} alt="" className="h-full w-full  " />
            </div>
          </Slider>
        </div>
      </div>
      <div className="">
        <div className="space-y-2 pt-14">
          <p className="h-24 w-1 bg-gray-500  rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default index;
