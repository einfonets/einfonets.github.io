import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import { Button, Radio, Stack, Typography } from "@mui/material";
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
import firebase from "../../firebase/clientApp";
import VisibilityIcon from "@mui/icons-material/Visibility";
const BlogDetailsContent = () => {
  const router = useRouter();
  const blogId = router.query.id;
  const currentBlogIndex = blogs.findIndex((blog) => blog.id === blogId);
  const prevBlogIndex = (currentBlogIndex - 1 + blogs.length) % blogs.length;
  const nextBlogIndex = (currentBlogIndex + 1) % blogs.length;
  const blogDetails = blogs.find((blog) => blog.id === blogId);
  const blogurl = `https://einfonets.com/blog-details/${blogId}/`;
  const [feedback, setFeedback] = useState("");
  const [blogvisits, setBlogVisits] = useState(0);
  const [blogContent, setBlogContent] = useState("");
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const incrementVisitorCounter = async () => {
    const blogCountRef = firebase
      ?.firestore()
      ?.collection("blogs-count")
      ?.doc(blogId);

    try {
      const doc = await blogCountRef.get();

      if (doc.exists) {
        // If the document exists, increment the 'visits' field
        blogCountRef.update({
          visits: firebase.firestore.FieldValue.increment(1),
        });
      } else {
        // If the document doesn't exist, create it with an initial value of 1
        blogCountRef.set({
          visits: 1,
          content: blogDetails?.blog_details?.page_content,
        });
      }
    } catch (error) {
      console.error("Error updating visitor count:", error);
    }
  };

  useEffect(() => {
    if (blogId !== undefined) {
      incrementVisitorCounter();
      const setBlogDetails = async () => {
        if (blogId !== undefined) {
          const details = await fetchBlogDetails();
          setBlogVisits(details.visits);
          setBlogContent(details.content);
        }
      };

      setBlogDetails();
    }
  }, [blogId]);
  const fetchBlogDetails = async () => {
    try {
      const blogCountRef = firebase
        .firestore()
        .collection("blogs-count")
        .doc(blogId);
      const doc = await blogCountRef.get();

      if (doc.exists) {
        return { visits: doc.data().visits + 1, content: doc.data().content }; // Return the visitor count if the document exists
      } else {
        return { visits: 1, content: blogDetails?.blog_details?.page_content }; // Return 0 if the document doesn't exist (no visitors yet)
      }
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      return 0; // Return 0 in case of an error
    }
  };
  return (
    <section className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img src={blogDetails?.blog_details?.title_img} alt="image" />
              </div>
              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="bx bx-time"></i>
                      <Link href="#">
                        <a>{blogDetails?.written_on}</a>
                      </Link>
                    </li>
                    <li>
                      <i className="bx bx-user"></i>
                      <Link href="/blog">
                        <a>{blogDetails?.written_by}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <List>
                        <ListItem>
                          <ListItemButton sx={{ borderRadius: "50px" }}>
                            <a href="#section-1">Standard Image Loading</a>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton sx={{ borderRadius: "50px" }}>
                            <a href="#section-2">Basic Image Loading</a>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton sx={{ borderRadius: "50px" }}>
                            <a href="#section-3">Independent Image Loaders</a>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton sx={{ borderRadius: "50px" }}>
                            <a href="#section-4">Different Image Loaders</a>
                          </ListItemButton>
                        </ListItem>
                      </List> */}
                {/* Blog Body */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogContent,
                  }}
                />
                {/* <pre>
                  <code>
                    return{" "}
                    <>
                      <img src="" alt="image_with_loader" id="loading-image" />
                    </>
                  </code>
                </pre> */}
                {/* <ul class="block-gallery columns-3">
                  <li class="blocks-gallery-item">
                    <figure>
                      <img src="/images/blog/gallery1.jpg" alt="image" />
                    </figure>
                  </li>

                  <li class="blocks-gallery-item">
                    <figure>
                      <img src="/images/blog/gallery2.jpg" alt="image" />
                    </figure>
                  </li>

                  <li class="blocks-gallery-item">
                    <figure>
                      <img src="/images/blog/gallery3.jpg" alt="image" />
                    </figure>
                  </li>
                </ul>
                <h3 class="mb-0">Four major elements that we offer:</h3>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="features-list">
                      <li>
                        <i class="bx bx-check-double"></i>
                        Scientific Skills For getting a better result
                      </li>
                      <li>
                        <i class="bx bx-check-double"></i>
                        Communication Skills to getting in touch
                      </li>
                      <li>
                        <i class="bx bx-check-double"></i>A Career Overview
                        opportunity Available
                      </li>
                      <li>
                        <i class="bx bx-check-double"></i>A good Work
                        Environment For work
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-6">
                    <ul class="features-list">
                      <li>
                        <i class="bx bx-check-double"></i>
                        Scientific Skills For getting a better result
                      </li>
                      <li>
                        <i class="bx bx-check-double"></i>
                        Communication Skills to getting in touch
                      </li>
                      <li>
                        <i class="bx bx-check-double"></i>A Career Overview
                        opportunity Available
                      </li>
                      <li>
                        <i class="bx bx-check-double"></i>A good Work
                        Environment For work
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus.
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus.
                </p>{" "} */}
                {/* Blog Body */}
              </div>
              {/* Article footer */}
              <div className="article-footer">
                <div className="article-tags">
                  {blogDetails?.blog_details.hashtags.map((hashtag, index) => (
                    <a key={index}>#{hashtag}</a>
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
                    {blogvisits}
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
                      media={blogDetails?.blog_details?.title_img}
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
          <div className="widget widget_tag_cloud">
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

            <div className="tagcloud">
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
              <br />
              <br />
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
