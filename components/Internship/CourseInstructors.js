import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import InstructorCard from "./InstructorCard";
import janmey from "../../out/images/internship/janmey.jpeg";
import dhruvil from "../../out/images/internship/dhruvil.jpg";
import hemant from "../../out/images/internship/hemant.jpg";
import palak from "../../out/images/internship/palak.jpg";

class CourseInstructors extends Component {
  render() {
    return (
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Course Instructors</h2>
          </div>

          <div className="container">
            <div className="row">
              <InstructorCard
                name={"Janmey Solanki"}
                avatar={janmey}
                designation={"Full-stack Developer"}
                experience={"Einfonets"}
              />
              <InstructorCard
                name={"Hemant Vaghela"}
                avatar={hemant}
                designation={"Visual / Graphic Designer "}
                experience={"TCS I Ex- Byjus"}
              />
              <InstructorCard
                name={"Palak Sheth"}
                avatar={palak}
                designation={"UI/ UX Designer"}
                experience={"TCS I Ex- Lollypop"}
              />
              <InstructorCard
                name={"Dhruvil Shah"}
                avatar={dhruvil}
                designation={"Motion Graphic Designer"}
                experience={"Walmart I Ex- Byjus"}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseInstructors;
