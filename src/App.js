import React from "react";
import { Nav, Navbar , Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Who from "./components/WhoIsMe/Who";
import './app.scss'
import Me from "./components/AboutMe/Me";
import MySkills from "./components/Skills/MySkills";
import Project from "./components/PhysicalComputing/Project";
import Exp from "./components/Experience/Exp.js";
import Lang from "./components/Languages/Lang.js";
import Edu from "./components/Educations/Edu";

function app() {
  return (
    <>
      <div className="navCon">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div><Who/></div>
      <div><Me/></div>
      <div><MySkills/></div>
      <div><Project/></div>
      <div><Exp/></div>
      <div><Lang/></div>
      <div><Edu/></div>
    </>
  );
}

export default app;