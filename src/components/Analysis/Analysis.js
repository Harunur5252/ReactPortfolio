import React, {Component, Fragment} from 'react';
import {Col,Container,Row} from "react-bootstrap";
import  {BarChart,Bar,ResponsiveContainer,XAxis,YAxis,Tooltip} from "recharts";

class Analysis extends Component {

    render() {
            let blue = 'rgba(0,115,238,8)'
            const data = [
                {technology:'Java',projects:80},
                {technology:'React',projects:30},
                {technology:'Android',projects:20},
                {technology:'Next Js',projects:60},
                {technology:'Kotlin',projects:80},
                {technology:'Php',projects:90},
                {technology:'Laravel',projects:100},
                {technology:'Vue',projects:70},
            ]
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <Row>
                        <Col style={{width:'100%',height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={data}>
                                    <XAxis dataKey="technology"/>
                                    <Tooltip />
                                    <Bar dataKey="projects" fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify description">
                                To build native android apps i use Java as well as kotlin mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.
                            </p>
                            <p className="text-justify description">
                                Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.
                            </p>
                            <p className="text-justify description">
                                According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                            </p>
                            
                        </Col>
                    </Row>
                </Container>
            </Fragment>
          );
        }
    }


export default Analysis;