import React, { useState, useEffect } from "react";
import Header from "../../UI/Header/Header";
import BlogContent from "./BlogContent";
import Footer from "../../UI/Footer/Footer";
import client from "../client";
import { useParams } from "react-router-dom";

export const BlogDetails = () => {
  // const [BlogsData, setBlogsData] = useState([]);
  // const [isFilter, setIsFilter] = useState(false);
  // let { id } = useParams();
  // useEffect(() => {
  //   // if (!router.isReady) return;
  //   // console.log(router.query.id)
  //   const getBlogs = async () => {
  //     const blogs = await client.fetch(`*[_type=='blog']`);
  //     if (blogs && blogs.length > 0) {
  //       setBlogsData(blogs);
  //     }
  //     const filteredBlog = BlogsData.filter(
  //       (singleBlog) => singleBlog.tag === id
  //     );
  //     console.log(filteredBlog)
  //     if (filteredBlog && filteredBlog.length > 0) {
  //       setIsFilter(true);
  //       setBlogsData(filteredBlog);
  //     }
  //   };
  //   getBlogs();
  // }, [isFilter]);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const orderData = await client.fetch(`*[_type=='blog']`);
  //     if (orderData && orderData.length > 0) {
  //       setData(orderData);
  //     }
  //   };
  //   getProduct();
  // }, []);
  window.scrollTo(0, 0);

  return (
    <div>
      <Header
        text="Our Blog"
        para="We bring you the finest Shea Butter—crafted with care to nourish your skin and soul."
        link="blogs"
      />
      <BlogContent />
      <div className="w-full bg-yellowDark">
        <Footer />
      </div>
    </div>
  );
};
export default BlogDetails;
