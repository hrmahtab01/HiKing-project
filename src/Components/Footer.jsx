import React from "react";
import { CiMail } from "react-icons/ci";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaSquareInstagram,
} from "react-icons/fa6";
import FooterLogo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="md:py-[118px] md:pb-[42px] py-10 pb-10 bg-[#ECF3FF]">
      <div className="max-w-container mx-auto">
        <div className="">
          <h2 className="font-semibold font-poppins text-Primary text-[40px] leading-[64px] max-w-[575px] mx-auto text-center">
            Subscribe to Our Newsletter For Weekly Article Update.
          </h2>
          <p className="text-lg font-normal font-poppins text-SecondDary max-w-[637px] leading-[26px] mx-auto mt-[30px] text-center">
            We have hiking-related blog so we can share our thought and rutinity
            in our blog that updated weekly. We will not spam you, we promise.
          </p>
          <div className="md:flex md:justify-center md:gap-5 md:mt-[76px] md:flex-row mt-6 flex flex-col justify-center items-center gap-3 md:mb-[98px]">
            <div className="relative">
              <input
                className="py-[16px] pl-[66px] md:pr-[174px] pr-[40px] rounded-[50px] text-base font-poppins font-normal text-ThidrColor placeholder:text-ThidrColor border-[1px] border-ThidrColor outline-ThidrColor relative"
                type="text"
                placeholder={`Enter your e-mail address`}
              />
              <CiMail className="text-[26px] absolute left-6 top-4 text-ThidrColor" />
            </div>
            <div>
              <button className="py-[15px] px-[40px] border border-ThidrColor text-ThidrColor text-lg font-semibold font-poppins hover:bg-ThidrColor hover:text-[#FFFFFF] duration-300 rounded-[40px] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-[130px]">
          <div className="mt-10 md:mt-0 ">
            <img src={FooterLogo} alt="footer logo" />
            <p className="text-xl font-normal font-poppins text-SecondDary max-w-[341px] mt-4">
              We envision a world where everyone feels welcome in the American
              hiking community.
            </p>
            <div className="flex gap-7 mt-12">
              <div className="w-[50px] h-[50px] bg-ThidrColor flex flex-col justify-center items-center rounded-full">
                <FaFacebook className="text-xl text-[#fff]" />
              </div>
              <div className="w-[50px] h-[50px] bg-ThidrColor flex flex-col justify-center items-center rounded-full">
                <FaXTwitter className="text-xl text-[#fff]" />
              </div>
              <div className="w-[50px] h-[50px] bg-ThidrColor flex flex-col justify-center items-center rounded-full">
                <FaSquareInstagram className="text-xl text-[#fff]" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-10 md:mt-0">
            <div>
              <h3 className="text-xl font-medium font-poppins text-Primary mb-[24px]">
                Location
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  America
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Asia
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Europe
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Africa
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium font-poppins text-Primary mb-[24px]">
                Contact
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  About Me
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Teams
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Profile
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  FAQ
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium font-poppins text-Primary mb-[24px]">
                Legals
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Privacy
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Disclaimer
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Terms
                </li>
                <li className="text-lg font-normal font-poppins text-SecondDary">
                  Company
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-xl font-poppins font-normal text-SecondDary">Copyright © 2021. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
