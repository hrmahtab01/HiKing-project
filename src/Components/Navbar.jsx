import React, { useState } from "react";
import Logoimage from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

const NavData = [
  {
    id: 1,
    title: "Location",
    link: "#",
  },
  {
    id: 2,
    title: "Blogs",
    link: "#",
  },
  {
    id: 3,
    title: "Testimonial",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  let [menubar, Setmenubar] = useState(false);

  let handlemenubar = () => {
    Setmenubar(!menubar);
  };
  return (
    <>
      <nav className="lg:py-10 py-5  relative ">
        <div className="max-w-container mx-auto ">
          <div className="flex justify-between items-center">
            <div>
              <img className="w-[147px]" src={Logoimage} alt="logo image" />
            </div>
            <div className="hidden md:block lg:block sm:block">
              <ul className="flex gap-[66px] sm:gap-10">
                {NavData.map((item) => (
                  <li className="font-poppins text-lg font-medium text-Primary">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:hidden  md:hidden sm:hidden">
              <FiMenu onClick={handlemenubar} className="text-3xl " />
              {menubar && (
                <div className="w-[300px] h-[300px] bg-[#ECF3FF] absolute right-1 top-20 rounded-md ">
                  <ul className="flex flex-col gap-4 justify-center items-center mt-4 ">
                    {NavData.map((data) => (
                      <li className="text-Primary text-lg font-medium font-poppins uppercase">{data.title}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
