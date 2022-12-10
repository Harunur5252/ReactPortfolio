import React, { Component, Fragment } from 'react';
import {Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage"
import CoursePage from "../pages/CoursePage"
import PortfolioPage from "../pages/PortfolioPage"
import ContactPage from "../pages/ContactPage"
import AboutPage from "../pages/AboutPage"
import ServicePage from "../pages/ServicePage"
import RefandDesPage from '../pages/RefandDesPage';
import TermsDesPage from '../pages/TermsDesPage';
import PrivacyDesPage from '../pages/PrivacyDesPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                 <Switch>

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/services" component={ServicePage}/>
                    <Route exact path="/courses" component={CoursePage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refand" component={RefandDesPage}/>
                    <Route exact path="/termsconditions" component={TermsDesPage}/>
                    <Route exact path="/privacypolicy" component={PrivacyDesPage}/>
                    <Route exact path="/projectdetails/:projectId" component={ProjectDetailsPage}/>
                    <Route exact path="/courseDetails/:courseId" component={CourseDetailsPage}/>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;