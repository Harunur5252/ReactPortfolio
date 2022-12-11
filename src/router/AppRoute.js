import React, { Component, Fragment, lazy, Suspense } from 'react';
import {Switch,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LazyLoading from '../components/LazyLoading/LazyLoading';

const HomePage = lazy(() => import('../pages/HomePage'))
const CoursePage = lazy(() => import('../pages/CoursePage'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicePage = lazy(() => import('../pages/ServicePage'))
const RefandDesPage = lazy(() => import('../pages/RefandDesPage'))
const TermsDesPage = lazy(() => import('../pages/TermsDesPage'))
const PrivacyDesPage = lazy(() => import('../pages/PrivacyDesPage'))
const ProjectDetailsPage = lazy(() => import('../pages/ProjectDetailsPage'))
const CourseDetailsPage = lazy(() => import('../pages/CourseDetailsPage'))

// import PortfolioPage from "../pages/PortfolioPage"
// import ContactPage from "../pages/ContactPage"
// import AboutPage from "../pages/AboutPage"
// import ServicePage from "../pages/ServicePage"
// import RefandDesPage from '../pages/RefandDesPage';
// import TermsDesPage from '../pages/TermsDesPage';
// import PrivacyDesPage from '../pages/PrivacyDesPage';
// import ProjectDetailsPage from '../pages/ProjectDetailsPage';
// import CourseDetailsPage from '../pages/CourseDetailsPage';


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
                    <Suspense fallback={<LazyLoading />}>
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
                    </Suspense>
            </Fragment>
        );
    }
}

export default AppRoute;