import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import { Context } from "../../context/Context";
class ClientReview extends Component {
  static contextType = Context;

  render() {
    const {reviewData} = this.context
    let settings = {
      autoplaySpeed: 3000,
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 3000,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    if (reviewData?.loading) {
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
            <h1 className="serviceMainTitle">CLIENT SAYS</h1>
            <Slider {...settings}>
              {reviewData?.reviewData?.reviews?.map((review) => {
                return (
                  <div key={review?.id}>
                    <Row className="text-center justify-content-center">
                      <Col lg={6} md={6} sm={12}>
                        <img
                          className="carouselImg"
                          src={review?.image}
                          alt="reviewImg"
                        />
                        <h2 className="carouselTitle">
                          {review?.categoryName}
                        </h2>
                        <p className="carouselDes">{review?.short_des}</p>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </Fragment>
      );
    }
  }
}

export default ClientReview;
