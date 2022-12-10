import React, { Component, Fragment } from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton,ControlBar, ReplayControl,ForwardControl } from 'video-react';
import Image from '../../asset/image/banner-939233_1920.jpg'
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import Loading from '../Loading/Loading';

class CourseDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading : true
        }
      }
       id = +this.props.id

      componentDidMount(){
          this.fetchSingleCourseData()
      }
      fetchSingleCourseData = async () => {
        try {
            if(this.id){
            const res = await axios.get(`http://localhost:1337/api/course?populate=*`)
            const data = res.data?.data?.attributes
            this.setState({
            courses :data?.courses,
            loading : false
            })
            }
        } catch (error) {
        console.log(error.response)
        }
      }

    render() {
        const singleCourse = this.state?.courses?.find(course => {
            if(this.id === course?.id){
               return course
            } 
        })
        
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
                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPageOverlay">
                            <Container className="topPageContentCourse">
                                <Row>
                                    <Col sm={12} md={6} lg={6} className="text-justify">
                                        {/* <h3 className="courseFullTitle"></h3> */}
                                        <a className="courseSubTitle">Total Lecture={singleCourse?.total_lecture}</a><br/>
                                        <a  className="courseSubTitle">Total Student={singleCourse?.total_student}</a>
                                    </Col>
    
                                    <Col sm={12} md={6} lg={6} className="text-justify mt-4">
                                        <p className="courseFullDes">{singleCourse?.about_technology}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
    
                    <Container className="mt-5 text-center">
                        <Row>
                            <Col sm={12} md={6} lg={6} className="text-justify">
                              <h3 className="courseTitle">Skill You Got</h3>
                              <ReactMarkdown>{singleCourse?.broad_des}</ReactMarkdown>
                              <Button target="_blank" variant="primary">Buy Now</Button>
                            </Col>
    
                            <Col sm={12} md={6} lg={6}  className="mt-4">
                                <Player
                                        poster={Image}
                                        startTime={300} src={singleCourse?.video_link}>
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
    }


export default CourseDetails;