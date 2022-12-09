import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import axios from 'axios';
import Loading from '../Loading/Loading';

class Services extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchServiceData()
      }
       fetchServiceData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/service?populate=*')
           console.log(res.data)
           const data = res.data?.data?.attributes?.services
           this.setState({
             services : data,
             loading:false
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
        }else {
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">MY SERVICE</h1>
                        <Row>
                            {this.state?.services?.map(service => {
                                return (
                                    <Col lg={4} md={6} sm={12}>
                                        <div className="serviceCard text-center">
                                            <img src={service.link} className="serviceLogoSize" alt='serviceImg'/>
                                            <h2 className="serviceName">{service.title}</h2>
                                            <p className="serviceDescription">{service.des}</p>
                                        </div>
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

export default Services;