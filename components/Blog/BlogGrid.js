import React, { Component, useEffect } from "react";
import Link from "next/link";
import { sortedBlogs } from "../blogs";
import { Pagination } from "@mui/material";
const BLOGS_PER_PAGE = 6;

class BlogGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      blogsPerPage: BLOGS_PER_PAGE,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo(0, 110);
    }
  }
  render() {
    const { currentPage, blogsPerPage } = this.state;
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            {currentBlogs.map((blog) => {
              return (
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
                              width: "100%",
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
                          <img src="/images/author/author1.png" alt="image" />
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
              );
            })}
          </div>
          <Pagination
            count={Math.ceil(sortedBlogs.length / blogsPerPage)}
            showFirstButton
            showLastButton
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,

              ".MuiPagination-ul": {
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",

                ".MuiPaginationItem-root": {
                  margin: "0 4px",
                  fontSize: 16,
                  borderRadius: "4px",

                  "&.Mui-selected": {
                    backgroundColor: "#35b4ab",
                    color: "#fff",
                  },

                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                },
              },
            }}
            size="large"
            page={currentPage}
            onChange={(e, page) => {
              this.setState({ currentPage: page });
            }}
          />
        </div>
      </section>
    );
  }
}

export default BlogGrid;
