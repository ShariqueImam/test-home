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
import { services6 } from "@/data/services";
import Benefits2 from "@/components/homes/home-1/Benefits2";

import Link from "next/link";
import { features2 } from "@/data/features";
import Pricing from "@/components/homes/home-1/Pricing";
import Image from "next/image";
import { strongMultiPages } from "@/data/menu";
export const metadata = {
  title: "Home Care Management || Compassionate Home Care Services",
  description:
    "Providing high-quality, compassionate home care services tailored to support independence, dignity, and well-being. ",
};
export default function MainServicesPage3() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header10 links={strongMultiPages} />
          </nav>
          <main id="main">
            <div
              className="page-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-11.jpg)",
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
                        Our Services
                      </h2>
                      <h1 className="hs-title-1 mb-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText
                            text="Supporting
                            Your Independence at Home"
                          />
                        </span>
                      </h1>
                      <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                          <p
                            className="section-descr mb-0 wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1.2s"
                          >
                            Comprehensive Home Care Services for Comfort,
                            Independence, and Well-Being
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
            <section className="page-section pt-0" id="services">
              <div className="container position-relative mt-n120 mt-sm-n60">
                <div className="row mb-n30">
                  {services6.map((elm, i) => (
                    <div
                      key={i}
                      className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
                    >
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          {/* <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={elm.width}
                              height={elm.height}
                              viewBox={`0 0 ${elm.width} ${elm.height}`}
                              aria-hidden="true"
                            >
                              <path d={elm.path} />
                            </svg>
                          </div> */}
                          <h3 className="services-3-title ">{elm.title}</h3>
                          <div className="services-3-text">{elm.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="full-wrapper">
              <div className="page-section  pt-0 pb-0 scroll-nav-invisible z-index-1">
                <div className="page-section container position-relative scroll-nav-invisible">
                  {/* Decoration Image */}
                  <div
                    className="decoration-image-1"
                    data-rellax-y=""
                    data-rellax-speed="0.5"
                    data-rellax-percentage="0.5"
                  >
                    <Image
                      src="/assets/images/full-width-images/service-contact-2.jpg"
                      alt="Image Description"
                      width={336}
                      height={406}
                    />
                  </div>
                  {/* End Decoration Image */}
                  {/* Decoration Image */}
                  <div
                    className="decoration-image-2"
                    data-rellax-y=""
                    data-rellax-speed="-0.5"
                    data-rellax-percentage="0.4"
                  >
                    <Image
                      src="/assets/images/full-width-images/service-contact-1.jpg"
                      alt="Image Description"
                      width={350}
                      height={256}
                    />
                  </div>
                  {/* End Decoration Image */}
                  <div className="row text-center">
                    <div className="col-md-8 offset-md-2">
                      <p className="section-descr mb-50 mb-sm-40">
                        Reach out today for compassionate, professional home
                        care services designed to support comfort, independence,
                        and well-being for your loved ones.{" "}
                      </p>
                      <div className="local-scroll">
                        <Link
                          href={`/contact`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>Contact us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="page-section bg-scroll light-content"
              style={{
                backgroundImage: "url(/assets/images/full-width-images/3.jpg)",
              }}
            >
              <div className="bg-overlay bg-gradient-dark-alpha-2 d-none d-md-block" />
              {/* End Desktop Overlay */}
              {/* Mobile Overlay */}
              <div className="bg-overlay bg-dark-1 opacity-09 d-md-none" />
              {/* End Mobile Overlay */}
              <div className="container position-relative">
                <div className="row wow fadeInUp">
                  <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                    <h2 className="section-title mb-40 mb-sm-30">
                      Our Specialized Home Care Services
                    </h2>
                    <p className="mb-50 mb-sm-40">
                      We offer personalized, compassionate home care services
                      designed to support independence, comfort, and well-being,
                      ensuring your loved ones receive the highest quality care
                      tailored to their needs
                    </p>
                    <div className="local-scroll mb-70 mb-sm-50">
                      <Link
                        href={`/contact`}
                        className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Contact us</span>
                      </Link>
                    </div>
                    {/* Features List */}
                    <div className="row mt-n10">
                      {/* Features List Item */}
                      {features2.map((elm, i) => (
                        <div key={i} className="col-lg-6 d-flex mt-10">
                          <div className="features-list-icon ">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">{elm.text}</div>
                        </div>
                      ))}
                      {/* End Features List Item */}
                    </div>
                    {/* End Features List */}
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section">
              <Benefits2 />
            </section>
          </main>
          <Footer2 />
        </div>{" "}
      </div>
    </>
  );
}
