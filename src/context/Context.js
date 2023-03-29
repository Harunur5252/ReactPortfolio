import { Component, createContext } from "react";
import { axiosInstance } from "../utils/axios";

export const Context = createContext();

export class ContextProvider extends Component {
  state = {
    homeBannerData: {
      loading: true,
      homeInfo: {},
    },
    serviceData: {
      loading: true,
      serviceData: {},
    },

    summaryData: {
      loading: true,
      summaryData: {},
    },
    recentProjectData: {
      loading: true,
      recentProjectData: {},
    },
    courseData: {
      loading: true,
      courseData: {},
    },
    videoData: {
      loading: true,
      videoData: {},
    },
    reviewData: {
      loading: true,
      reviewData: {},
    },
    footerData: {
      loading: true,
      footerData: {},
    },
    aboutData: {
      loading: true,
      aboutData: {},
    },
    refundData: {
      loading: true,
      refundData: {},
    },
    termsData: {
      loading: true,
      termsData: {},
    },
    privacyData: {
      loading: true,
      privacyData: {},
    },
  };

  componentDidMount() {
    this.fetchTopBannerData();
    this.fetchServiceData();
    this.fetchAnalysisData();
    this.fetchSummaryData();
    this.fetchRecentPostData();
    this.fetchCoursesData();
    this.fetchHowIDoData();
    this.fetchReviewData();
    this.fetchFooterData();
    this.fetchAboutData();
    this.fetchRefundData();
    this.fetchTermsConditionData();
    this.fetchPrivacyData();
  }

  // fetched data
  fetchTopBannerData = async () => {
    try {
      const res = await axiosInstance.get("home");
      const data = res.data?.data?.attributes;
      this.setState({
        homeBannerData: {
          homeInfo: {
            title: data?.title,
            sub_title: data?.sub_title,
            link: data?.link,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchServiceData = async () => {
    try {
      const res = await axiosInstance.get("service?populate=*");
      const data = res.data?.data?.attributes?.services;
      this.setState({
        serviceData: {
          serviceData: {
            services: data,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchAnalysisData = async () => {
    try {
      const res = await axiosInstance.get("technology?populate=*");
      const data = res.data?.data?.attributes;
      this.setState({
        technologyData: {
          technologyData: {
            technologies: data?.technologies,
            des_one: data?.des_one,
            des_two: data?.des_two,
            des_three: data?.des_three,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchSummaryData = async () => {
    try {
      const res = await axiosInstance.get("project-and-client?populate=*");
      const data = res.data?.data?.attributes;
      this.setState({
        summaryData: {
          summaryData: {
            requirements: data?.requirements,
            total_projects: data?.total_projects,
            total_clients: data?.total_clients,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchRecentPostData = async () => {
    try {
      const res = await axiosInstance.get("recent-project?populate=*");
      const data = res.data?.data?.attributes;
      this.setState({
        recentProjectData: {
          recentProjectData: {
            projects: data?.projects,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchCoursesData = async () => {
    try {
      const res = await axiosInstance.get("course?populate=*");
      const data = res.data?.data?.attributes;
      this.setState({
        courseData: {
          courseData: {
            courses: data?.courses,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchHowIDoData = async () => {
    try {
      const res = await axiosInstance.get("how-i-do");
      const data = res.data?.data?.attributes;
      this.setState({
        videoData: {
          videoData: {
            des: data?.des,
            link: data?.link,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchReviewData = async () => {
    try {
      const res = await axiosInstance.get("review?populate=*");
      const data = res.data?.data?.attributes;
      this.setState({
        reviewData: {
          reviewData: {
            reviews: data?.reviews,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchFooterData = async () => {
    try {
      const res = await axiosInstance.get("footer");
      const data = res.data?.data?.attributes;
      this.setState({
        footerData: {
          footerData: {
            fbLink: data?.fbLink,
            youLink: data?.youLink,
            address: data?.address,
            email: data?.email,
            phone: data?.phone,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchAboutData = async () => {
    try {
      const res = await axiosInstance.get("about");
      const data = res.data?.data?.attributes;
      this.setState({
        aboutData: {
          aboutData: {
            aboutMe: data?.aboutMe,
            mission: data?.mission,
            vision: data?.vision,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchRefundData = async () => {
    try {
      const res = await axiosInstance.get("refand");
      const data = res.data?.data?.attributes;
      this.setState({
        refundData: {
          refundData: {
            refandPolicy: data?.refandPolicy,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchTermsConditionData = async () => {
    try {
      const res = await axiosInstance.get("terms-and-condition");
      const data = res.data?.data?.attributes;
      this.setState({
        termsData: {
          termsData: {
            condition: data?.condition,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchPrivacyData = async () => {
    try {
      const res = await axiosInstance.get("privacy-policy");
      const data = res.data?.data?.attributes;
      this.setState({
        privacyData: {
          privacyData: {
            privacyPolicy: data?.privacyPolicy,
            loading: false,
          },
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    const value = {
      homeBannerData: this.state.homeBannerData,
      serviceData: this.state.serviceData,
      technologyData: this.state.technologyData,
      summaryData: this.state.summaryData,
      recentProjectData: this.state.recentProjectData,
      courseData: this.state.courseData,
      videoData: this.state.videoData,
      reviewData: this.state.reviewData,
      footerData: this.state.footerData,
      aboutData: this.state.aboutData,
      refundData: this.state.refundData,
      termsData: this.state.termsData,
      privacyData: this.state.privacyData,
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
