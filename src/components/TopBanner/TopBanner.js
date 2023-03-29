import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../asset/css/responsive.css";
import { Context } from "../../context/Context";
import Loading from "../Loading/Loading";

class TopBanner extends Component {
  static contextType = Context;

  render() {
    const { homeBannerData } = this.context;
    if (homeBannerData?.loading) {
      return (
        <Fragment>
          <Container fluid className="topFixedBanner p-0">
            <div className="topBannerOverlay">
              <Container className="topContent text-center">
                <Row>
                  <Col>
                    <Loading />
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Container fluid className="topFixedBanner p-0">
            <div className="topBannerOverlay">
              <Container className="topContent text-center">
                <Row>
                  <Col>
                    <h1 className="topTitle">
                      {homeBannerData?.homeInfo?.title}
                    </h1>
                    <h4 className="topSubTitle">
                      {homeBannerData?.homeInfo?.sub_title}
                    </h4>
                    <a
                      href={homeBannerData?.homeInfo?.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="primary">More Info</Button>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </Fragment>
      );
    }
  }
}
export default TopBanner;
