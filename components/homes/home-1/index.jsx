import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";
import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  { ssr: false }
);
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">About Us</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="Compassionate Care – Enhancing Lives Every Day" />
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

              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              ) : (
                <Link
                  href={`/about`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}
            </div>
          </div>
          <About />
        </div>
      </section>
      {/* THIS IS THE TEAM SECTION  */}
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
        }`}
        id="team"
      >
        <Team />
      </section> */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section>

      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-4 mb-md-60 mb-xs-50">
              <h2 className="section-title mb-20 wow fadeInUp">
                Check recent achievements
              </h2>
              <p
                className="section-descr mb-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                We provide the care to make people live their lives to the
                fullest
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                <Link
                  href={`/contact`}
                  className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                >
                  <span>Get Care Now</span>
                </Link>
              </div>
            </div>{" "}
            <Facts />
          </div>
        </div>
      </ParallaxContainer>
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${
          dark ? "bg-dark-1 light-content z-index-1" : ""
        }`}
      >
        <div className="container position-relative">
          {/* Decorative Waves */}
          <div
            className="decoration-3 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed="-0.7"
            data-rellax-percentage="0.5"
          >
            <Image
              width={148}
              height={148}
              className="svg-shape"
              src="/assets/images/decoration-3.svg"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
                Get in touch today for compassionate, professional Caregiving
                Management tailored to your loved one’s needs!
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact us</span>
                  </a>
                ) : (
                  <Link
                    href={`/contact`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact us</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} /> */}
      {/* THIS IS THE BENEFITS SECTON  */}
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Benefits />{" "}
      </section> */}
      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section>
      {/* <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {dark ? <Brands2 /> : <Brands />}
      </section> */}
      {/* <section
        className="page-section bg-dark bg-dark-alpha-70 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-4.jpg)",
        }}
      >
        <Features />
      </section> */}
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <div className="container position-relative">
          <div className="row">
            {/* Images */}
            <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div className="call-action-2-image-2">
                  <Image
                    width={610}
                    height={412}
                    src="/assets/images/full-width-images/how-we-work-1.jpg"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                </div>
              </div>
            </div>
            {/* End Images */}
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-title mb-50 mb-sm-20">How we work?</h2>
                <Faq />
                <div className="local-scroll">
                  <Link
                    href={`/contact`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Get Caregiving Management</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* End Text */}
          </div>
        </div>
      </section>

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Promo />{" "}
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Blogs</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  Latest News
                </span>
              </h3>
            </div>
          </div>
          {/*   qQQQQQQQQQQQQQQQQQQQQ */}
          {/* {DataFromSanity && <Blog DataFromSanity={DataFromSanity} />} */}
          <Blog />

          {/* Blog Posts Grid */}

          {/* End Blog Posts Grid */}
        </div>
      </section>
      <section
        className="page-section bg-dark-1 bg-dark-alpha-90 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <NewsLetter />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
