import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
class Course extends Component {
    render() {

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://th.bing.com/th/id/OIP.ElLbKGweyD6vR64wY0p86gHaEo?pid=ImgDet&rs=1"/>
                                </Col>
            
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <h5 className="text-justify courseTitle">Laravel</h5>
                                    <p className="text-justify courseDes">The overall skills gained from this project based courses will prepare you for any type of project development.</p>
                                    <Link className="courseDetails float-left" to={"/courseDetails/1"}>Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://th.bing.com/th/id/OIP.ElLbKGweyD6vR64wY0p86gHaEo?pid=ImgDet&rs=1"/>
                                </Col>
            
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <h5 className="text-justify courseTitle">Laravel</h5>
                                    <p className="text-justify courseDes">The overall skills gained from this project based courses will prepare you for any type of project development.</p>
                                    <Link className="courseDetails float-left" to={"/courseDetails/1"}>Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://th.bing.com/th/id/OIP.ElLbKGweyD6vR64wY0p86gHaEo?pid=ImgDet&rs=1"/>
                                </Col>
            
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <h5 className="text-justify courseTitle">Laravel</h5>
                                    <p className="text-justify courseDes">The overall skills gained from this project based courses will prepare you for any type of project development.</p>
                                    <Link className="courseDetails float-left" to={"/courseDetails/1"}>Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://th.bing.com/th/id/OIP.ElLbKGweyD6vR64wY0p86gHaEo?pid=ImgDet&rs=1"/>
                                </Col>
            
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <h5 className="text-justify courseTitle">Laravel</h5>
                                    <p className="text-justify courseDes">The overall skills gained from this project based courses will prepare you for any type of project development.</p>
                                    <Link className="courseDetails float-left" to={"/courseDetails/1"}>Details</Link>
                                </Col>
                            </Row>
                        </Col>
                       
                    </Row>

                </Container>
            </Fragment>
        );
    }
}


export default Course;