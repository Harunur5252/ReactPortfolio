import React, {Component, Fragment} from 'react';
import {Col, Container, Row,Modal,Button} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton,ControlBar, ReplayControl,ForwardControl } from 'video-react';
import Loading from '../Loading/Loading';
import axios from 'axios';
import { axiosInstance } from '../../utils/axios';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
            loading:true
        }
    }
    componentDidMount(){
        this.fetchHowIDoData()
      }
       fetchHowIDoData = async () => {
        try {
           const res = await axiosInstance.get('how-i-do')
           const data = res.data?.data?.attributes
           this.setState({
              des:data?.des,
              link:data?.link,
              loading : false
           })
        } catch (error) {
          console.log(error.response)
        }
       }
    modalClose = () => {
        this.setState({show:false})
    }
    modalShow = () =>{
        this.setState({show:true})
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
        }else{
            return (
                <Fragment>
                    <Container className="text-center">
                        <Row>
                            <Col lg={12} md={12} sm={12} className="videoCard">
                                <div>
                                    <p className="videoCardTitle">How I Do</p>
                                    <p className="videoCardDes">{this.state?.des}</p>
                                    <p><FontAwesomeIcon onClick={this.modalShow} className="videoPlayBtn" icon={faPlayCircle} /></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
    
                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>
                            <Player  
                                        poster="/assets/poster.png"
                                        startTime={300} src={this.state?.link}>
                                <BigPlayButton position="center" />
                                <ControlBar autoHide={false}>
                                    <ReplayControl seconds={5} order={2.1} />
                                    <ForwardControl seconds={5} order={3.1} />
                                </ControlBar>
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
    
                </Fragment>
            );
        }
        
    }
}

export default Video;