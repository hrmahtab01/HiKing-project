import React from "react";
import bannerimage from "../assets/couple one.png"
import bannerimageeee from "../assets/Header.png"
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <>
      <section className="h-screen object-cover w-full bg-cover bg-no-repeat lg:relative mb-10" style={{backgroundImage:`url(${bannerimageeee})`}}>
        <Navbar/>
      <div className="max-w-container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:relative lg:mt-28 mt-10 gap-6">
              <div>
                <h1 className="text-4xl lg:text-7xl font-semibold font-poppins text-Primary max-w-[640px] leading-[128%]">
                  Be prepared for the mountains and beyond.
                </h1>
                <p className="font-poppins font-medium text-SecondDary text-[22px] max-w-[459px] mt-3">
                  Are you looking for amazing hiking travel? Don’t worry! We got
                  it for you!
                </p>
                <div className="flex gap-7 mt-[50px]">
                  <button className="py-4 px-10 border border-[#3E82FC] text-ThidrColor font-poppins text-base md:text-lg font-semibold leading-tight rounded-[40px] hover:bg-ThidrColor hover:text-[#fff] duration-500">Contact Us</button>
                  <button className="py-4 px-10 border border-[#3E82FC] text-ThidrColor font-poppins text-base md:text-lg font-semibold leading-tight rounded-[40px] hover:bg-ThidrColor hover:text-[#fff] duration-300">
                    Watch Video
                  </button>
                </div>
              </div>
              <div className=" lg:absolute lg:buttom-[-100px]  lg:right-6 mt-10 lg:mt-0 ">
                <img className="w-[388px] h-[462px] mx-auto lg:w-[488px] lg:h-[662px] lg:mx-0" src={bannerimage} alt="banner img" />
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Banner;
