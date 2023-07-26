import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import FreeTrialArea from "../../components/Common/FreeTrialArea";
import Footer from "../../components/Layouts/Footer";
import { useRouter } from "next/router";
import { blogs } from "../../components/blogs";

const BlogDetails = () => {
  const router = useRouter();
  const blogId = router.query.id;
  console.log(blogId);
  const blogDetails = blogs.find((blog) => blog.id === blogId);
  console.log(blogDetails);

  return (
    <>
      <NavbarThree />

      <PageTitleArea
        pageTitle={blogDetails?.title}
        pageDescription={blogDetails?.written_by}
      />

      <BlogDetailsContent />

      <FreeTrialArea />

      <Footer />
    </>
  );
};

export default BlogDetails;
