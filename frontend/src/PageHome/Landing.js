import React from "react";
import "../style/lander.css";
import { About } from "./About";
import Header from "./Header";
const Landing = () => {
  return (
    <>
      <div className="bg">
        <Header /> <About />
        <div className="overflow"></div>
      </div>
    </>
  );
};

export default Landing;
