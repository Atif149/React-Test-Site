import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FirstCard from "../assets/card1.jpg";
import SecondCard from "../assets/CardImgTwo.JPG";
import ThirdCard from "../assets/CardImgThree.JPG";

const HomeCards = () => {
  return (
    <div className="container-fluid mt-5 mb-5 px-0">
      <h1 style={{fontSize:"50px", fontWeight:"bold"}}>About us</h1>
      <div className="container mt-5">
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <div className="row">
            <div className="col xs={6} md={4}" style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={FirstCard}
                  style={{ marginBottom: "12px" }}
                />
                <Card.Body style={{ marginBottom: "12px" }}>
                  <Card.Title>Curriculum</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col xs={6} md={4}" style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={SecondCard}
                  style={{ marginBottom: "12px" }}
                />
                <Card.Body style={{ marginBottom: "12px" }}>
                  <Card.Title>Classroom</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col xs={6} md={4}" style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={ThirdCard}
                  style={{ marginBottom: "12px" }}
                />
                <Card.Body style={{ marginBottom: "12px" }}>
                  <Card.Title>Exam Hall</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCards;
