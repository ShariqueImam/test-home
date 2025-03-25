import Footer2 from "@/components/footers/Footer2";

import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header10 from "@/components/headers/Header10";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/homes/home-1/About";
import Team from "@/components/homes/home-1/Team";
import Benefits from "@/components/homes/home-1/Benefits";
import Testimonials2 from "@/components/homes/home-1/Teatimonials2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import Features from "@/components/homes/home-1/Features";
import Promo from "@/components/homes/home-1/Promo";
import Faq from "@/components/homes/home-1/Faq";
import { strongMultiPages } from "@/data/menu";

export const metadata = {
  title: "Caregiving Management Management || Compassionate Caregiving Management Services",
  description:
    "Providing high-quality, compassionate Caregiving Management services tailored to support independence, dignity, and well-being. ",
};
export default function MainAboutPage1() {
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
                <div className="container position-relative pt-50 pb-100 pb-sm-20">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          <a href="#aboutDetails"> About Our Company</a>
                        
                        </h2>
                        <h1 className="hs-title-1 mb-30">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Welcome to Caregiving Management" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Dedicated to Compassionate, Personalized Caregiving Management
                              for Comfort, Dignity, and Independence.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </div>
              <div className="page-section pt-0">
                <div className="container">
                  <div className="mt-n120 mt-sm-n60 overflow-hidden flex items-center justify-center">
                    <Image
                      src="/assets/images/full-width-images/about-1.jpg"
                      alt="Image Description"
                      width={1200}
                      height={744}
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      data-wow-offset={0}
                    />
                  </div>
                </div>
              </div>
            </section>
            <hr className="mt-0 mb-0" />
            <section
              className={`page-section scrollSpysection ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="aboutDetails"
            >
              <div className="container position-relative" >
                <div className="row mb-60 mb-xs-30" >
                  <div className="col-md-6">
                    <h2 className="section-caption mb-xs-10" >Our Story</h2>
                    <h3 className="section-title mb-0">
                      <AnimatedText text="Learn about our experience and vision" />
                    </h3>
                  </div>
                  <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
                    {/* Decorative Dots */}
                    <div
                      className="decoration-2 d-none d-md-block"
                      data-rellax-y=""
                      data-rellax-speed="0.7"
                      data-rellax-percentage="-0.2"
                    >
                      <Image
                        width="103"
                        height="223"
                        src="/assets/images/decoration-2.svg"
                        alt=""
                      />
                    </div>
                    {/* End Decorative Dots */}

                    <Link
                      href={`/services`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Explore Our Services{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Explore Our Services{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <About />
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
              }`}
              id="team"
            >
              <Team />
            </section>

            <section
              className="page-section bg-dark bg-dark-alpha-70 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-4.jpg)",
              }}
            >
              <Features />
            </section>
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Benefits />{" "}
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            {/* <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Promo />{" "}
            </section> */}
          </main>
          <Footer2 />
        </div>{" "}
      </div>
    </>
  );
}
