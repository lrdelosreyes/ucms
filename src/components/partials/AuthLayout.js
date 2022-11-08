import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

const AuthLayout = () => {
  return (
    <>
      <Container className="pt-0 p-3">
        <Header />
        <Container className="p-5 mb-4 bg-light rounded-bottom-3">
          <Outlet />
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default AuthLayout;
