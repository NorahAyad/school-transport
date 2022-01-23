import React from "react";
import "../style/header.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark" className="zIndex">
        <Navbar.Brand className="ms-5" href="#home">
          <img
            className="logo"
            alt="erro"
            src={"https://vstedu.azureedge.net/v9/img/logo_latest.png?v=14"}
          />
        </Navbar.Brand>
        <Nav className="me-auto" style={{ paddingLeft: "37%" }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="/login">login</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
