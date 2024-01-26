import React, { Component } from "react";
import Link from "next/link";
import { sortedBlogs } from "../blogs";

class BlogPostStyleOne extends Component {
  render() {
    return (
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Popular Blogs</h2>
          </div>
          <div className="row">
            {sortedBlogs.slice(0, 3).map((blog) => {
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
                              style={{
                                minHeight: 300,
                                maxHeight: 300,
                                objectFit: "cover",
                              }}
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
              <h5>
                Insights to help you do what you do better, faster and more
                profitably.{" "}
              </h5>

              <Link href="/blog">
                <a className="default-btn" style={{ marginTop: 12 }}>
                  Checkout All Blogs
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogPostStyleOne;
