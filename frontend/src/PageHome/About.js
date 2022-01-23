import React from "react";
import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <>
      <Container
        id="about"
        style={{ zIndex: "999", position: "absolute", top: "105%" }}
      >
        <div className=" ms-5  text-center ">
          <h1>About </h1>
          <hr className="hrAbout" />
          <p  className="text-center ">
            School transportation is a daily process from home to school and
            then back from school to home, and therefore it is necessary that
            this process be carried out safely in order to preserve the lives of
            students
          </p>
        </div>
      </Container>
      <Container
        id="header"
        style={{
          zIndex: "999",
          position: "absolute",
          top: "35%",
          left: "-24%",
        }}
      >
        <div className=" ms-5  text-center ">
          <h1>School Transport </h1>
          <p  className="text-center ">
            Providing a safe means of transportation and maintaining <br />
            the safety of students
          </p>
        </div>
      </Container>
    </>
  );
};
export default About;
