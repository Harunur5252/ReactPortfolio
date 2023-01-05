import axios from 'axios';
import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import { axiosInstance } from '../../utils/axios';
import Loading from '../Loading/Loading';

class RefandDes extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchRefundData()
      }
       fetchRefundData = async () => {
        try {
           const res = await axiosInstance.get('refand')
           const data = res.data?.data?.attributes
           this.setState({
              refandPolicy:data?.refandPolicy,
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
                                  <ReactMarkdown>{this.state?.refandPolicy}</ReactMarkdown>
                                </p>
                           </Col>
                        </Row>
                    </Container>
                </Fragment>
                );
        }
            
        }
        
    }


export default RefandDes;