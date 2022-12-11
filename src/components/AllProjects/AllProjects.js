import axios from 'axios';
import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
class AllProjects extends Component {
    state = {
        loading :true,
    }
    
      componentDidMount(){
        this.fetchAllProjectsData()
      }
       fetchAllProjectsData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/recent-project?populate=*')
           const data = res.data?.data?.attributes
           this.setState({
              projects  : data?.projects ,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }
    render() {

        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        {this.state?.projects?.map((project => {
                            return (
                                <Col key={project?.id} lg={4} md={6} sm={12} className="p-2">
                                    <Card className="projectCard">
                                        <Card.Img variant="top" src={project?.image} className="projectImageSize"/>
                                        <Card.Body>
                                            <Card.Title className="projectCardTitle">{project?.name}</Card.Title>
                                            <Card.Text className="projectCardDes">
                                            <p className="text-justify">{project?.des}</p>
                                            </Card.Text>
                                            <Button variant="primary"><Link className="linkStyle" to={`/projectdetails/${project?.id}`}>Details</Link></Button>
                                        </Card.Body>
                                    </Card>
                            </Col>
                            )
                        }))}
                    </Row>
                </Container>
            </Fragment>
        );
        
    }
}


export default AllProjects;