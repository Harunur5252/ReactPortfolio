import axios from 'axios';
import React, {Component,Fragment} from 'react';
import {Col, Container, Row,Card,Button} from "react-bootstrap";
import {Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

class RecentProject extends Component {
    state = {
        loading :true,
    }
    
      componentDidMount(){
        this.fetchRecentPostData()
      }
       fetchRecentPostData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/recent-project?populate=*')
           const data = res.data?.data?.attributes
           this.setState({
              projects :data?.projects,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }
    render() {
        const threeProjects = this.state?.projects?.slice(0,3)
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
        }else {
            return (
                <Fragment>
                   <Container className="text-center">
                       <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                       <Row>
                        {threeProjects?.map(project => {
                            return(
                                <Col lg={4} md={6} sm={12} className="p-2">
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
                        })}
                       </Row>
                   </Container>
                </Fragment>
            );
        }
        
     }
 }


export default RecentProject;