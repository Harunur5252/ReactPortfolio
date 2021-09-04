import React, { Component,Fragment } from 'react';
import {Col, Container, Row,Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

class ProjectDetails extends Component {

    render() {
            const imageSize={
                height:"350px",
                width:"550px"
            }
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                           <Col sm={12} md={6} lg={6}>
                              <img src="https://pmcaonline.org/wp-content/uploads/2020/07/react-js-1-1024x551.png" style={imageSize}></img>
                           </Col>
    
                           <Col sm={12} md={6} lg={6} className="mt-3">
                               <h2 className="courseTitle">React</h2>
                               <p  className="courseDes">The overall skills gained from this project based courses will prepare you for any type of project development. In this course you will be taught how to write a complete project with React JS including User Panel + Admin Panel. Source code will also be provided with each class of the course, so you can easily practice manually. This project uses React JS with PHP for the server site and MySQL for the database.</p>
                               <Button  variant="primary" ><a className="linkStyle">More Info</a></Button>
                           </Col>
                        </Row>
                    </Container>
                </Fragment>
            );

        }
       
    }


export default ProjectDetails;