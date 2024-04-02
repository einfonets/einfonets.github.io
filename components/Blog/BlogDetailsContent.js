import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import { Box, Button, Radio, Stack, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";
import { blogs } from "../blogs";

import VisibilityIcon from "@mui/icons-material/Visibility";
const BlogDetailsContent = ({
  blogDetails,
  blogContent,
  nextBlogIndex,
  prevBlogIndex,
  blogId,
}) => {
  const [feedback, setFeedback] = useState("");
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };
  const blogurl = `https://einfonets.com/blog-details/${blogId}/`;

  return (
    <section className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img
                  src={blogContent?.title_img}
                  alt="image"
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="bx bx-time"></i>
                      <a>{blogContent?.written_on}</a>
                    </li>
                    <li>
                      <i className="bx bx-user"></i>
                      <a>{blogContent?.written_by}</a>
                    </li>
                    <li>
                      <a>{blogDetails?.read_time} min read</a>
                    </li>
                  </ul>
                </div>

                {/* Blog Body */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogContent?.content,
                  }}
                />
                {/* Blog Body */}
              </div>
              {/* Article footer */}
              <div className="article-footer">
                <div className="article-tags">
                  {blogContent?.hashtags?.map((hashtag, index) => (
                    <a style={{ marginBottom: 8 }} key={index}>
                      #{hashtag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Blog Footer */}
              <Stack
                direction="row"
                sx={{ mt: 4 }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">Was this blog helpful?</Typography>

                  <Radio
                    value="thumbsUp"
                    checked={feedback === "thumbsUp"}
                    onChange={handleFeedbackChange}
                    icon={<ThumbUpOutlinedIcon />}
                    checkedIcon={<ThumbUpIcon />}
                  />
                  <Radio
                    value="thumbsDown"
                    checked={feedback === "thumbsDown"}
                    onChange={handleFeedbackChange}
                    icon={<ThumbDownOutlinedIcon />}
                    checkedIcon={<ThumbDownIcon />}
                  />
                </Stack>
                <Stack>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <VisibilityIcon />
                    {blogContent?.visits}
                  </Stack>
                </Stack>
              </Stack>
              <Stack sx={{ mb: 4 }}>
                <Typography variant="h7">
                  Having something to say? We are open for feedback{" "}
                  <a
                    href="mailto:info@einfonets.com"
                    style={{ textDecoration: "underline" }}
                  >
                    here
                  </a>
                </Typography>
              </Stack>

              {/* Share blog section */}
              <div className="widget-area" id="secondary">
                <div className="widget widget_tag_cloud">
                  <h3 className="widget-title">Share this blog</h3>

                  <div className="tagcloud">
                    <WhatsappShareButton url={blogurl}>
                      <a>
                        <WhatsappIcon size={20} round={true} /> Whatsapp
                      </a>
                    </WhatsappShareButton>
                    <LinkedinShareButton url={blogurl}>
                      <a>
                        <LinkedinIcon size={20} round={true} /> Linkedin
                      </a>
                    </LinkedinShareButton>
                    <TwitterShareButton url={blogurl}>
                      <a>
                        <TwitterIcon size={20} round={true} /> Twitter
                      </a>
                    </TwitterShareButton>

                    <RedditShareButton url={blogurl}>
                      <a>
                        <RedditIcon size={20} round={true} /> Reddit
                      </a>
                    </RedditShareButton>

                    <PinterestShareButton
                      url={blogurl}
                      media={blogContent?.title_img}
                    >
                      <a>
                        <PinterestIcon size={20} round={true} /> Pinterest
                      </a>
                    </PinterestShareButton>

                    <FacebookShareButton url={blogurl}>
                      <a>
                        <FacebookIcon size={20} round={true} /> Facebook
                      </a>
                    </FacebookShareButton>
                    <EmailShareButton url={blogurl}>
                      <a>
                        {" "}
                        <EmailIcon size={20} round={true} /> Email
                      </a>
                    </EmailShareButton>
                    {/* <Link href="/blog">
              <a>
                Tips <span className="tag-link-count">(2)</span>
              </a>
            </Link> */}
                  </div>
                </div>
              </div>

              {/* Comments */}
              {/* <BlogComments /> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <BlogSidebar />
          </div>
        </div>

        {/* bottom promotion banner */}
        <Stack sx={{ mt: 4 }}>
          <div
            className="widget widget_tag_cloud"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <h3 className="widget-title">
              <Link href="/">
                <a
                  style={{
                    color: "#29a59e",
                    cursor: "pointer",
                  }}
                >
                  einfonets
                </a>
              </Link>
              : Product Engineering Services | Digital Transformation Cloud
              Solutions{" "}
            </h3>

            <Box
              className="tagcloud"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                "@media (max-width: 768px)": {
                  flexWrap: "wrap",
                },
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1264382760/vector/people-rate-online-vector-illustration-cartoon-flat-customer-characters-leave-positive.jpg?s=612x612&w=0&k=20&c=z0gGeas6MR9yBVBdJTQvIAWpnzA5BjM3_JYX0_SpEhY="
                alt="image"
              />
              <Typography variant="h7">
                Find out five reasons why you should choose{" "}
                <Link href="/">
                  <span style={{ color: "#29a59e", cursor: "pointer" }}>
                    einfonets
                  </span>
                </Link>{" "}
                for your next product development.
              </Typography>
            </Box>
            <Link href="/about">
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  margin: "auto",
                  background: "#ff612f",
                  "&:hover": {
                    background: "#29a59e",
                  },
                }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Stack>

        <div className="post-navigation">
          <div className="prev-link-wrapper">
            <div
              className="info-prev-link-wrapper"
              style={{ cursor: "pointer" }}
            >
              <Link
                href="/blog-details/[id]"
                as={`/blog-details/${blogs[prevBlogIndex].id}`}
              >
                <a>
                  <span className="image-prev">
                    <img
                      style={{
                        maxWidth: 100,
                        minWidth: 100,
                        minHeight: 100,
                        maxHeight: 100,
                        objectFit: "cover",
                      }}
                      src={blogs[prevBlogIndex].blog_cover_img}
                      alt="Previous Blog"
                    />
                    <span className="post-nav-title">Prev</span>
                  </span>

                  <span className="prev-link-info-wrapper">
                    <span className="prev-title">
                      {blogs[prevBlogIndex].title}
                    </span>
                    <span className="meta-wrapper">
                      <span className="date-post">
                        {blogs[prevBlogIndex].written_on}
                      </span>
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div
            className="next-link-wrapper"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              className="info-next-link-wrapper"
              style={{ cursor: "pointer" }}
            >
              <Link
                href="/blog-details/[id]"
                as={`/blog-details/${blogs[nextBlogIndex].id}`}
              >
                <a>
                  <span className="next-link-info-wrapper">
                    <span className="next-title">
                      {blogs[nextBlogIndex].title}
                    </span>
                    <span className="meta-wrapper">
                      <span className="date-post">
                        {blogs[nextBlogIndex].written_on}
                      </span>
                    </span>
                  </span>

                  <span className="image-next">
                    <img
                      style={{
                        maxWidth: 100,
                        minWidth: 100,
                        minHeight: 100,
                        maxHeight: 100,
                        objectFit: "cover",
                      }}
                      src={blogs[nextBlogIndex].blog_cover_img}
                      alt="Next Blog"
                    />
                    <span className="post-nav-title">Next</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
