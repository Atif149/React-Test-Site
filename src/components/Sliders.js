import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImageOne from "../assets/NewSliderOne.jpg";
import sliderImageTwo from "../assets/NewSliderTwo.jpg";
import sliderImageThree from "../assets/NewSliderThree.jpg";

function Sliders() {
  return (
    <div className="container-fluid mb-5 px-0">
      <Carousel style={{ marginBottom: "5rem" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImageOne}
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImageTwo}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImageThree}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Sliders;
