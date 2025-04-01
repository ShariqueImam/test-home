"use client";
import React, { useState, useEffect } from "react";
import Footer2 from "@/components/footers/Footer2";
import Header10 from "@/components/headers/Header10";
import Home1 from "@/components/homes/home-1";
import { strongMultiPages } from "@/data/menu";
import Hero4 from "@/components/homes/home-1/heros/Hero4";
import Image from "next/image";
import Link from "next/link";
import client from "@/app/client";
import { urlForThumbnail } from "@/app/sanity-image-builder";
import Blog from "../components/homes/home-1/Blog";
// export const metadata = {
//   title: "Home Care Management || Compassionate Home Care Services",
//   description:
//     "Providing high-quality, compassionate home care services tailored to support independence, dignity, and well-being. ",
// };
export default function Home1SliderBackgroundMultiPage() {
  // const [DataFromSanity, setDataFromSanity] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await client.fetch(`*[_type == "blog"]`);
  //     setDataFromSanity(data);
  //   }
  //   fetchData();
  // }, []);
  // let elements = [];
  // for (let i = 0; i < DataFromSanity.length; i++) {
  //   elements.push(DataFromSanity[i]);
  // }

  return (
    <>
      {/* <div className="row mt-n50">
        {elements?.map((elm) => (
          <div
            className="post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft"
            data-wow-delay="0.2s"
          >
            <h4 className="post-prev-title">
              <Link href={`/our-blogs/${elm?.id}`}>{elm?.title}</Link>
            </h4>
          </div>
        ))}
      </div>
      <div className="row mt-n50">
        {elements?.map((elm) => (
          <div
            className="post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft"
            data-wow-delay="0.2s"
          >
            <div className="post-prev-container">
              <div className="post-prev-img">
                <Link href={`/our-blogs/${elm?.id}`}>
                  <Image
                    width={650}
                    height={412}
                    src={urlForThumbnail(elm?.image)}
                    alt="Add Image Description"
                  />
                </Link>
              </div>
              <h4 className="post-prev-title">
                <Link href={`/our-blogs/${elm?.id}`}>{elm?.title}</Link>
              </h4>
              <div className="post-prev-text">
                {elm?.details[0].split(" ").slice(0, 10).join(" ") + "..."}
              </div>
              <div className="post-prev-info clearfix">
                <div className="float-start">
                  <a href="#">{elm?.blogAuthor}</a>
                </div>
                <div className="float-end">
                  <a href="#">{elm?.date}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-2">
          {elements?.map((item) => {
            console.log(item?.title);
            return <div>{item?.title}</div>;
          })}
        </div>
      </div> */}
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar ">
            <Header10 links={strongMultiPages} />
          </nav>
          <main id="main">
            <div className="home-section relative scrollSpysection" id="home">
              <Hero4 />
            </div>
            <Home1 />
          </main>
          <Footer2 />
        </div>
      </div>
    </>
  );
}
