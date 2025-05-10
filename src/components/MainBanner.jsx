import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const MainBanner = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  const handleExploreDeals = () => {
    navigate("/products");
  };

  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="main banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="main banner"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-20 md:pb-0 px-4 md:pl-18 lg:pl-24 text-center md:text-left">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-16 text-black">
          Glow Up Your Space – Discover Scented Luxury.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-6 font-medium">
          <button
            onClick={handleShopNow}
            className="px-7 py-3 bg-primary hover:bg-primary-dull transition-all duration-300 rounded text-white flex items-center gap-2"
          >
            Shop Now
            <img
              className=" md:hidden transition group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </button>

          <button
            onClick={handleExploreDeals}
            className=" group hidden md:flex items-center gap-2 px-7 py-3 cursor-pointer"
          >
            Explore Deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
