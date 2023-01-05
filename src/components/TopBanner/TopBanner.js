
import axios from 'axios';
import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import '../../asset/css/responsive.css';
import { axiosInstance } from '../../utils/axios';
import Loading from '../Loading/Loading';

class TopBanner extends Component {
  state = {
    loading :true,
  }

  componentDidMount(){
    this.fetchTopBannerData()
  }
   fetchTopBannerData = async () => {
    try {
       const res = await axiosInstance.get('home')
       const data = res.data?.data?.attributes
       this.setState({
          title:data?.title,
          sub_title:data?.sub_title,
          link:data?.link,
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
            <Container fluid className="topFixedBanner p-0">
              <div className="topBannerOverlay">
                <Container className="topContent text-center">
                    <Row>
                      <Col>
                          <Loading />
                      </Col>
                    </Row>
                </Container>
              </div>
            </Container>
          </Fragment>
           )
       }else {
          return (
            <Fragment>
              <Container fluid className="topFixedBanner p-0">
                <div className="topBannerOverlay">
                  <Container className="topContent text-center">
                      <Row>
                        <Col>
                            <h1 className="topTitle">{this.state.title}</h1>
                            <h4 className="topSubTitle">{this.state.sub_title}</h4>
                            <a href={this.state.link} target='_blank' rel="noreferrer"><Button variant="primary">More Info</Button></a>
                        </Col>
                      </Row>
                  </Container>
                </div>
              </Container>
            </Fragment>
          );
       }
    }
}
export default TopBanner;