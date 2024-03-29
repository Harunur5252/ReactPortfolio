import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Loading from "../Loading/Loading";
import graphicsLogo from "../../asset/image/graphics.svg";
import webLogo from "../../asset/image/web.svg";
import mobileLogo from "../../asset/image/mobile.svg";
import { axiosInstance } from "../../utils/axios";
import { Context } from "../../context/Context";

class Services extends Component {
  static contextType = Context;

  render() {
    const { serviceData } = this.context;
    if (serviceData?.loading) {
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
          <Container className="text-center">
            <h1 className="serviceMainTitle">MY SERVICE</h1>
            <Row>
              {serviceData?.serviceData?.services?.map((service) => {
                return (
                  <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                      <img
                        src={service?.link}
                        className="serviceLogoSize"
                        alt="serviceImg"
                      />
                      <h2 className="serviceName">{service?.title}</h2>
                      <p className="serviceDescription">{service?.des}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default Services;
