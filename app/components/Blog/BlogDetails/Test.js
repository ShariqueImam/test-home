import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BlogDetails from "../../components/Blog/BlogDetails/BlogDetails";
import client from "../api/client";
const id = () => {
  const [BlogsData, setBlogsData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    // console.log(router.query.id)
    const getBlogs = async () => {
      const blogs = await client.fetch(`*[_type=='blog']`);
      if (blogs && blogs.length > 0) {
        setBlogsData(blogs);
      }
      console.log(blogs)
      const filteredBlog = dummyData.filter(
        (singleBlog) => singleBlog.id === router.query.id
      );
      if (filteredBlog && filteredBlog.length > 0) {
        setBlogsData(filteredBlog);
      }
    };
    getBlogs();
  }, [router.isReady]);

  return (
    <div>
      <Navbar onScroll={() => {}} />
      {BlogsData.length > 0 && <BlogDetails blogData={BlogsData} />}
      <Footer onScroll={() => {}} />
    </div>
  );
};

export default id;
const dummyData = [
  {
    id: "name-to-be-showed-in-the-link1",
    name: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
    date: "25 August 2022",
    img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
    content: [
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
    ],
  },
  {
    id: "name-to-be-showed-in-the-link2",
    name: "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
    date: "25 August 2022",
    img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
    content: [
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
    ],
  },
  {
    id: "name-to-be-showed-in-the-link3",
    name: "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
    date: "25 August 2022",
    img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
    content: [
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
    ],
  },
  {
    id: "name-to-be-showed-in-the-link4",
    name: "4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
    date: "25 August 2022",
    img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
    content: [
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
    ],
  },
  {
    id: "name-to-be-showed-in-the-link5",
    name: "5Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, velit praesentium",
    date: "25 August 2022",
    img: "https://milagros.bg/wp-content/uploads/2022/10/grija-za-kojata.png",
    content: [
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
      {
        heading: "veritatis voluptas magni commodi cum est",
        para: "  neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.   neque nihil doloribus tempora fuga dolorem itaque similique, at impedit qui minus perspiciatis.",
      },
    ],
  },
];
