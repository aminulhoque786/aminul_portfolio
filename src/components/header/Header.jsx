import React, { useState, useEffect } from "react";

import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

import img3 from "../../assets/react.webp";

const Header = () => {


  return (
    <section id="header">
      <Container>

        <Navbar expand="lg" className="menu">
          <Container>
            <div className="yahoo">
              <img src={img3} alt="" />
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link className="" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link href="#price">About</Nav.Link>
                <Nav.Link href="#experience">Services</Nav.Link>
                <Nav.Link href="#skill">Protfolio</Nav.Link>
                <Nav.Link href="#client">Blog</Nav.Link>
                <Nav.Link href="#talk">Contact</Nav.Link>
              </Nav>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <button className="hire-me-button">Hire Me</button>
                  </div>
                  <div className="flip-card-back">
                    <button className="hire-me-button">Contact Me Now!</button>
                  </div>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </section>
  );
};

export default Header;
