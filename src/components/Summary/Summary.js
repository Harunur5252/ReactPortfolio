import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Loading from "../Loading/Loading";
import { Context } from "../../context/Context";
class Summary extends Component {
static contextType = Context


  render() {
    const {summaryData} = this.context
    if (summaryData?.loading) {
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
          <Container fluid className="fixedSummaryBanner summarySection p-0">
            <div className="SummaryBannerOverlay">
              <Container className="text-center">
                <Row>
                  <Col lg={8} md={6} sm={12}>
                    <Row className="countSection">
                      <Col>
                        <h1 className="countNumber">
                          <CountUp start={0} end={summaryData?.summaryData?.total_projects}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h1>
                        <h4 className="countTitle">Total Projects</h4>
                        <hr className="w-25 bg-white" />
                      </Col>

                      <Col>
                        <h1 className="countNumber">
                          <CountUp start={0} end={summaryData?.summaryData?.total_clients}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h1>
                        <h4 className="countTitle">Total Clients</h4>
                        <hr className="w-25 bg-white" />
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={4} md={6} sm={12}>
                    <Card className="cardWork">
                      <Card.Body>
                        <Card.Title className="cardTitle text-justify">
                          How i Work
                        </Card.Title>
                        <Card.Text>
                          {summaryData?.summaryData?.requirements?.map((requirement) => {
                            return (
                              <p className="cardSubTitle text-justify">
                                <FontAwesomeIcon
                                  className="cardBulletIcon"
                                  icon={faCheckCircle}
                                />{" "}
                                {requirement?.title}
                              </p>
                            );
                          })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
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

export default Summary;
