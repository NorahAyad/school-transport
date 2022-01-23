import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../style/services.css";

import { BiTimeFive, BiCurrentLocation } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAssistantDirection } from "react-icons/md";
const Services = () => {
  return (
    <>
      <Container
        className="mt-5  z-index3"
        id="services"
        style={{ padding: "91px", top: "60%" }}
      >
        <div className=" ms-5  text-center ">
          <h1>Features </h1>
          <hr />
        </div>
        <Row>
          <Col sm={12} md={9} lg={5} className="text-center   cards m-2">
            <BiTimeFive size={"2rem"} color={"#09cab8"} className="mb-3" />
            <h4>shortening time</h4>
            <p>Shortening time by knowing who won't go to school</p>
          </Col>
          <Col sm={12} md={5} lg={3} className="text-center cards m-2">
            <BiCurrentLocation
              size={"2rem"}
              color={"#09cab8"}
              className="mb-3"
            />
            <h4>Location</h4>

            <p>
              The possibility of adjusting the location in the event of a change
              in the location of the residence without the need to attend school
            </p>
          </Col>
          <Col sm={12} md={5} lg={3} className="text-center m-2 cards">
            <CgWebsite size={"2rem"} color={"#09cab8"} className="mb-3" />
            <h4>Website</h4>

            <p>
              Through the website, the driver is constantly informed of
              attendance
            </p>
          </Col>
          <Col sm={12} md={5} lg={3} className="text-center m-2  cards">
            <MdOutlineAssistantDirection
              size={"2rem"}
              color={"#09cab8"}
              className="mb-3"
            />
            <h4>easy</h4>

            <p>Ease of student access to service</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
