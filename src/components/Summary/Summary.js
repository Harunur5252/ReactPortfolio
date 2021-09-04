import React, {Component,Fragment} from 'react';
import  {Button,Col,Container,Row,Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
class Summary extends Component {

    

    render() {

   

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

                                             <CountUp start={0} end={100}>
                                                 {({ countUpRef, start }) => (

                                                     <VisibilitySensor onChange={start} delayedCall>
                                                         <span ref={countUpRef} />
                                                     </VisibilitySensor>

                                                 )}
                                             </CountUp>

                                         </h1>
                                         <h4 className="countTitle">Total Projects</h4>
                                         <hr className="w-25 bg-white"/>
                                      </Col>

                                      <Col>
                                          <h1 className="countNumber">

                                              <CountUp start={0} end={100}>
                                                  {({ countUpRef, start }) => (

                                                      <VisibilitySensor onChange={start} delayedCall>
                                                          <span ref={countUpRef} />
                                                      </VisibilitySensor>

                                                  )}
                                              </CountUp>

                                          </h1>
                                          <h4 className="countTitle">Total Clients</h4>
                                          <hr className="w-25 bg-white"/>
                                      </Col>
                                  </Row>
                              </Col>

                              <Col lg={4} md={6} sm={12}>
                                  <Card className="cardWork">
                                      <Card.Body>
                                          <Card.Title className="cardTitle text-justify">How i Work</Card.Title>
                                          <Card.Text>
                                              {/* <p className="cardSubTitle text-justify"><FontAwesomeIcon className="cardBulletIcon" icon={faCheckCircle} /> { ReactHtmlParser(this.state.works) }</p> */}
                                              <p className="cardSubTitle text-justify"><FontAwesomeIcon className="cardBulletIcon" icon={faCheckCircle} /> Requirement Gathering</p>
                                              <p className="cardSubTitle text-justify"><FontAwesomeIcon className="cardBulletIcon" icon={faCheckCircle} /> Requirement Gathering</p>
                                              <p className="cardSubTitle text-justify"><FontAwesomeIcon className="cardBulletIcon" icon={faCheckCircle} /> Requirement Gathering</p>
                                               
                                               
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

export default Summary;