import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function PlaceholderLoader({ isLoading }) {
  return (
    <>
      {isLoading === true && (
        <Placeholder as={Card.Text} animation="glow" className="p-5">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
          <br />
          <br />
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
          <br />
          <br />
          <Placeholder xs={6} /> <Placeholder xs={6} />{" "}
        </Placeholder>
      )}
    </>
  );
}

export default PlaceholderLoader;
