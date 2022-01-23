import React from "react";
import {  Container } from "react-bootstrap";
import "../style/footer.css";
const Footer = () => {
  return (
    <div className="parent text-light">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#29333a"
          fill-opacity="1"
          d="M0,96L120,106.7C240,117,480,139,720,138.7C960,139,1200,117,1320,106.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <Container
        id="header"
        style={{ zIndex: "999", position: "absolute", left: "3%", top: "81%" }}
      >
        <div className=" ms-5  text-center ">
          <p  className="text-center ">
            Copyright 2022 © Norah Al-otaib
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
