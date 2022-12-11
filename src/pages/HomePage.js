import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProjects/RecentProject";
import Course from "../components/Courses/Course";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";
import TopBanner from "../components/TopBanner/TopBanner";


class HomePage extends Component {

    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home"/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProject/>
                <Course/>
                <Video/>
                <ClientReview/>
                <Footer/>
            </Fragment>
        );
    }
}
export default HomePage;