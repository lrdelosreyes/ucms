import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Header />
        <Container fluid className="p-0 rounded-0" style={MainContainerStyle}>
          <Outlet className="h-100" />
        </Container>
        <Footer />
      </Container>
    </>
  );
};

const MainContainerStyle = {
  marginTop: "7em",
};

export default Layout;
