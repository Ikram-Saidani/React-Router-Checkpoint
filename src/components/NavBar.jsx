import { Col, Form, Nav, Navbar, Row } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

function NavBar({ setSearch, setRating }) {
  const location=useLocation()
  return (
    <>
      <Navbar
        expand="lg"
        bg="light"
        className="bg-body-tertiary"
      >
        <Nav.Link>
          <Link style={{ textDecoration: "none",color:'gray' }} to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link style={{ textDecoration: "none",color:'gray' }} to="/addMovie">Add Movie</Link>
        </Nav.Link>
      {location.pathname==='/' && (
        <Form inline>
        <Row>
          <Col xs="6">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs="4">
            <Form.Control
              type="number"
              placeholder="Rating"
              min={0}
              max={10}
              step={0.1}
              className=" mr-sm-2"
              onChange={(e) => setRating(e.target.value)}
            />
          </Col>
        </Row>
      </Form>
      )}
      </Navbar>
    </>
  );
}

export default NavBar;
