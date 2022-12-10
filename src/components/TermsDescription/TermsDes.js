import axios from 'axios';
import React, { Component,Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import Loading from '../Loading/Loading';

class TermsDes extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchTermsConditionData()
      }
       fetchTermsConditionData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/terms-and-condition')
           const data = res.data?.data?.attributes
           this.setState({
              condition:data?.condition,
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
                           <p className="serviceDescription text-justify">
                              <ReactMarkdown>
                                  {this.state?.condition}
                              </ReactMarkdown>
                           </p>
                               
                           </Col>
                        </Row>
                    </Container>
                </Fragment>
               );
        }
           
    }
}

export default TermsDes;