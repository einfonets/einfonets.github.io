import React, { Component, useEffect, useMemo, useState } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import FreeTrialArea from "../../components/Common/FreeTrialArea";
import Footer from "../../components/Layouts/Footer";
import { useRouter } from "next/router";
import { blogs } from "../../components/blogs";
import firebase from "../../firebase/clientApp";
const BlogDetails = ({
  blogDetails,
  blogContent,
  nextBlogIndex,
  prevBlogIndex,
  blogId,
}) => {
  return (
    <>
      <NavbarThree />

      <PageTitleArea
        pageTitle={blogDetails?.title}
        pageDescription={blogDetails?.written_by}
      />

      <BlogDetailsContent
        blogDetails={blogDetails}
        blogContent={blogContent}
        nextBlogIndex={nextBlogIndex}
        prevBlogIndex={prevBlogIndex}
        blogId={blogId}
      />

      <FreeTrialArea />

      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  // const [blogId, setBlogId] = useState();
  // useEffect(() => {
  //   if (router.isReady) {
  //     var blogId = router.query.id;
  //     setBlogId(blogId);
  //   }
  // }, [router.isReady]);
  const blogId = params.id;
  const currentBlogIndex = blogs.findIndex((blog) => blog.id === blogId);
  const prevBlogIndex = (currentBlogIndex - 1 + blogs.length) % blogs.length;
  const nextBlogIndex = (currentBlogIndex + 1) % blogs.length;
  const blogDetails = blogs.find((blog) => blog.id === blogId);
  const fetchBlogDetails = async () => {
    try {
      const blogCountRef = firebase
        .firestore()
        .collection("blogs-count")
        .doc(blogId);
      const doc = await blogCountRef.get();

      if (doc.exists) {
        return {
          visits: doc.data().visits + 1,
          content: doc.data().content,
          title_img: doc.data().title_img,
          written_on: doc.data().written_on,
          written_by: doc.data().written_by,
          hashtags: doc.data().hashtags,
        }; // Return the visitor count if the document exists
      } else {
        return {
          visits: 1,
          content: blogDetails?.blog_details?.page_content,
          title_img: blogDetails?.blog_details?.title_img,
          written_on: blogDetails?.written_on,
          written_by: blogDetails?.written_by,
          hashtags: blogDetails?.blog_details?.hashtags,
        }; // Return 0 if the document doesn't exist (no visitors yet)
      }
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      return 0; // Return 0 in case of an error
    }
  };

  var blogContent = await fetchBlogDetails();

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
          title_img: blogDetails?.blog_details?.title_img,
          written_on: blogDetails?.written_on,
          written_by: blogDetails?.written_by,
          hashtags: blogDetails?.blog_details?.hashtags,
          read_time: blogDetails?.read_time,
        });
      }
    } catch (error) {
      console.error("Error updating visitor count:", error);
    }
  };

  incrementVisitorCounter();

  return {
    props: { blogDetails, blogContent, nextBlogIndex, prevBlogIndex, blogId },
  };
}

export default BlogDetails;

export async function getStaticPaths() {
  // Generate the paths for all blog posts
  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));

  return { paths, fallback: false }; // fallback: false means that undefined paths will result in a 404 page
}
