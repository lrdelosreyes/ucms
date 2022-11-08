import React, { useState, useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";

import PlaceholderLoader from "../partials/PlaceholderLoader";

function ProductServices() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadingTime = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      clearTimeout(loadingTime);
    };
  }, []);

  return (
    <>
      <PlaceholderLoader isLoading={isLoading} />
      {isLoading === false && (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-img-1.svg"
              alt="First slide"
              height={820}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-img-2.svg"
              alt="Second slide"
              height={820}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/carousel-img-3.svg"
              alt="Third slide"
              height={820}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}

export default ProductServices;
