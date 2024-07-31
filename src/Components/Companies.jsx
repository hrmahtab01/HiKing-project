import React from "react";
import travelAdvisor from "../assets/Travel Advisor.png";
import unitetravel from "../assets/United Travel.png";
import travelChannel from "../assets/Travel Channel.png";
import tripRaja from "../assets/triprajacom 1.png";
import Booking from "../assets/Booking.png";

const Companies = () => {
  return (
    <div className="mt-[64px] mb-[108px]">
      <div className="max-w-container mx-auto">
        <div className="text-center">
          <p className="text-xl text-ThidrColor font-medium font-poppins">
            Safe Journey
          </p>
          <h2 className="text-[40px] font-semibold font-poppins text-Primary">
            Trusted by Big Companies{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:mt-[114px] mt-[40px] place-items-center gap-6">
          <div className="">
            <img src={travelAdvisor} alt="travel advisor" />
          </div>
          <div className="">
            <img src={unitetravel} alt="unite travel" />
          </div>
          <div className="">
            <img src={travelChannel} alt="travel channel" />
          </div>
          
        </div>
        <div className="md:flex md:justify-center md:gap-[116px] md:mt-[80px] md:flex-row flex flex-col gap-6 justify-center items-center mt-[24px]">
        <div className="">
            <img src={tripRaja} alt="trip raja" />
          </div>
          <div className="">
            <img src={Booking} alt="Booking" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Companies;
