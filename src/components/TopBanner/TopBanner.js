import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import '../../asset/css/responsive.css';
class TopBanner extends Component {

    render() {
     
        return (
            <Fragment>
              <Container fluid className="topFixedBanner p-0">
                <div className="topBannerOverlay">
                  <Container className="topContent text-center">
                      <Row>
                        <Col>
                            <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                            <h4 className="topSubTitle">Mobile & Web Application</h4>
                            <Button variant="primary">More Info</Button>
                        </Col>
                      </Row>
                  </Container>
                </div>
              </Container>
            </Fragment>
        );
      
    }
}

export default TopBanner;