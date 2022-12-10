import axios from 'axios';
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
class Course extends Component {

    state = {
        loading :true,
    }
    
      componentDidMount(){
        this.fetchCoursesData()
      }
       fetchCoursesData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/course?populate=*')
           const data = res.data?.data?.attributes
           this.setState({
              courses :data?.courses,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }
    render() {
        const threeCourses = this.state?.courses?.slice(0,4)
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
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR COURSES</h1>
                        <Row>
                            {threeCourses?.map(course => {
                                return (
                                    <Col lg={6} md={12} sm={12} className="p-2">
                                        <Row className="p-2">
                                            <Col lg={6} md={6} sm={12} className="p-2">
                                                <img className="courseImg" src={course?.image} alt='img'/>
                                            </Col>
                        
                                            <Col lg={6} md={6} sm={12} className="p-2">
                                                <h5 className="text-justify courseTitle">{course?.name}</h5>
                                                <p className="text-justify courseDes">{course?.short_des}</p>
                                                <Link className="courseDetails float-left" to={`/courseDetails/${course?.id}`}>Details</Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                            
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        
    }
}


export default Course;