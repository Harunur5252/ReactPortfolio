import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../utils/axios";
import Loading from "../Loading/Loading";

class AboutDescription extends Component {
  static contextType = Context;

  render() {
    const { aboutData } = this.context;
    if (aboutData?.loading) {
      return (
        <Fragment>
          <Container fluid className="p-0">
            <Container className="topContent text-center">
              <Row>
                <Col>
                  <Loading />
                </Col>
              </Row>
            </Container>
          </Container>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Container className="mt-5">
            <Row>
              <Col sm={12} md={12} lg={12}>
                <p className="text-justify">
                  <h1 className="serviceName">Who i AM</h1>
                  <hr />
                  <p className="serviceDescription text-justify">
                    <ReactMarkdown>{aboutData?.aboutData?.aboutMe}</ReactMarkdown>
                  </p>

                  <h1 className="serviceName">My Mission</h1>
                  <hr />
                  <p className="serviceDescription text-justify">
                    <ReactMarkdown>{aboutData?.aboutData?.mission}</ReactMarkdown>
                  </p>

                  <h1 className="serviceName">My Vision</h1>
                  <hr />
                  <p className="serviceDescription text-justify">
                    <ReactMarkdown>{aboutData?.aboutData?.vision}</ReactMarkdown>
                  </p>
                </p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default AboutDescription;
