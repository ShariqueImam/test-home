"use client";
import { blogs1 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import client from "@/app/client";
import { urlForThumbnail } from "@/app/sanity-image-builder";

export default function Blog() {
  const [DataFromSanity, setDataFromSanity] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(`*[_type == "blog"]`);
      setDataFromSanity(data);
    }
    fetchData();
  }, []);
  let elements = [];
  for (let i = 0; i < DataFromSanity.length; i++) {
    elements.push(DataFromSanity[i]);
  }

  // async function getData() {
  //   return await client.fetch(`*[_type == "blog"]`);
  // }
  // const DataFromSanity = await getData();
  // console.log("1t1");

  return (
    <div className="row mt-n50">
      {elements?.map((elm) => (
        <div
          className="post-prev col-md-6 col-lg-4 mt-50 "
          data-wow-delay="0.2s"
        >
          <div className="post-prev-container">
            <div className="post-prev-img">
              <Link href={`/our-blogs/${elm.id}`}>
                <Image
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
