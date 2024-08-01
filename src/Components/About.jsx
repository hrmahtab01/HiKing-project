import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Avarar from "../assets/avatar.png";
import { CiStar } from "react-icons/ci";

const About = () => {
  return (
    <div className="mt-[82px] mb-[98px]">
      <div className="max-w-container mx-auto">
        <div className="text-center">
          <p className="text-xl font-medium font-poppins text-ThidrColor">
            Happy Hikers
          </p>
          <h1 className="text-[40px] font-semibold font-poppins text-Primary mt-[12px]">
            Client’s Say About Us
          </h1>
        </div>
        <div className="md:mt-[116px] mt-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="bg-[#FFFFFF] shadow-md md:max-w-[726px] md:max-h-[394px] py-[20px] px-[25px] md:py-0 md:px-0 flex flex-col justify-center items-center mx-auto rounded-tl-[140px] rounded-br-[140px] mb-[10px] ">
                <img
                  className="mt-[52px] w-[154px] "
                  src={Avarar}
                  alt="avatar photo"
                />
                <p className="text-[24px] font-semibold font-poppins text-Primary mt-5">
                  Omar Gouse
                </p>
                <p className="text-lg text-[#FE2C54] font-normal font-poppins mt-1">
                  Happy Client
                </p>
                <p className="text-lg font-normal font-poppins text-SecondDary max-w-[612px] mx-auto mt-5 text-center">
                  “Everyone working in the office is very knowledgeable about
                  all types of dental work and options for your individual
                  needs.”
                </p>
                <ul className="flex justify-center gap-[6px] mb-[52px]">
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                </ul>
                <p></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] shadow-md md:max-w-[726px] md:max-h-[394px] py-[20px] px-[25px] mb-[10px] md:py-0 md:px-0 flex flex-col justify-center items-center mx-auto rounded-tl-[140px] rounded-br-[140px]">
                <img
                  className="mt-[52px] w-[154px] "
                  src={Avarar}
                  alt="avatar photo"
                />
                <p className="text-[24px] font-semibold font-poppins text-Primary mt-5">
                  Omar Gouse
                </p>
                <p className="text-lg text-[#FE2C54] font-normal font-poppins mt-1">
                  Happy Client
                </p>
                <p className="text-lg font-normal font-poppins text-SecondDary max-w-[612px] mx-auto mt-5 text-center">
                  “Everyone working in the office is very knowledgeable about
                  all types of dental work and options for your individual
                  needs.”
                </p>
                <ul className="flex justify-center gap-[6px] mb-[52px]">
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] shadow-md md:max-w-[726px] md:max-h-[394px] mb-[10px] py-[20px] px-[25px] md:py-0 md:px-0 flex flex-col justify-center items-center mx-auto rounded-tl-[140px] rounded-br-[140px]">
                <img
                  className="mt-[52px] w-[154px] "
                  src={Avarar}
                  alt="avatar photo"
                />
                <p className="text-[24px] font-semibold font-poppins text-Primary mt-5">
                  Omar Gouse
                </p>
                <p className="text-lg text-[#FE2C54] font-normal font-poppins mt-1">
                  Happy Client
                </p>
                <p className="text-lg font-normal font-poppins text-SecondDary max-w-[612px] mx-auto mt-5 text-center">
                  “Everyone working in the office is very knowledgeable about
                  all types of dental work and options for your individual
                  needs.”
                </p>
                <ul className="flex justify-center gap-[6px] mb-[52px]">
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                  <li className="text-3xl text-[#F4B600]">
                    <CiStar />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
