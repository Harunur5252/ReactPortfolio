import React, { Component,Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefandDes from '../components/RefandDescription/RefandDes';
import Footer from '../components/Footer/Footer';

class RefandDesPage extends Component {

    componentDidMount(){
        window.scroll(0,0);
     }

     
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refand"/>
                <PageTop pageTitle="Refand"/>
                <RefandDes/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefandDesPage;