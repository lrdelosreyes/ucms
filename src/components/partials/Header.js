import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <>
      <Navbar className="p-3 fixed-top">
        <Container>
          <Link to="/" className="navbar-brand">
            <img
              src="/ucms-logo.png"
              width="70"
              className="d-inline-block align-top"
              alt="UCMS Logo"
            />
          </Link>
          <Nav className="me-auto text-white ps-5">
            <Link to="/" className="nav-link text-white fs-5">
              Home
            </Link>
            <Link
              to="/product-services"
              className="nav-link text-white fs-5 ms-2"
            >
              Products & Services
            </Link>
            <Link to="/about" className="nav-link text-white fs-5 ms-2">
              About
            </Link>
          </Nav>
          <Link
            className="d-flex btn btn-outline-light btn-danger"
            to="/contact-us"
          >
            Contact Us
          </Link>
          <Link className="btn btn-outline-light ms-3" to="/login">
            Login
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
