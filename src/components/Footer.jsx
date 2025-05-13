import React from "react";
import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 w-full md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img className="w-34 md:w-32" src={assets.logo} alt="logo" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline transition">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        <div className="container mx-auto px-4">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold"> Candle Cart</span>. All rights reserved.
          </p>
          <p className="text-xs md:text-sm mt-1">
            Designed & Developed with <span className="text-red-500">❤️</span>{" "}
            by <span className="font-medium">Arslan</span>
          </p>
        </div>
      </p>
    </div>
  );
};

export default Footer;
