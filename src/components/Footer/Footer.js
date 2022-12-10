import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import  {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';

class Footer extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchFooterData()
      }
       fetchFooterData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/footer')
           const data = res.data?.data?.attributes
           this.setState({
              fbLink:data?.fbLink,
              youLink:data?.youLink,
              address:data?.address,
              email:data?.email,
              phone:data?.phone,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }

    render() {
        const date = new Date()
        const latestYear = date.getFullYear()
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
                    <Container fluid={true} className="text-center p-4">
                    <Container>
                        <hr className="footerMarginTop"/>
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Follow Me</h1>
                                <a href={this.state?.fbLink} rel="noreferrer" className="socialLink" target="_blank"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>

                                <a href={this.state?.youLink} rel="noreferrer" className="socialLink" target="_blank"><FontAwesomeIcon  icon={faYoutube} /> Youtube</a>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Address</h1>
                                <p className="carouselDes">{this.state?.address}</p>
                                <p className="carouselDes"><FontAwesomeIcon  className="" icon={faEnvelope} /> {this.state?.email}</p>
                                <p className="carouselDes"><FontAwesomeIcon  className="" icon={faPhone} />  {this.state?.phone}</p>
                            </Col>
    
                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Information</h1>
                                <Link to="/about" className="footerLink">About Me</Link><br/>
                                <Link to="/contact" className="footerLink">Contact Me</Link><br/>           
                            </Col>
    
                            <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                                <h1 className="footerTitle">Legal</h1>
                                <Link to="/refand" className="footerLink">Refund Policy</Link><br/>
                                <Link to="/termsconditions" className="footerLink">Terms And Condition</Link><br/>
                                <Link to="/privacypolicy" className="footerLink">Privacy Policy</Link>
                            </Col>
    
                        </Row>
                    </Container>
                    </Container>
    
                    <Container fluid={true} className="text-center copyrightSection">
                        <a href="#" className="copyrightLink">Developed by Harun © {latestYear}</a>
                    </Container>
                </Fragment>
            );
        }
           
        }
        
}

export default Footer;