import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Explore from "./Components/Explore";
import Journy from "./Components/Journy";
import Companies from "./Components/Companies";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import About from "./Components/About";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
      <Banner />
      <Explore/>
      <Journy/>
      <Companies/>
      <SectionTwo/>
      <SectionThree/>
      <About/>
      <Footer/>
    </div>
  );
};

export default App;
