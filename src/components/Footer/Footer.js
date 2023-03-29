import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import { axiosInstance } from "../../utils/axios";
import { Context } from "../../context/Context";

class Footer extends Component {
  static contextType = Context;

  render() {
    const { footerData } = this.context;
    const date = new Date();
    const latestYear = date.getFullYear();
    if (footerData?.loading) {
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
          <Container fluid={true} className="text-center p-4">
            <Container>
              <hr className="footerMarginTop" />
              <Row>
                <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                  <h1 className="footerTitle">Follow Me</h1>
                  <a
                    href={footerData?.footerData?.fbLink}
                    rel="noreferrer"
                    className="socialLink"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                  <br />

                  <a
                    href={footerData?.footerData?.youLink}
                    rel="noreferrer"
                    className="socialLink"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                  </a>
                </Col>

                <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                  <h1 className="footerTitle">Address</h1>
                  <p className="carouselDes">{footerData?.footerData?.address}</p>
                  <p className="carouselDes">
                    <FontAwesomeIcon className="" icon={faEnvelope} />{" "}
                    {footerData?.footerData?.email}
                  </p>
                  <p className="carouselDes">
                    <FontAwesomeIcon className="" icon={faPhone} />{" "}
                    {footerData?.footerData?.phone}
                  </p>
                </Col>

                <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                  <h1 className="footerTitle">Information</h1>
                  <Link to="/about" className="footerLink">
                    About Me
                  </Link>
                  <br />
                  <Link to="/contact" className="footerLink">
                    Contact Me
                  </Link>
                  <br />
                </Col>

                <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                  <h1 className="footerTitle">Legal</h1>
                  <Link to="/refand" className="footerLink">
                    Refund Policy
                  </Link>
                  <br />
                  <Link to="/termsconditions" className="footerLink">
                    Terms And Condition
                  </Link>
                  <br />
                  <Link to="/privacypolicy" className="footerLink">
                    Privacy Policy
                  </Link>
                </Col>
              </Row>
            </Container>
          </Container>

          <Container fluid={true} className="text-center copyrightSection">
            <a href="#" className="copyrightLink">
              Developed by Harun © {latestYear}
            </a>
          </Container>
        </Fragment>
      );
    }
  }
}

export default Footer;
