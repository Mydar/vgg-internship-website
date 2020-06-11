import React from "react";
import './LandingPage.css';
import { Nav, Navbar} from "react-bootstrap";



 const NavBar=() => {
  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" className="background" style={{position: "fixed", width: "100%", zIndex: "2", height: "70px"}}>
      <Navbar.Brand href="/">
      <img  style={{width:"200px", textAlign: "center"}}  src="https://res.cloudinary.com/dev-sam/image/upload/v1590685777/we7l1ttvgs6btbvuilvt.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: "white"}}/>
      <Navbar.Collapse id="responsive-navbar-nav" style={{zIndex: "1", backgroundColor: "inherit"}}>
        <Nav className="ml-auto pointer">
          <Nav.Link className="text-white text" href="/">Home</Nav.Link>
          <Nav.Link className="text-white text" href="/registration-form">Register</Nav.Link>
          <Nav.Link className="text-white text" href="/join-the-mission">Join The Mission</Nav.Link>
          <Nav.Link className="text-white text" href="/facilitators">Tutors</Nav.Link>
          <Nav.Link className="text-white text" href="/past-interns">Past Interns</Nav.Link>
          <Nav.Link className="text-white text" href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;