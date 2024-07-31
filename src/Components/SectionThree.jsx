import React from "react";
import couple3 from "../assets/couple three.png";
import sectionimage from "../assets/Section 3.png"

const SectionThree = () => {
  return (
    <section
      className="bg-cover bg-center w-full  bg-no-repeat md:mb-[130px]"
      style={{ backgroundImage: `url(${sectionimage})` }}
    >
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[145px] md:mt-[130px] gap-10">
          <div className="md:mt-0 mt-10">
            <img
              className="md:w-[487px] md:h-[622px] w-[347px] h-[422px] mx-auto md:mx-0"
              src={couple3}
              alt="couple 2"
            />
          </div>
          <div className="md:mt-[100px] text-center md:text-start">
            <h2 className="md:text-6xl text-[40px] font-semibold font-poppins text-Primary l">
            Let’s Enjoy Nature With Us
            </h2>
            <p className="text-[22px] font-normal  font-poppins text-SecondDary leading-[146%] max-w-[374px] mt-3 mx-auto md:mx-0">
              Volunteer trail stewardship projects in America’s parks and
              forests designed specifically for college student groups and young
              professionals.
            </p>
            <button className="py-[15px] px-[40px] border border-ThidrColor text-ThidrColor text-lg font-semibold font-poppins hover:bg-ThidrColor hover:text-[#FFFFFF] duration-300 rounded-[40px] mt-8">
            Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
