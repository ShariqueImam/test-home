import React, { useState, useEffect } from "react";
import BlogImage from "../../../assets/butter1.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import FounderImg from "../../../assets/client1.jpg";
import { urlForThumbnail } from "../image";
import client from "../client";
import { useParams } from "react-router-dom";
const BusinessSolution = ({ data }) => {
  const [BlogsData, setBlogsData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  let { id } = useParams();
  sessionStorage.setItem("link", id);
  useEffect(() => {
    // if (!router.isReady) return;
    // console.log(router.query.id)
    const getBlogs = async () => {
      const blogs = await client.fetch(`*[_type=='blog']`);
      if (blogs && blogs.length > 0) {
        const filteredBlog = blogs.filter(
          (singleBlog) => singleBlog.tag === sessionStorage.getItem("link", id)
        );
        if (filteredBlog && filteredBlog.length > 0) {
          setBlogsData(filteredBlog);
        }
      }
    };

    getBlogs();
  }, [isFilter]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-[90%] md:w-[70%] lg:w-[50%] mx-auto ">
      {/* Header Image Section */}
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden ">
        {BlogsData[0]?.image && (
          <img
            src={urlForThumbnail(BlogsData[0]?.image)}
            alt="Business team in meeting"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Meta Information */}
      <div className="flex items-center gap-4 mb-6">
        <span className="bg-yellow text-white px-4 py-1 rounded-full text-sm font-medium">
          {BlogsData[0]?.blogType}
        </span>
        <div className="text-gray-600 text-sm">
          <span>Founder</span>
          <span className="mx-2">/</span>
          <span>{BlogsData[0]?.date}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {BlogsData[0]?.title}
        </h1>

        {BlogsData[0]?.details?.map((text) => (
          <div className="text-gray-600 leading-relaxed">{text}</div>
        ))}
      </div>
      {/* adding the blog feature comment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-6 md:py-12 font">
        {BlogsData[0]?.blogFeatures?.map((service) => {
          console.log(service);
          return (
            <div className="bg-yellowDark p-8 flex items-center gap-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {service.blogFeaturesHeading}
                </h3>
                <p className="text-white">{service.blogFeaturesText}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center">
        « WHAT OUR FOUNDER SAYS »
      </p>

      {/* adding the blog comment of author */}
      <div className="max-w-3xl mx-auto p-8 bg-amber-50 rounded-lg relative font my-8 md:my-16 w-full mx-auto ">
        {/* Large quotation marks */}
        <div className="text-yellowDark text-6xl absolute top-4 left-4">"</div>
        <div className="text-yellowDark text-6xl absolute bottom-4 right-4">
          "
        </div>

        {/* Testimonial text */}
        <div className="mb-8 px-8 text-black italic">
          {BlogsData[0]?.blogAuthorComment}
        </div>

        {/* Profile section */}
        <div className="flex items-center gap-6">
          {/* Profile image */}
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={FounderImg}
              alt="Morata Bara"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            {/* Name and title */}
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-black">Morata Bara</h3>
              <span className="text-gray-500">-</span>
              <span className="text-gray-500">Founder</span>
            </div>

            {/* Social media links */}
            <div className="flex gap-4 mt-2">
              <button className="text-gray-500 hover:text-blue-500 transition-colors">
                <BsFacebook size={20} className="text-yellow" />
              </button>
              <button className="text-gray-500 hover:text-blue-500 transition-colors">
                <AiFillInstagram size={20} className="text-yellow" />
              </button>
              <button className="text-gray-500 hover:text-blue-500 transition-colors">
                <BsTwitter size={20} className="text-yellow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolution;
