import { Outlet } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <MDBContainer fluid className="p-0" style={MainContainerStyle}>
        <Outlet />
        <Footer />{" "}
      </MDBContainer>
    </>
  );
};

const MainContainerStyle = {
  marginTop: "4.5em",
};

export default Layout;
