import React, {Component,Fragment} from 'react';
import  {Button,Col,Container,Row,Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import axios from 'axios';
import Loading from '../Loading/Loading';
class Summary extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchSummaryData()
      }
       fetchSummaryData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/project-and-client?populate=*')
           const data = res.data?.data?.attributes
           this.setState({
              requirements : data?.requirements,
              total_projects:data?.total_projects,
              total_clients:data?.total_clients,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }
    
    render() {
        if(this.state.loading){
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
            )
        }else{
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
    
                                                 <CountUp start={0} end={this.state?.total_projects}>
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
    
                                                  <CountUp start={0} end={this.state?.total_clients}>
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
                                                {this.state?.requirements?.map(requirement => {
                                                    return (
                                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="cardBulletIcon" icon={faCheckCircle} /> {requirement?.title}</p>
                                                    )
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