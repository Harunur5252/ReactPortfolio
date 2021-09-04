import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/AllCourses/AllCourses";

class CoursePage extends Component {

    componentDidMount(){
        window.scroll(0,0);
     }
     
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course"/>
                <PageTop pageTitle="All Courses"/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;