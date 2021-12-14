
import React from "react";

import Bird from "../assets/slider1.jpg";
import { Button } from "react-bootstrap";

const ServicesPage = () => {
  return (
    <div className="container-fluid mt-5 mb-5 px-0">
      <div className="container">
      <div className="row">
        <div className="col-12 mb-5 mt-5">
          <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Services</h1>
        </div>
      </div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col xs={12} md={12}">
            <img src={Bird} style={{ width: "500px" }}></img>
          </div>
          <div className="col xs={12} md={12} mb-15">
            <p style={{ textAlign: "left", fontSize: "18px"}}>
              Edify Schools are the epitome of academic excellence and quality
              education, molding traditional values with contemporary
              advancements with a window to real world context. Led by MDN Edify
              Education, founded by the famed and esteemed DRS group, has a
              reach of 200 schools spread across pan India, and Edify School
              Chikkabanavara is one amongst them.dify Schools are the epitome of
              academic excellence and quality education, molding traditional
            </p>
            <Button variant="primary" className="d-flex align-item-start mb-5 mt-5">Download our Prospect</Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ServicesPage;
