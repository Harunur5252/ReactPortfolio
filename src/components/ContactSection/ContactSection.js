import React, { Component, Fragment } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { axiosInstance } from "../../utils/axios";

class ContactSection extends Component {
  state = {
    fullName: "",
    email: "",
    message: "",
    fullNameError: "",
    emailError: "",
    messageError: "",
    submit: false,
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    if (this.state.fullName) {
      this.setState({
        fullNameError: "",
      });
    }
    if (this.state.email) {
      this.setState({
        emailError: "",
      });
    }
    if (this.state.message) {
      this.setState({
        messageError: "",
      });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.fullName === "") {
      this.setState({
        fullNameError: "fullName is required",
      });
    }
    if (this.state.email === "") {
      this.setState({
        emailError: "email is required",
      });
    }
    if (this.state.message === "") {
      this.setState({
        messageError: "message is required",
      });
    }

    if (this.state.fullName && this.state.email && this.state.message) {
      const data = {
        fullName: this.state.fullName,
        email: this.state.email,
        message: this.state.message,
      };
      try {
        this.setState({
          submit: true,
        });
        await axiosInstance.post("contacts", {
          data: data,
        });
        this.setState({
          fullName: "",
          email: "",
          message: "",
          submit: false,
        });
        toast.success("added successfully!");
      } catch (error) {
        toast.error(error?.message);
        this.setState({
          submit: false,
        });
      }
    }
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceMainTitle">Quick Connect</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label className="serviceDescription">Name</Form.Label>
                  <Form.Control
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                  />
                  <span style={{ color: "red" }}>
                    {this.state.fullNameError}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Email address
                  </Form.Label>
                  <Form.Control
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    id="email"
                    placeholder="Enter email"
                  />
                  <span style={{ color: "red" }}>{this.state.emailError}</span>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Message
                  </Form.Label>
                  <Form.Control
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    as="textarea"
                    id="msg"
                    rows={3}
                    placeholder="Write Your Message"
                  />
                  <span style={{ color: "red" }}>
                    {this.state.messageError}
                  </span>
                </Form.Group>
                <Button
                  variant="dark"
                  style={{ width: "100%" }}
                  disabled={this.state.submit ? "disabled" : null}
                  type="submit"
                >
                  {this.state.submit ? <BeatLoader color="#f70716" /> : "Send"}
                </Button>
              </Form>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceMainTitle">Discuss Now</h1>
              <p className="carouselDes">
                #79/6 Bhimgonj Aria, 3rd Floor Front Side, Sherpur
              </p>
              <p className="carouselDes">
                <FontAwesomeIcon icon={faEnvelope} /> hroshid695@gmail.com
              </p>
              <p className="carouselDes">
                <FontAwesomeIcon icon={faPhone} /> 01307216770
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactSection;
