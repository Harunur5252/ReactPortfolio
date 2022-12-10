import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import Loading from '../Loading/Loading';
class ClientReview extends Component {
    state = {
        loading :true,
      }
    
      componentDidMount(){
        this.fetchTopBannerData()
      }
       fetchTopBannerData = async () => {
        try {
           const res = await axios.get('http://localhost:1337/api/review?populate=*')
           const data = res.data?.data?.attributes
           this.setState({
              reviews :data?.reviews ,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }
    render() {

            let settings = {
                autoplaySpeed: 3000,
                autoplay:true,
                dots: true,
                infinite: true,
                speed: 3000,
                vertical:true,
                verticalSwiping:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            };
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
                           <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                           <Slider {...settings}>
                            {this.state?.reviews?.map(review => {
                                return (
                                    <div key={review?.id}>
                                        <Row className="text-center justify-content-center">
                                            <Col lg={6} md={6} sm={12}>
                                            <img className="carouselImg" src={review?.image} alt='reviewImg'/>
                                            <h2 className="carouselTitle">{review?.categoryName}</h2>
                                            <p className="carouselDes">{review?.short_des}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })}
                           </Slider>
                       </Container>
                    </Fragment>
                );
            }
        }
    }


export default ClientReview;