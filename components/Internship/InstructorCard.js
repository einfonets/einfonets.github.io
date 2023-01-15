import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class InstructorCard extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <div className="single-blog-post">
          <div className="post-image">
            <a>
              {this.props.avatar ? (
                <div className="avatar-img">
                  <Image src={this.props.avatar} alt="image" />
                </div>
              ) : (
                <img src="/images/blog/blog1.jpg" alt="image" />
              )}
            </a>
          </div>

          <div className="post-content">
            <h3>{this.props.name}</h3>
            <p>{this.props.designation}</p>
            <span>{this.props.experience}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default InstructorCard;
