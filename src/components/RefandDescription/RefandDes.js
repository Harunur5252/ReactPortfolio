import axios from 'axios';
import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'

class RefandDes extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchRefundData()
      }
       fetchRefundData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/refand')
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


export default RefandDes;