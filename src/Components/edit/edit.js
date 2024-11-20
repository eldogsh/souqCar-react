import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./edit.css";
import Button from "react-bootstrap/Button";
import strings from "../../localization/localization";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function Edit() {
  return (
    <>
      <div>
        <Row>
          <Col xs={6} md={3} className="userSide userSideHidden mx-2">
            <div>
              <img
                src="https://souq.car/storage/customers/default.jpg"
                alt="user img"
                className=" m-2"
              />
            </div>
            <div className="userEdit mx-4">
              <div className="py-3">
                <div className="m-3 itemsHover">
                  {" "}
                  <Button variant="light" className="mx-4">
                    <i className="fa-solid fa-user mx-1"></i>{" "}
                  </Button>{" "}
                  <span>{strings.myAccount}</span>
                </div>
                <div className="m-3 itemsHover">
                  {" "}
                  <Button variant="light" className="mx-4">
                    <i className="fa-solid fa-plus mx-1"></i>{" "}
                  </Button>{" "}
                  <span>{strings.newAd}</span>
                </div>
                <div className="m-3 itemsHover">
                  {" "}
                  <Button variant="light" className="mx-4">
                    {" "}
                    <i className="fa-solid fa-images mx-1"></i>
                  </Button>{" "}
                  <span>{strings.myAds}</span>
                </div>
                <div className="m-3 itemsHover">
                  {" "}
                  <Button variant="light" className="mx-4">
                    {" "}
                    <i className="fa-solid fa-envelope mx-1"></i>
                  </Button>{" "}
                  <span>{strings.messages}</span>
                </div>
                <div className="m-3 itemsHover">
                  {" "}
                  <Button variant="light" className="mx-4">
                    {" "}
                    <i className="fa-solid fa-tags mx-1"></i>
                  </Button>{" "}
                  <span>{strings.membershipPackages}</span>
                </div>
                <div className="m-3 itemsHover">
                  {" "}
                  <Button variant="light" className="mx-4">
                    {" "}
                    <i className="fa-solid fa-door-open mx-1"></i>
                  </Button>{" "}
                  <span>{strings.logout}</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} className="userSide mx-2">
            <h1> {strings.welcome} User </h1>
            <p>{strings.description}</p>
            <Row>
              <Col sm className="cardUser m-3">
                <div className="my-5">
                  <i className="fa-solid fa-images "></i>
                  <h3>{strings.adsCount}</h3>
                  <p> 0</p>
                </div>
              </Col>
              <Col sm className="cardUser m-3">
                <div className="my-5">
                  <img
                    src="https://souq.car/imgs/icons/active.png"
                    width={40}
                    height={40}
                    alt="img"
                  />
                  <h3>{strings.enabledAds}</h3>
                  <p> 0</p>
                </div>
              </Col>
              <Col sm className="cardUser m-3">
                <div className="my-4">
                  <img
                    src="	https://souq.car/storage/memberships/1.jpg"
                    width={40}
                    height={40}
                    alt="img"
                  />
                  <h3>{strings.yourMembership}</h3>
                  <p
                    style={{
                      color: "orange",
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {strings.professionalpackage}
                  </p>
                </div>
              </Col>
              <Col sm className="cardUser m-3">
                <div className="my-5">
                  <i className="fa-solid fa-envelope mx-1"></i>
                  <h3>{strings.unreadMessages}</h3>
                  <p> 0</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div className="p-4 formRow m-3">
                  <h4> {strings.basicInformation}</h4>
                  <p>{strings.basicInformationparagraph} </p>

                  <Form.Group className="mb-3">
                    <Form.Label>{strings.email}</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1">
                        {" "}
                        <i className="fa-solid fa-envelope mx-1"></i>
                      </InputGroup.Text>
                      <Form.Control type="email" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>{strings.name}</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1">
                        {" "}
                        <i className="fa-solid fa-user mx-1"></i>
                      </InputGroup.Text>
                      <Form.Control type="text" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>{strings.mobile}</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1"> +20</InputGroup.Text>
                      <Form.Control type="number" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>{strings.whatsapp}</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1"> +20</InputGroup.Text>
                      <Form.Control type="number" />
                    </InputGroup>
                  </Form.Group>
                  <div className="spanClass">
                    <Button variant="dark">{strings.save}</Button>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {strings.deactivateYourAccount}
                    </span>
                  </div>
                </div>
                <div className="p-4 formRow m-3">
                  <h4> {strings.changePassword}</h4>
                  <p>{strings.changePasswordparagraph} </p>
                  <Form.Label htmlFor="inputPassword5">{strings.currentPassword}</Form.Label>
                 
                  <InputGroup>
                      <InputGroup.Text id="basic-addon1">
                        {" "}
                        <i className="fa-solid fa-key"></i>
                      </InputGroup.Text>
                      <Form.Control type="password" />
                    </InputGroup>
                  <Form.Text id="passwordHelpBlock" muted>
          
                  </Form.Text>
                  <Form.Label htmlFor="inputPassword5">{strings.newPassword}</Form.Label>
                  <InputGroup>
                      <InputGroup.Text id="basic-addon1">
                        {" "}
                        <i className="fa-solid fa-key"></i>
                      </InputGroup.Text>
                      <Form.Control type="password" />
                    </InputGroup>
                  <Form.Text id="passwordHelpBlock" muted>
                
                  </Form.Text>
                  <Form.Label htmlFor="inputPassword5">{strings.passwordConfirmation}</Form.Label>
                  <InputGroup>
                      <InputGroup.Text id="basic-addon1">
                        {" "}
                        <i className="fa-solid fa-key"></i>
                      </InputGroup.Text>
                      <Form.Control type="password" />
                    </InputGroup>
                  <Form.Text id="passwordHelpBlock" muted>
          
                  </Form.Text>

                  <div>
                    <Button variant="dark">{strings.save}</Button>
    
                  </div>
                </div>
             
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
