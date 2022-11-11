import React, { useState, useEffect } from "react";

import ParticlesBg from "particles-bg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import PlaceholderLoader from "../partials/PlaceholderLoader";

function ProductServices() {
  const pageStyle = {
    height: "93vh",
    //backgroundImage: "url('/images/hero-bg.jpg')",
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
    <>
      <ParticlesBg type="cobweb" bg={true} />
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <MDBCarousel showControls showIndicators style={pageStyle}>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"
            alt="..."
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
            alt="..."
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg"
            alt="..."
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>{" "}
      </div>
    </>
  );
}

export default ProductServices;
