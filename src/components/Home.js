import React from "react";
import { Card } from "react-bootstrap";
import { Nav } from "react-bootstrap";



const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 order-1">
          <Card style={{padding:"10px", border:"0px"}}>
            <Card.Body>
              Hello all
            </Card.Body>
          </Card>
          
        </div>
        <div className="col-8 order-2">
        <Card style={{padding:"10px", border:"0px"}}>
        <Card.Body>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Admission</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Contact us</Nav.Link>
            </Nav.Item>
           
          </Nav>
          {/* <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Who we are</Nav.Link>
                  <Nav.Link href="#action3">What we do</Nav.Link>
                  <Nav.Link href="#action4">Know our Services</Nav.Link>
                  <NavDropdown
                    title="Technologies"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action5">
                      React JS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">PHP</NavDropdown.Item>
                    <NavDropdown.Item href="#action7">HTML</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action8">Contact us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
        </Card.Body>
      </Card>
        </div>
      </div>
     
      <cards />
    </div>
  );
};

export default Home;
