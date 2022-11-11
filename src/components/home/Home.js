import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import ParticlesBg from "particles-bg";

import PlaceholderLoader from "../partials/PlaceholderLoader";

function Home() {
  const homeStyle = {
    height: "93vh",
    //backgroundImage: "url('/images/hero-bg.jpg')",
  };

  const textContentStyle = {
    padding: "7em",
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadingTime = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      clearTimeout(loadingTime);
    };
  }, []);

  if (isLoading) {
    return <PlaceholderLoader isLoading={isLoading} />;
  }

  return (
    <div className="p-5 text-center bg-image" style={homeStyle}>
      <ParticlesBg type="cobweb" bg={true} />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white" style={textContentStyle}>
            <h1 className="mb-3">Lorem Ipsum</h1>
            <h5 className="mb-4">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </h5>
            <hr />
            <p>
              Praesent eu quam condimentum, hendrerit nunc vitae, finibus lacus.
              Aliquam in dolor ligula. In hac habitasse platea dictumst. Aenean
              suscipit, nulla in rutrum blandit, quam elit hendrerit lorem, quis
              euismod ipsum lacus quis eros. Morbi tincidunt ultrices congue.
              Nulla fringilla posuere diam, semper pharetra tellus maximus non.
              Nullam lobortis quam in orci tincidunt ullamcorper. Etiam justo
              purus, elementum non quam sed, lobortis commodo risus. Duis a diam
              dui. Sed ut sem vel dui ullamcorper pellentesque. Nam ut nulla
              erat. Nulla non nisi vulputate, pharetra tortor sit amet,
              consequat sem.
              <br />
              <br />
              Praesent eu quam condimentum, hendrerit nunc vitae, finibus lacus.
              Aliquam in dolor ligula. In hac habitasse platea dictumst. Aenean
              suscipit, nulla in rutrum blandit, quam elit hendrerit lorem, quis
              euismod ipsum lacus quis eros. Morbi tincidunt ultrices congue.
              Nulla fringilla posuere diam, semper pharetra tellus maximus non.
              Nullam lobortis quam in orci tincidunt ullamcorper. Etiam justo
              purus, elementum non quam sed, lobortis commodo risus. Duis a diam
              dui. Sed ut sem vel dui ullamcorper pellentesque. Nam ut nulla
              erat. Nulla non nisi vulputate, pharetra tortor sit amet,
              consequat sem.
            </p>
            <hr />
            <MDBBtn className="m-2" size="lg" color="light" rippleColor="light">
              <Link to="/product-services">Learn More</Link>
            </MDBBtn>
            <MDBBtn
              className="m-2"
              outline
              size="lg"
              color="info"
              rippleColor="info"
            >
              <Link to="/contact-us" className="text-white">
                Contact Us
              </Link>
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
