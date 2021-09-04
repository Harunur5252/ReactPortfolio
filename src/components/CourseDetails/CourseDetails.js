import React, { Component, Fragment } from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton,ControlBar, ReplayControl,ForwardControl } from 'video-react';
import Image from '../../asset/image/banner-939233_1920.jpg'
class CourseDetails extends Component {
    render() {
        
            return (
                <Fragment>
                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPageOverlay">
                            <Container className="topPageContentCourse">
                                <Row>
                                    <Col sm={12} md={6} lg={6} className="text-justify">
                                        <h3 className="courseFullTitle"></h3>
                                        <a  className="courseSubTitle">Total Lecture=20</a><br/>
                                        <a  className="courseSubTitle">Total Student=300</a>
                                    </Col>
    
                                    <Col sm={12} md={6} lg={6} className="text-justify mt-4">
                                        <p className="courseFullDes">About 76% web application runs on PHP.Laravel is the most powerful and popular framework of PHP. This series start from laravel basic and ends with laravel live project.The overall skills gained from this project based courses will prepare you for any type of project development.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
    
                    <Container className="mt-5 text-center">
                        <Row>
                            <Col sm={12} md={6} lg={6} className="text-justify">
                              <h3 className="courseTitle">Skill You Got</h3>
                              <ul>
                                <li>This series covers all of basics of PHP MVC framework focusing on laravel</li>
                                <li>This series provides you A-Z knowledge of laravel according to laravel official features</li>
                                <li>This series covers website project & shop management project,necessary mini projects</li>
                                <li>Series Cover Axios,which is a powerful to create ajax request inside laravel project</li>
                             </ul>
                              <Button href="" target="_blank" variant="primary">Buy Now</Button>
                            </Col>
    
                            <Col sm={12} md={6} lg={6}  className="mt-4">
                                <Player
                                        poster={Image}
                                        startTime={300} src="http://codesilicon.com/paidvideos/Laravel/Video/1.mp4">
                                    <BigPlayButton position="center" />
                                    <ControlBar autoHide={false}>
                                        <ReplayControl seconds={5} order={2.1} />
                                        <ForwardControl seconds={5} order={3.1} />
                                    </ControlBar>
                                </Player>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );

        }

        
    }


export default CourseDetails;