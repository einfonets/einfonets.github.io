import React, { Component } from "react";
import Link from "next/link";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { blogs } from "../blogs";

const BlogSidebar = () => {
  const router = useRouter();
  const blogId = router.query.id;
  const blogDetails = blogs.find((blog) => blog.id === blogId);
  const sortedBlogs = blogs
    .map((blog) => ({
      ...blog,
      written_on: new Date(blog.written_on),
    }))
    .sort((a, b) => b.written_on - a.written_on);

  // Get the last 3 blogs from the sorted array
  const popularBlogs = sortedBlogs.slice(0, 3);

  return (
    <div className="widget-area" id="secondary">
      {/* Search widget */}
      {/* <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </div> */}

      {/* Popular Posts */}
      <div className="widget widget_spacle_posts_thumb">
        <h3 className="widget-title">Popular Blogs</h3>

        {popularBlogs.map((blog) => (
          <article className="item" key={blog.id}>
            <Link href={`/blog-details/${blog.id}`}>
              <a className="thumb">
                <span
                  className="fullimage cover"
                  style={{ backgroundImage: `url(${blog.blog_cover_img})` }}
                  role="img"
                ></span>
              </a>
            </Link>

            <div className="info">
              <time>{blog.written_on.toDateString()}</time>
              <h4 className="title usmall">
                <Link href={`/blog-details/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        ))}
      </div>

      {/* Categories */}
      {/* <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                <a>
                  Business <span className="post-count">(05)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Privacy <span className="post-count">(10)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Technology <span className="post-count">(04)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Tips <span className="post-count">(15)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Uncategorized <span className="post-count">(1)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div> */}

      {/* Archive */}
      {/* <div className="widget widget_archive">
          <h3 className="widget-title">Archives</h3>

          <ul>
            <li>
              <Link href="#">
                <a>May 2020</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>April 2020</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Feb 2020</a>
              </Link>
            </li>
          </ul>
        </div> */}

      {/* Tags */}
      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Tags</h3>

        <div className="tagcloud">
          {blogDetails?.blog_details.hashtags.map((hashtag) => (
            <a key={hashtag}>{hashtag}</a>
          ))}
          {/* <Link href="/blog">
              <a>
                Tips <span className="tag-link-count">(2)</span>
              </a>
            </Link> */}
        </div>
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">
          Looking for hassle free product Development?
        </h3>

        <div className="tagcloud">
          <img
            src="https://www.globalheight.com/images/product-development-2.gif"
            alt="image"
          />
          <Typography variant="h7">
            Discover impactful development solutions with{" "}
            <Link href="/">
              <span style={{ color: "#29a59e", cursor: "pointer" }}>
                einfonets
              </span>
            </Link>{" "}
            and take your business to the next level .
          </Typography>
          <br />
          <br />
          <Link href="/">
            <Button
              variant="contained"
              sx={{
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
    </div>
  );
};
// class BlogSidebar extends Component {
//   render() {
//     return (
//       <div className="widget-area" id="secondary">
//         {/* Search widget */}
//         {/* <div className="widget widget_search">
//           <form className="search-form">
//             <label>
//               <input
//                 type="search"
//                 className="search-field"
//                 placeholder="Search..."
//               />
//             </label>
//             <button type="submit">
//               <i className="bx bx-search-alt"></i>
//             </button>
//           </form>
//         </div> */}

//         {/* Popular Posts */}
//         <div className="widget widget_spacle_posts_thumb">
//           <h3 className="widget-title">Popular Blogs</h3>

//           <article className="item">
//             <Link href="/blog-details">
//               <a className="thumb">
//                 <span className="fullimage cover bg1" role="img"></span>
//               </a>
//             </Link>

//             <div className="info">
//               <time>Feb 10, 2020</time>
//               <h4 className="title usmall">
//                 <Link href="/blog-details">
//                   <a>Making peace with the feast or famine of freelancing</a>
//                 </Link>
//               </h4>
//             </div>

//             <div className="clear"></div>
//           </article>

//           <article className="item">
//             <Link href="/blog-details">
//               <a className="thumb">
//                 <span className="fullimage cover bg2" role="img"></span>
//               </a>
//             </Link>

//             <div className="info">
//               <time>Feb 21, 2020</time>
//               <h4 className="title usmall">
//                 <Link href="/blog-details">
//                   <a>I used the web for a day on a 50 mb budget</a>
//                 </Link>
//               </h4>
//             </div>

//             <div className="clear"></div>
//           </article>

//           <article className="item">
//             <Link href="/blog-details">
//               <a className="thumb">
//                 <span className="fullimage cover bg3" role="img"></span>
//               </a>
//             </Link>

//             <div className="info">
//               <time>Feb 30, 2020</time>
//               <h4 className="title usmall">
//                 <Link href="/blog-details">
//                   <a>How to create a responsive popup gallery?</a>
//                 </Link>
//               </h4>
//             </div>

//             <div className="clear"></div>
//           </article>
//         </div>

//         {/* Categories */}
//         {/* <div className="widget widget_categories">
//           <h3 className="widget-title">Categories</h3>

//           <ul>
//             <li>
//               <Link href="/blog">
//                 <a>
//                   Business <span className="post-count">(05)</span>
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog">
//                 <a>
//                   Privacy <span className="post-count">(10)</span>
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog">
//                 <a>
//                   Technology <span className="post-count">(04)</span>
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog">
//                 <a>
//                   Tips <span className="post-count">(15)</span>
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog">
//                 <a>
//                   Uncategorized <span className="post-count">(1)</span>
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div> */}

//         {/* Archive */}
//         {/* <div className="widget widget_archive">
//           <h3 className="widget-title">Archives</h3>

//           <ul>
//             <li>
//               <Link href="#">
//                 <a>May 2020</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="#">
//                 <a>April 2020</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="#">
//                 <a>Feb 2020</a>
//               </Link>
//             </li>
//           </ul>
//         </div> */}

//         {/* Tags */}
//         <div className="widget widget_tag_cloud">
//           <h3 className="widget-title">Tags</h3>

//           <div className="tagcloud">
//             <a>IT</a>

//             <a>React</a>

//             <a>Angular</a>

//             <a>Vue</a>

//             <a>Web</a>

//             <a>JS</a>

//             <a>Comparison</a>
//             {/* <Link href="/blog">
//               <a>
//                 Tips <span className="tag-link-count">(2)</span>
//               </a>
//             </Link> */}
//           </div>
//         </div>

//         <div className="widget widget_tag_cloud">
//           <h3 className="widget-title">
//             Looking for hassle free product Development?
//           </h3>

//           <div className="tagcloud">
//             <img
//               src="https://www.globalheight.com/images/product-development-2.gif"
//               alt="image"
//             />
//             <Typography variant="h7">
//               Discover impactful development solutions with{" "}
//               <Link href="/">
//                 <span style={{ color: "#29a59e", cursor: "pointer" }}>
//                   einfonets
//                 </span>
//               </Link>{" "}
//               and take your business to the next level .
//             </Typography>
//             <br />
//             <br />
//             <Link href="/">
//               <Button
//                 variant="contained"
//                 sx={{
//                   background: "#ff612f",
//                   "&:hover": {
//                     background: "#29a59e",
//                   },
//                 }}
//               >
//                 Learn More
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default BlogSidebar;
