import React, { Component } from "react";
import Link from "next/link";
import { blogs } from "../blogs";

class BlogPostStyleOne extends Component {
  render() {
    return (
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Popular Blogs</h2>
          </div>
          <div className="row">
            {blogs.map((blog) => {
              return (
                <Link
                  key={blog.id}
                  href="/blog-details/[id]"
                  as={`/blog-details/${blog.id}`}
                >
                  <div className="col-lg-4 col-md-6">
                    <div className="single-blog-post">
                      <div className="post-image">
                        <Link
                          key={blog.id}
                          href="/blog-details/[id]"
                          as={`/blog-details/${blog.id}`}
                        >
                          <a>
                            <img
                              style={{ minHeight: 300, maxHeight: 300 }}
                              src={blog.blog_cover_img}
                              alt="image"
                            />
                          </a>
                        </Link>

                        <div className="date">
                          <i className="bx bx-calendar"></i> {blog.written_on}
                        </div>
                      </div>

                      <div className="post-content">
                        <h3 style={{ minHeight: "60px" }}>
                          <Link
                            key={blog.id}
                            href="/blog-details/[id]"
                            as={`/blog-details/${blog.id}`}
                          >
                            <a>{blog.title}</a>
                          </Link>
                        </h3>

                        <div className="post-info">
                          <div className="post-by">
                            <img
                              src="/images/author/author1.png"
                              alt={"image"}
                            />
                            <h6>{blog.written_by}</h6>
                          </div>

                          <div className="details-btn">
                            <Link
                              key={blog.id}
                              href="/blog-details/[id]"
                              as={`/blog-details/${blog.id}`}
                            >
                              <a>
                                <i className="bx bx-right-arrow-alt"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="blog-notes">
              <p>
                Insights to help you do what you do better, faster and more
                profitably.{" "}
                <Link href="/blog">
                  <a>read full blog</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogPostStyleOne;
