import React, { Component } from "react";
import Benefits from "../components/Internship/Benefits";
import Courses from "../components/Internship/Courses";
import Navbar from "../components/Layouts/NavbarFour";
import Footer from "../components/Layouts/Footer";
import CourseInstructors from "../components/Internship/CourseInstructors";
import Register from "../components/Internship/Register";
import ClientsFeedbackSliderTwo from "../components/Common/ClientsFeedbackSliderTwo";

class Internship extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Register />
        <Benefits />
        <Courses />
        <CourseInstructors />
        <ClientsFeedbackSliderTwo />
        <Footer />
      </>
    );
  }
}

export default Internship;
