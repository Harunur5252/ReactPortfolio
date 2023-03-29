import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Context } from "../../context/Context";
import Loading from "../Loading/Loading";

class Analysis extends Component {

static contextType = Context
  render() {
    const {technologyData} = this.context
    let blue = "rgba(0,115,238,8)";

    if (technologyData?.loading) {
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
      );
    } else {
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
            <Row>
              <Col
                style={{ width: "100%", height: "300px" }}
                lg={6}
                md={12}
                sm={12}
              >
                <ResponsiveContainer>
                  <BarChart
                    width={100}
                    height={300}
                    data={technologyData?.technologyData?.technologies}
                  >
                    <XAxis dataKey="technology" />
                    <Tooltip />
                    <Bar dataKey="projects" fill={blue}></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <p className="text-justify description">{technologyData?.technologyData?.des_one}</p>
                <p className="text-justify description">{technologyData?.technologyData?.des_two}</p>
                <p className="text-justify description">
                  {technologyData?.technologyData?.des_three}
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
