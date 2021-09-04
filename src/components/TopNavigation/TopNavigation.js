import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css';
import titleLogoWhite from '../../asset/image/navlogo.svg';
import titleLogoBlue from '../../asset/image/navlogoScroll.svg';
import {Container,Navbar,Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom"


class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[titleLogoWhite],
            navVariant:'dark',
            navBarBackColor:"navBackgroundColor",
            navItemColor:"navItem",
            pageTitle:props.title,
            navStyle:"",
            navStyleChange:"navStyleChange",
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
          this.setState({navVariant:'light',navBarTitle:'navTitle-Scroll',navBarLogo:[titleLogoBlue],navBarBackColor:'navBackgroundScrollColor',navItemColor:'navItemScroll'})
        }
        else{
            this.setState({navVariant:'dark',navBarTitle:'navTitle',navBarLogo:[titleLogoWhite],navBarBackColor:'navBackgroundColor',navItemColor:'navItem'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        // let style="text-decoration:none"
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
              <Container fluid className="p-0">
                  <div>
                      <Navbar variant={this.state.navVariant}  collapseOnSelect expand="lg" className={this.state.navBarBackColor} fixed="top">
                          <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo}/> Harunur Roshid</NavLink></Navbar.Brand>

                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mr-auto">

                              </Nav>
                              <Nav>
                                 <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItemColor} to="/">HOME</NavLink></Nav.Link><hr className="w-100 my-0 bg-white"/>
                                 <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItemColor} to="/services">SERVICES</NavLink></Nav.Link><hr className="w-100 my-0 bg-white"/>
                                 <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItemColor} to="/courses">COURSES</NavLink></Nav.Link><hr className="w-100 my-0 bg-white"/>
                                 <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItemColor} to="/portfolio">PORTFOLIO</NavLink></Nav.Link><hr className="w-100 my-0 bg-white"/>
                                 <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItemColor} to="/contact">CONTACT</NavLink></Nav.Link><hr className="w-100 my-0 bg-white"/>
                                 <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItemColor} to="/about">ABOUT</NavLink></Nav.Link>
                              </Nav>
                          </Navbar.Collapse>
                      </Navbar>
                  </div>
              </Container>
            </Fragment>
        );
    }
}

export default TopNavigation;