import React, {Component, Fragment} from 'react';
import {Col, Container, Row,Modal,Button} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton,ControlBar, ReplayControl,ForwardControl } from 'video-react';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
        }
        
    }

   


     modalClose = () => {
        this.setState({show:false})
    }
    modalShow = () =>{
        this.setState({show:true})
    }

    render() {

    

            return (
                <Fragment>
                    <Container className="text-center">
                        <Row>
                            <Col lg={12} md={12} sm={12} className="videoCard">
                               <div>
                                   <p className="videoCardTitle">How I Do</p>
                                   <p className="videoCardDes">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project</p>
                                   <p><FontAwesomeIcon onClick={this.modalShow} className="videoPlayBtn" icon={faPlayCircle} /></p>
                               </div>
                            </Col>
                        </Row>
                    </Container>
    
                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>
                            <Player  
                                     poster="/assets/poster.png"
                                     startTime={300} src="http://codesilicon.com/paidvideos/video/react0.mp4">
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

export default Video;