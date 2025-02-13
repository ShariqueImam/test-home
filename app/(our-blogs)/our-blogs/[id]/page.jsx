"use client";
import Footer2 from "@/components/footers/Footer2";
import Image from "next/image";
import ContactForBlog from "@/components/myComponents/ContactForBlog";
import Header10 from "@/components/headers/Header10";
import AnimatedText from "@/components/common/AnimatedText";
import { tags } from "@/data/tags";
import { strongMultiPages } from "@/data/menu";
import client from "@/app/client";
import { urlForThumbnail } from "@/app/sanity-image-builder";
import React, { useEffect, useState } from "react";
export default function MainBlogSinglePageFullWidth({ params }) {
  const [DataFromSanity, setDataFromSanity] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(`*[_type == "blog"]`);
      setDataFromSanity(data);
    }
    fetchData();
  }, []);

  // const DataFromSanity = await getData();
  const filteredBlog = DataFromSanity.filter((elm) => elm.id == params.id);
  console.log(filteredBlog);
  let blog = filteredBlog[0];

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header10 links={strongMultiPages} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <div
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={blog?.title} />
                          </span>
                        </h1>

                        {/* <!-- Author, Categories, Comments --> */}
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-clock "></i>
                              <span className="visually-hidden">
                                Date:
                              </span>{" "}
                              {blog?.date}
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-user "></i>
                              <span className="visually-hidden">
                                Author:
                              </span>{" "}
                              {blog?.blogAuthor}
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <i className="mi-folder me-1"></i>
                            <span className="visually-hidden">Categories:</span>
                            <a href="#" className="me-3">
                              {blog?.blogType}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-lg-8 offset-lg-2">
                      {/* Post */}
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          {/* Media Gallery */}
                          <div className="blog-media mb-40 mb-xs-30">
                            {/* <Slider1 /> */}
                            <Image
                              // src="/assets/images/portfolio/full-project-1.jpg"
                              src={urlForThumbnail(blog?.image)}
                              width={1350}
                              height={865}
                              alt="Image Description"
                            />
                          </div>
                          {blog?.details.map((detail, i) => {
                            return <p className="lead">{detail}</p>;
                          })}
                        </div>
                      </div>
                      {/* ADDING THE TAG SECTION OF THE BLOG */}
                      <div className="row mt-n60">
                        <div className="col-sm-6 col-lg-6 mt-60">
                          {/* Widget */}
                          <div className="widget mb-0">
                            <h3 className="widget-title">Tags</h3>
                            <div className="widget-body">
                              <div className="tags">
                                {blog?.tags.map((tag) => (
                                  <a key={tag.id}>{tag}</a>
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* End Widget */}
                        </div>
                      </div>
                      <ContactForBlog />
                    </div>
                    {/* End Content */}
                  </div>
                </div>
              </section>
            </>
          </main>
          <Footer2 />
        </div>{" "}
      </div>
    </>
  );
}
