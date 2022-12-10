import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";

class CourseDetailsPage extends Component {
    constructor({match}){
        super();
        this.state={
            coursePassedId:match.params.courseId,
            coursePassedName:match.params.courseName
        }
    }
    componentDidMount(){
        window.scroll(0,0);
     }
     
    render() {
        
        return (
            <Fragment>
                 <TopNavigation title="CourseDetails"/>
                 <CourseDetails id={this.state.coursePassedId}/>
                 <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;
