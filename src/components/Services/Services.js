import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import graphicsLogo from '../../asset/image/graphics.svg'
import webLogo from '../../asset/image/web.svg'
import mobileLogo from '../../asset/image/mobile.svg'

class Services extends Component {


    render() {
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">MY SERVICE</h1>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img src={mobileLogo} className="serviceLogoSize"/>
                                    <h2 className="serviceName">Mobile Developments</h2>
                                    <p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirement..</p>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img src={webLogo} className="serviceLogoSize"/>
                                    <h2 className="serviceName">Web Developments</h2>
                                    <p className="serviceDescription">I build web Application for your business and institution as per as your requirement.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img src={graphicsLogo} className="serviceLogoSize"/>
                                    <h2 className="serviceName">Graphics Design</h2>
                                    <p className="serviceDescription">I can make Graphics Design for your business and institution as per as your requirement.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
          }
        }

export default Services;