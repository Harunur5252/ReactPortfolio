import React, { Component, Fragment } from "react";
import { Col, Container, Row, Modal, Button, Card } from "react-bootstrap";
import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import Image from "../../asset/image/banner-939233_1920.jpg";
import ReactMarkdown from "react-markdown";
import Loading from "../Loading/Loading";
import { axiosInstance } from "../../utils/axios";

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loading: true,
    };
  }
  modalClose = () => {
    this.setState({ show: false });
  };
  modalShow = () => {
    this.setState({ show: true });
  };
  id = +this.props.id;

  componentDidMount() {
    this.fetchSingleCourseData();
  }
  fetchSingleCourseData = async () => {
    try {
      if (this.id) {
        const res = await axiosInstance.get(`course?populate=*`);
        const data = res.data?.data?.attributes;
        this.setState({
          courses: data?.courses,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    const singleCourse = this.state?.courses?.find((course) => {
      if (this.id === course?.id) {
        return course;
      }
    });

    if (this.state.loading) {
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
          <Container fluid={true} className="topFixedPage p-0">
            <div className="topPageOverlay">
              <Container className="topPageContentCourse">
                <Row>
                  <Col sm={12} md={6} lg={6} className="text-justify">
                    {/* <h3 className="courseFullTitle"></h3> */}
                    <a className="courseSubTitle">
                      Total Lecture={singleCourse?.total_lecture}
                    </a>
                    <br />
                    <a className="courseSubTitle">
                      Total Student={singleCourse?.total_student}
                    </a>
                  </Col>

                  <Col sm={12} md={6} lg={6} className="text-justify mt-4">
                    <p className="courseFullDes">
                      {singleCourse?.about_technology}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>

          <Container className="mt-5 text-center">
            <Row>
              <Col sm={12} md={6} lg={6} className="text-justify">
                <h3 className="courseTitle">Skill You Got</h3>
                <ReactMarkdown>{singleCourse?.broad_des}</ReactMarkdown>
                <Button
                  onClick={this.modalShow}
                  target="_blank"
                  variant="primary"
                >
                  Buy Now
                </Button>
              </Col>

              <Col sm={12} md={6} lg={6} className="mt-4">
                <Player
                  poster={Image}
                  startTime={300}
                  src={singleCourse?.video_link}
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <ReplayControl seconds={5} order={2.1} />
                    <ForwardControl seconds={5} order={3.1} />
                  </ControlBar>
                </Player>
              </Col>
            </Row>

            <Modal size="md" show={this.state.show} onHide={this.modalClose}>
              <Modal.Body>
                <Modal.Header closeButton>Payment</Modal.Header>
                <Card.Body>
                  <Card.Img
                    className="rounded"
                    src="https://bangladeshus.com/wp-content/uploads/2018/07/rocket-and-bkash-account-bd.jpg"
                  />
                  <Card.Title className="text-dark">
                    Payment with Bkash and Rocket
                  </Card.Title>
                  <Card.Text className="text-mute">
                    Baksh Number : 01307216770 <br />
                    Rocket Number : 01307216770
                  </Card.Text>
                </Card.Body>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.modalClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
        </Fragment>
      );
    }
  }
}

export default CourseDetails;
