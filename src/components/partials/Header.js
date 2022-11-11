import { useState } from "react";
import { Link } from "react-router-dom";

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

function Header() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <header>
      <MDBNavbar fixed="top" expand="lg" className="px-4 bg-dark bg-gradient">
        <MDBContainer fluid>
          <Link to="/" className=" text-white">
            <MDBNavbarBrand className="me-5">
              <img src="/ucms-logo.png" height="50" alt="" loading="lazy" />
            </MDBNavbarBrand>{" "}
          </Link>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavText(!showNavText)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavText}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <Link to="/">
                  <MDBNavbarLink aria-current="page" className="text-white">
                    Home
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="product-services">
                  <MDBNavbarLink className="text-white">
                    Products & Services
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/about">
                  <MDBNavbarLink className="text-white">About</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <Link to="/contact-us">
              <MDBBtn className="mx-2 bg-primary bg-gradient">Contact</MDBBtn>
            </Link>

            <Link to="/login">
              <MDBBtn outline className="mx-2" color="light">
                Login
              </MDBBtn>
            </Link>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default Header;
