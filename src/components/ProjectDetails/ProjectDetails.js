import axios from 'axios';
import React, { Component,Fragment } from 'react';
import {Col, Container, Row,Button} from "react-bootstrap";
import {Link } from 'react-router-dom'
import Loading from '../Loading/Loading';

class ProjectDetails extends Component {
      constructor(props){
        super(props)
        this.state = {
            loading : true
        }
      }
       id = +this.props.id

      componentDidMount(){
          this.fetchSingleRecentPostData()
      }
      fetchSingleRecentPostData = async () => {
        try {
            if(this.id){
            const res = await axios.get(`http://localhost:1337/api/recent-project?populate=*`)
            const data = res.data?.data?.attributes
            this.setState({
            projects :data?.projects,
            loading : false
            })
            }
        } catch (error) {
        console.log(error.response)
        }
      }

    render() {
         const singleProject = this.state?.projects?.find(project => {
             if(this.id === project?.id){
                return project
             } 
         })
            const imageSize={
                height:"350px",
                width:"550px"
            }
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
                        <Container className="mt-5">
                            <Row>
                               <Col sm={12} md={6} lg={6}>
                                  <img src={singleProject?.image} alt='img' style={imageSize}></img>
                               </Col>
        
                               <Col sm={12} md={6} lg={6} className="mt-3">
                                   <h2 className="courseTitle">{singleProject?.name}</h2>
                                   <p  className="courseDes">{singleProject?.des}</p>
                                   <a href={singleProject?.link} target='_blank' rel="noreferrer"><Button variant="primary">More Info</Button></a>
                               </Col>
                            </Row>
                        </Container>
                    </Fragment>
                );
            }
        }
       
    }


export default ProjectDetails;