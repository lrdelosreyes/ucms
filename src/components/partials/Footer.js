import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Navbar className="p-2 fixed-bottom">
      <Container>
        <Nav.Item className="text-white text-center w-100 small">
          <small>© Lowil Ray Delos Reyes - All Rights Reserved 2022</small>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default Footer;
