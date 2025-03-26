"use client";
import { blogs1 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import client from "@/app/client";
import { urlForThumbnail } from "@/app/sanity-image-builder";

export default async function Blog() {
  // const [Data, setData] = React.useState(null); // Store data in state

  // async function GetProducts() {
  //   let data = await client.fetch(`*[_type == "blog"]`);
  //   setData(data);
  // }

  // React.useEffect(() => {
  //   GetProducts();
  // }, []);

  async function getData() {
    return await client.fetch(`*[_type == "blog"]`);
  }
  const DataFromSanity = await getData();
console.log('t')
  return (
    <div className="row mt-n50">
      {DataFromSanity?.map((elm, i) =>(
        <div
          key={i}
          className="post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft"
          data-wow-delay="0.2s"
        >
          <div className="post-prev-container">
            <div className="post-prev-img">
              <Link href={`/our-blogs/${elm.id}`}>
                <img
                  width={650}
                  height={412}
                  src={urlForThumbnail(elm.image)}
                  alt="Add Image Description"
                />
              </Link>
            </div>
            <h4 className="post-prev-title">
              <Link href={`/our-blogs/${elm.id}`}>{elm.title}</Link>
            </h4>
            <div className="post-prev-text">
              {elm.details[0].split(" ").slice(0, 10).join(" ") + "..."}
            </div>
            <div className="post-prev-info clearfix">
              <div className="float-start">
                <a href="#">{elm.blogAuthor}</a>
              </div>
              <div className="float-end">
                <a href="#">{elm.date}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    // <div className="row mt-n50">

    // </div>
  );
}
