import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

const HomePage = () => {
  const unleasharray = [
    {
      id: 1,
      title: "TOPS",
      shop: "Shop Now",
      image:
        "https://www.montecarlo.in/cdn/shop/files/Women_tops.jpg?v=1696082662",
    },
    {
      id: 2,
      title: "TOPS",
      shop: "Shop Now",
      image:
        "https://www.montecarlo.in/cdn/shop/files/Girls_top.jpg?v=1696082865",
    },
    {
      id: 3,
      title: "COATS",
      shop: "Shop Now",
      image:
        "https://www.montecarlo.in/cdn/shop/files/Women_coats.jpg?v=1696082908",
    },
    {
      id: 4,
      title: "JACKETS",
      shop: "Shop Now",
      image:
        "https://www.montecarlo.in/cdn/shop/files/Men_Jacket.jpg?v=1696082812",
    },
    {
      id: 5,
      title: "T-SHIRTS",
      shop: "Shop Now",
      image:
        "https://www.montecarlo.in/cdn/shop/files/Men_s_T-shirts_90641883-d883-4305-9ca8-65c9996c0d43.jpg?v=1696072521",
    },
  ];

  const [select, setSelect] = useState(
    "https://www.montecarlo.in/cdn/shop/files/Slide_02_Men.jpg?v=1711703261&width=2000"
  );
  const array = [
    {
      id: 1,
      title: "MEN",

      image:
        "https://www.montecarlo.in/cdn/shop/files/Slide_02_Men.jpg?v=1711703261&width=2000",
    },
    {
      id: 2,
      title: "WOMEN",

      image:
        "https://www.montecarlo.in/cdn/shop/files/Slide_02_Women.jpg?v=1711703274&width=2000",
    },
    {
      id: 3,
      title: "KIDS",

      image:
        "https://www.montecarlo.in/cdn/shop/files/Slide_02_Kids.jpg?v=1711703273&width=2000",
    },
    {
      id: 4,
      title: "FOOTWEAR",

      image:
        "https://www.montecarlo.in/cdn/shop/files/Slide_02_Footwear.jpg?v=1711703273&width=2000",
    },
    {
      id: 5,
      title: "HOME FURNISHING",

      image:
        "https://www.montecarlo.in/cdn/shop/files/Home_Furnishing_942e56a9-ffbc-4d9a-8a5f-387cdbe42ce7.jpg?v=1697879736&width=2000",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <>
      <div className="slider-container duration-1000">
        <Slider {...settings}>
          <div>
            <img
              src="https://www.montecarlo.in/cdn/shop/files/Footwear_Main_Banner.jpg?v=1707455294"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.montecarlo.in/cdn/shop/files/MC_Web_01.jpg?v=1711702679"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.montecarlo.in/cdn/shop/files/MC_Web_01-2.jpg?v=1711702679"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.montecarlo.in/cdn/shop/files/MC_Web_01-1.jpg?v=1711702679"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div
        className="p-10 h-[30rem]"
        style={{ backgroundImage: `url(${select})` }}
      >
        {array?.map((i) => {
          return (
            <p
              onMouseEnter={() => setSelect(i.image)}
              className="text-white pt-10 w-fit hover:underline text-4xl"
            >
              {i.title}
            </p>
          );
        })}
      </div>
      <div className="flex justify-between px-[10rem]">
        <div>
          <p className="text-blue-900 text-2xl font-bold">
            FLIRTING WITH SUMMER
          </p>
          <p>Checkout offers and deals on summer staples</p>
        </div>
        <div>
          <p className="text-blue-900 text-2xl font-bold">
            GET COZY WITH WINTER FAVOURITES
          </p>
          <p>Checkout offers and deals on winter staples</p>
        </div>
      </div>
      <div className="flex px-[3rem]  gap-5 justify-between">
        <div className="relative">
          <img
            src="https://www.montecarlo.in/cdn/shop/files/Summer.jpg?v=1697879822"
            alt=""
          />
          <p className="absolute bottom-10 left-7 p-2 w-[10rem] text-center bg-white text-black hover:bg-gray-400">
            Shop Now
          </p>
        </div>
        <div className="relative">
          <img
            src="https://www.montecarlo.in/cdn/shop/files/Winter.jpg?v=1697879822"
            alt=""
          />
          <p className="absolute bottom-10 left-7 p-2 w-[10rem] text-center bg-white text-black hover:bg-gray-400">
            Shop Now
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="text-2xl text-blue-900 font-bold">
            <p>UNLEASH YOUR</p>
            <p>INNER FASHIONISTA</p>
          </div>
          <div className="pt-8">
            <p>Discover the trendiest pieces</p>
            <p>handpicked just for you</p>
          </div>
        </div>
        <div className="grid grid-cols-5 relative">
          {unleasharray.map((i) => (
            <div>
              <img src={i.image} alt="" />
              <p className="absolute bottom-8 text-2xl text-white pl-20 font-bold">
                {i.title}
              </p>
              <p>{i.shop}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
