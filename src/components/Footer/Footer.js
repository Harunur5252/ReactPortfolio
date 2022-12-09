import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import  {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
            return (
                <Fragment>
                    <Container fluid={true} className="text-center p-4">
                    <Container>
                        <hr className="footerMarginTop"/>
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Follow Me</h1>
                                <a href="" className="socialLink" target="_blank"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                                <a href="" className="socialLink" target="_blank"><FontAwesomeIcon  icon={faYoutube} /> Youtube</a>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Address</h1>
                                <p className="carouselDes">#79/6 Bhimgonj Aria, 3rd Floor Front Side, Sherpur</p>
                                <p className="carouselDes"><FontAwesomeIcon  className="" icon={faEnvelope} /> hroshid695@gmail.com</p>
                                <p className="carouselDes"><FontAwesomeIcon  className="" icon={faPhone} />  01307216770</p>
                            </Col>
    
                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Information</h1>
                                <Link to="/about" className="footerLink">About Me</Link><br/>
                                <Link to="/contact" className="footerLink">Contact Me</Link><br/>           
                            </Col>
    
                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Legal</h1>
                                <Link to="/refand" className="footerLink">Refund Policy</Link><br/>
                                <Link to="/termsconditions" className="footerLink">Terms And Condition</Link><br/>
                                <Link to="/privacypolicy" className="footerLink">Privacy Policy</Link>
                            </Col>
    
                        </Row>
                    </Container>
                    </Container>
    
                    <Container fluid={true} className="text-center copyrightSection">
                        <a href="#" className="copyrightLink">Harun.com © 2020-2021</a>
                    </Container>
                </Fragment>
            );
        }
        
}

export default Footer;