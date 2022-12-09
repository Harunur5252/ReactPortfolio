import axios from 'axios';
import React, {Component, Fragment} from 'react';
import {Col,Container,Row} from "react-bootstrap";
import  {BarChart,Bar,ResponsiveContainer,XAxis,YAxis,Tooltip} from "recharts";
import Loading from '../Loading/Loading';

class Analysis extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchAnalysisData()
      }
       fetchAnalysisData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/technology?populate=*')
           const data = res.data?.data?.attributes
           this.setState({
              technologies : data?.technologies,
              des_one : data?.des_one,
              des_two : data?.des_two,
              des_three : data?.des_three,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }
    render() {
            let blue = 'rgba(0,115,238,8)'
            
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
                        <Container className="text-center">
                            <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                            <Row>
                                <Col style={{width:'100%',height:'300px'}} lg={6} md={12} sm={12}>
                                    <ResponsiveContainer>
                                        <BarChart width={100} height={300} data={this.state.technologies}>
                                            <XAxis dataKey="technology"/>
                                            <Tooltip />
                                            <Bar dataKey="projects" fill={blue}>
        
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
        
                                </Col>
        
                                <Col lg={6} md={12} sm={12}>
                                    <p className="text-justify description">
                                        {this.state.des_one}
                                    </p>
                                    <p className="text-justify description">
                                        {this.state.des_two}
                                    </p>
                                    <p className="text-justify description">
                                        {this.state.des_three}
                                    </p>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </Fragment>
                );
            }
        }
    }


export default Analysis;