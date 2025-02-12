import Footer2 from "@/components/footers/Footer2";
import Image from "next/image";
import dynamic from "next/dynamic";
import ContactForBlog from "@/components/myComponents/ContactForBlog";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Header10 from "@/components/headers/Header10";
import AnimatedText from "@/components/common/AnimatedText";
import { tags } from "@/data/tags";
import Slider1 from "@/components/blog/sliders/Slider1";
import { strongMultiPages } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title: "Home Care Management || Compassionate Home Care Services",
  description:
    "Providing high-quality, compassionate home care services tailored to support independence, dignity, and well-being. ",
};
export default function MainBlogSinglePageFullWidth({ params }) {
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  const singleBlogData = {
    id: 1,
    imgSrc: "/assets/images/blog/post-prev-1.jpg",
    title: "Spotlight — Equinox Collection by Shane Griffin",
    text: [
      "Looking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New York...",
      "Looking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New York...",
      "Looking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New York...",
      "Looking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New York...",
    ],
    Category: "Cleaning",
    authorName: "Adam Smith",
    date: "August 3",
    tags: ["Design", "Development", "Branding"],
  };
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
                            <AnimatedText text={blog.title || blog.postTitle} />
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
                              December 25
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-user "></i>
                              <span className="visually-hidden">
                                Author:
                              </span>{" "}
                              John Doe
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <i className="mi-folder me-1"></i>
                            <span className="visually-hidden">Categories:</span>
                            <a href="#" className="me-3">
                              Design
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
                              src="/assets/images/portfolio/full-project-1.jpg"
                              width={1350}
                              height={865}
                              alt="Image Description"
                            />
                          </div>
                          <p className="lead">
                            Morbi lacus massa, euismod ut turpis molestie,
                            tristique sodales est. Integer sit amet mi id sapien
                            tempor molestie in nec massa. Fusce non ante sed
                            lorem rutrum feugiat.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris non laoreet dui. Morbi lacus massa,
                            euismod ut turpis molestie, tristique sodales est.
                            Integer sit amet mi id sapien tempor molestie in nec
                            massa.
                          </p>
                          <p>
                            Fusce non ante sed lorem rutrum feugiat. Vestibulum
                            pellentesque, purus ut&nbsp;dignissim consectetur,
                            nulla erat ultrices purus, ut&nbsp;consequat sem
                            elit non sem. Morbi lacus massa, euismod ut turpis
                            molestie, tristique sodales est. Integer sit amet mi
                            id sapien tempor molestie in nec massa. Fusce non
                            ante sed lorem rutrum feugiat.
                          </p>

                          <p>
                            Praesent ultricies ut ipsum non laoreet. Nunc ac
                            leo. Nulla ac ultrices arcu. Nullam adipiscing lacus
                            in consectetur posuere. Nunc malesuada tellus
                            turpis, ac pretium orci molestie vel. Morbi lacus
                            massa, euismod ut turpis molestie, tristique sodales
                            est. Integer sit amet mi id sapien tempor molestie
                            in nec massa. Fusce non ante sed lorem rutrum
                            feugiat.
                          </p>
                          <ul>
                            <li>First item of the list</li>
                            <li>Second item of the list</li>
                            <li>Third item of the list</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris non laoreet dui. Morbi lacus massa,
                            euismod ut turpis molestie, tristique sodales est.
                            Integer sit amet mi id sapien tempor molestie in nec
                            massa. Fusce non ante sed lorem rutrum feugiat.
                            Vestibulum pellentesque, purus ut&nbsp;dignissim
                            consectetur, nulla erat ultrices purus,
                            ut&nbsp;consequat sem elit non sem.
                          </p>
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
                                {tags.map((tag) => (
                                  <a key={tag.id}>{tag.name}</a>
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
