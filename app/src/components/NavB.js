import * as React from "react";
/** @jsxImportSource @emotion/react */

import InstagramIcon from "@material-ui/icons/Instagram";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../photos/bellaCharityLogo.png";

const NavB = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          alt="logo - paw in hand"
          css={{ maxHeight: "50px", width: "auto" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/adopt">Adoption Page</Nav.Link>
          <NavDropdown title="Quick Links" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
            <NavDropdown.Item href="/signup-form">
              Volunteer or Foster
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/terms-conditions">
              Terms & Conditions
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.instagram.com/thebellacharity/">
            <InstagramIcon />{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavB;
