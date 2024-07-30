import React, { useState } from "react";
import Icon1 from "../assets/icon one.png";
import Icon2 from "../assets/icon two.png";
import Icon3 from "../assets/icon three.png";

const ExploreData = [
  {
    id: 1,
    title: "Secret Locations",
    desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    image: Icon1,
    more: "Read more",
  },
  {
    id: 2,
    title: "Safe Adventure",
    desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    image: Icon2,
    more: "Read more",
  },
  {
    id: 3,
    title: "Professional Hikers",
    desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    image: Icon3,
    more: "Read more",
  },
];
const Explore = () => {
 
  return (
    <div className=" mt-[80px] mb-[56px]">
      <div className="max-w-container mx-auto">
        <div className="bg-[#FBFEFF] py-[62px] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[102px] gap-16 mt-64 lg:mt-0 sm:mt-0 md:mt-0 place-items-center lg:place-items-start">
          {ExploreData.map((data) => (
            <div className="flex flex-col w-[280px] h-[280px]">
              <div >
                <img className="w-[78px] h-[78px]" src={data.image} alt="" />
                <h2 className="font-semibold text-2xl font-poppins text-Primary mt-7">
                  {data.title}
                </h2>
              </div>
              <div className="mt-3">
                <p className="text-lg font-normal font-poppins text-SecondDary">
                  {data.desc}
                </p>
              </div>
              <div className="w-28">
                <p className="text-FourColor text-lg font-normal font-poppins hover:border-b-2  duration-200 cursor-pointer">
                  {data.more}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <h3 className="text-lg font-normal font-poppins text-SecondDary text-center mt-[76px]">
          Don’t hesitate to contact us to get better Information. <span className="font-bold text-FourColor">EXPLORE ALL
          TREKKING.</span>
        </h3>
      </div>
    </div>
  );
};

export default Explore;
