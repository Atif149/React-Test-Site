import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import AdmissionForm from "./AdmissionForm";

const FaqPage = () => {
  return (
    <div className="container-fluid mt-5 mb-5 px-0">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 mt-5 mb-5">
            <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Contact us</h1>
          </div>
         <Card>
           <Card.Body>
           <div className="container">
                <div className="row">
                  <div className="col-6">
                  
                    <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="FaqOne" title="Admission">
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginTop: "20px",
                            marginBottom:"20px",
                            textAlign:"left"
                          }}
                        >
                          Admissions offered in the academic year 2022-2023
                        </h3>
                        <p style={{textAlign:"left"}}>
                          For the academic year, i.e., 2022-2023, Edify School
                          Chikkabanavara offers admissions to Kindergarten KG I,
                          KG II, KG III and Grades 1 to 9, subject to the
                          availability of seats and eligibility.
                        </p>
                      </Tab>
                      <Tab eventKey="FaqTwo" title="Procedure">
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginTop: "20px",
                            marginBottom:"20px",
                            textAlign:"left"
                          }}
                        >
                          Obtaining the application form
                        </h3>
                        <p style={{textAlign:"left"}}>
                          Parents who wish to apply for admission should obtain
                          the brochure and application form on payment of
                          Rs.1000/-. This can be rendered in cash or demand
                          draft drawn in favor of Edify School Chikkabanavara,
                          payable at Chikkabanavara. The application form can be
                          downloaded from the net and applied through the net
                          (With a non-refundable fee of Rs. 1000/-).
                        </p>
                      </Tab>
                      <Tab eventKey="FaqThree" title="Get Appointment">
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginTop: "20px",
                            marginBottom:"20px",
                            textAlign:"left"
                          }}
                        >
                          Criteria for submission of application form
                        </h3>
                        <p style={{textAlign:"left"}}>
                          The duly completed application form must be submitted
                          to the School Office on or before the stipulated date.
                          The following documents should accompany the form:{" "}
                        </p>

                        <ul style={{textAlign:"left"}}>
                          <li>
                            <p>
                              One certified copy of School Report of the
                              previous academic year (if applicable). Three
                              passport size photographs, two stamp size
                              photographs of the child and one photograph of the
                              parents.{" "}
                            </p>
                          </li>
                          <li>
                            <p>
                              One certified copy of the Child’s Birth
                              Certificate.{" "}
                            </p>
                          </li>
                          <li>
                            <p>
                              of each of the details, including dates and grades
                              of any Public/Board Examinations already taken (if
                              applicable). Copy of the T.C. (If possible).{" "}
                            </p>
                          </li>
                          <li>
                            <p>
                              Original documents of the submitted photocopies
                              should be made available upon request for
                              verification.
                            </p>
                          </li>
                        </ul>
                      </Tab>
                    </Tabs>
                  </div>
                  <div className="col-6">
                    <AdmissionForm/>
                  </div>
                  
                </div>
              </div>

             </Card.Body>
             </Card>
              
            
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
