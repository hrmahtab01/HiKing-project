import React from "react";
import JOurnyimage from "../assets/explore image.png";
import bgimage from "../assets/Section 1.png"

const Journy = () => {
  return (
    <div className="md:mt-[194px] mt-[100px] mb-[66px] w-full object-cover bg-no-repeat bg-cover bg-center " style={{backgroundImage:`url(${bgimage})`}}>
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[145px] gap-24 place-items-center">
          <div>
            <img className="md:w-[488px] md:h-[622px] w-[388px] h-[422px]" src={JOurnyimage} alt="" />
          </div>
          <div className="md:mt-[61px] text-center md:text-start">
            <h2 className=" max-w-[397px] md:text-[62px] text-4xl font-poppins font-semibold text-Primary leading-[128%] line-clamp-3">
              Safe, Affordable, And Trusted
            </h2>
            <p className="max-w-[374px] text-[22px] font-normal font-poppins text-SecondDary leading-[146%] mt-3">
              Volunteer trail stewardship projects in America’s parks and
              forests designed specifically for college student groups and young
              professionals.
            </p>
            <button className="py-[15px] px-[40px] border border-ThidrColor text-ThidrColor text-lg font-semibold font-poppins hover:bg-ThidrColor hover:text-[#FFFFFF] duration-300 rounded-[40px] mt-8">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journy;
