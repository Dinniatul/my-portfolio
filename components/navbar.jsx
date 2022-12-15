import React from "react";
import { Navbar } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Navbar className=" bg-blue-900 shadow-lg" fluid={true}>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">PORTFOLIO</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-white scroll-smooth" duration={500} href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white scroll-smooth" duration={500} href="#about">
          About
        </Navbar.Link>
        <Navbar.Link className="text-white" duration={500} href="#skills">
          Skills
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#project">
          Project
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
