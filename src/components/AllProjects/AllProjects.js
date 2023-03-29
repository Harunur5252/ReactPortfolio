import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
class AllProjects extends Component {
  static contextType = Context;
  render() {
    const { recentProjectData } = this.context;
    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            {recentProjectData?.recentProjectData?.projects?.map((project) => {
              return (
                <Col key={project?.id} lg={4} md={6} sm={12} className="p-2">
                  <Card className="projectCard">
                    <Card.Img
                      variant="top"
                      src={project?.image}
                      className="projectImageSize"
                    />
                    <Card.Body>
                      <Card.Title className="projectCardTitle">
                        {project?.name}
                      </Card.Title>
                      <Card.Text className="projectCardDes">
                        <p className="text-justify">{project?.des}</p>
                      </Card.Text>
                      <Button variant="primary">
                        <Link
                          className="linkStyle"
                          to={`/projectdetails/${project?.id}`}
                        >
                          Details
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AllProjects;
