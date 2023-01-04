import axios from 'axios';
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import Loading from '../Loading/Loading';

class AboutDescription extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchTopBannerData()
      }
       fetchTopBannerData = async () => {
        try {
           const res = await axios.get('https://react-portfolio-site-one.onrender.com/api/about')
           const data = res.data?.data?.attributes
           this.setState({
              aboutMe:data?.aboutMe,
              mission:data?.mission,
              vision:data?.vision,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }

    render() {
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
                           <Col sm={12} md={12} lg={12}>
                               <p className="text-justify">
                               <h1 className="serviceName">Who i AM</h1>
                                <hr/>
                                <p className="serviceDescription text-justify"><ReactMarkdown>{this.state?.aboutMe}</ReactMarkdown></p>
    
                               <h1 className="serviceName">My Mission</h1>
                               <hr/>
                               <p className="serviceDescription text-justify"><ReactMarkdown>{this.state?.mission}</ReactMarkdown></p>
    
                               <h1 className="serviceName">My Vision</h1>
                               <hr/>
                               <p className="serviceDescription text-justify"><ReactMarkdown>{this.state?.vision}</ReactMarkdown></p>
                               
                               </p>
                             
                           </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    } 
}


export default AboutDescription;