import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-bootstrap/Fade";

import PlaceholderLoader from "../partials/PlaceholderLoader";

function Home() {
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
      <Fade in={!isLoading} timeout="500">
        <Card className="border-0">
          <Card.Img src="/images/hero-bg.jpg" alt="Card image" height={840} />
          <Card.ImgOverlay className="p-5">
            <Row className="mt-5 px-5">
              <Col>
                <h1>Ready to dive in?</h1>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ac ipsum eu diam fringilla vestibulum. Nulla interdum
                  eleifend urna, eu posuere ex condimentum nec. Mauris
                  ullamcorper lectus odio, eu efficitur velit sagittis vitae.
                  Phasellus iaculis neque scelerisque quam mollis hendrerit nec
                  at nulla. Morbi eleifend lobortis vestibulum. Duis vehicula
                  mauris ac ipsum mollis gravida. Etiam accumsan, orci quis
                  vulputate pulvinar, felis orci pulvinar sem, sit amet
                  convallis nibh felis vitae quam.
                  <br />
                  <br />
                  Sed eu ex turpis. Ut id orci feugiat, condimentum metus ut,
                  porta nisi. Quisque tellus erat, euismod sed dui sed, vehicula
                  posuere lectus. Aliquam id est ac nibh vehicula pharetra.
                  Donec rhoncus vestibulum eros, at interdum arcu tristique ac.
                  Pellentesque non nunc blandit, faucibus eros ultrices, semper
                  justo. Quisque molestie nibh felis, sit amet scelerisque
                  ligula aliquet eget. In felis nulla, efficitur tincidunt
                  aliquam id, fringilla eu justo. Nam venenatis odio vitae
                  congue malesuada.
                </Card.Text>
                <br />
                <hr />
                <br />
                <Row>
                  <Col>
                    <Link
                      to="/product-services"
                      className="btn btn-lg btn-secondary rounded-0 w-100"
                    >
                      Learn More
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to="/contact-us"
                      className="btn btn-lg btn-outline-danger rounded-0 w-100"
                    >
                      Contact Us
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Card.ImgOverlay>
        </Card>
      </Fade>
    </>
  );
}

export default Home;
