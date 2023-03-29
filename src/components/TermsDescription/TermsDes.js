import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../utils/axios";
import Loading from "../Loading/Loading";

class TermsDes extends Component {
  static contextType = Context;

  render() {
    const {termsData} = this.context
    if (termsData?.loading) {
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
                <p className="serviceDescription text-justify">
                  <ReactMarkdown>{termsData?.termsData?.condition}</ReactMarkdown>
                </p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default TermsDes;
