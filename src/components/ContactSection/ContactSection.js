import React, {Component,Fragment} from 'react';
import {Col, Container, Row,Form,Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
class ContactSection extends Component {

    render() {

         return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceMainTitle">Quick Connect</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text" id="name" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email"  id="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" id="msg"  rows={3} placeholder="Write Your Message" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                   Send
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceMainTitle">Discuss Now</h1>
                            <p className="carouselDes">#79/6 Bhimgonj Aria, 3rd Floor Front Side, Sherpur</p>
                            <p className="carouselDes"><FontAwesomeIcon   icon={faEnvelope} />  hroshid695@gmail.com</p>
                            <p className="carouselDes"><FontAwesomeIcon    icon={faPhone} />  01307216770</p>
                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
        }

       
    }


export default ContactSection;

