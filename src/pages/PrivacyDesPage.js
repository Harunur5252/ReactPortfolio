import React, { Component,Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from '../components/Footer/Footer';
import PrivacyDes from '../components/PrivacyDes/PrivacyDes';

class PrivacyDesPage extends Component {

    componentDidMount(){
        window.scroll(0,0);
     }

     
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy"/>
                <PageTop pageTitle="Privacy Policy"/>
                <PrivacyDes/>
                <Footer/>
        </Fragment>
        );
    }
}

export default PrivacyDesPage;