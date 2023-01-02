import React, { useRef } from "react";
import OpenPage from "./Components/OpenPage";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.scss";
import AboutMe from "./Components/AboutMe";

function App() {
  const OpenCon = useRef(null);
  const AboutCon = useRef(null);
  const OpenClick = () => {
    OpenCon.current.scrollIntoView();
  };
  const AboutClick = () => {
    AboutCon.current.scrollIntoView();
  };
  return (
    <>
      <Navbar
        className="HeaderCon"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>Asadbek Alimov</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={OpenClick}>Home</Nav.Link>
              <Nav.Link onClick={AboutClick}>About</Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={OpenCon}>
        <OpenPage />
      </div>
      <div ref={AboutCon}>
        <AboutMe />
      </div>
    </>
  );
}

export default App;
