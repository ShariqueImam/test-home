import Footer2 from "@/components/footers/Footer2";
import Image from "next/image";
import Header10 from "@/components/headers/Header10";
import React from "react";
import Faq from "@/components/common/Faq";
import { strongMultiPages } from "@/data/menu";
import Contact2 from "@/components/homes/home-1/Contact2";


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
                    "url(/assets/images/full-width-images/page-title-bg-4.jpg)",
                }}
              >
                <>
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <h2
                              className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                              data-wow-duration="1.2s"
                            >
                              <a href="#contactForm"> Contact Us</a>
                            </h2>
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                Let's Get Caregiving Management Now
                              </span>
                            </h1>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </>
                </>
              </div>
            </section>
            <>
              {/* Contact Section */}
              <section className="page-section pt-0" id="contactForm">
                <Contact2 />
              </section>
              {/* End Contact Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* FAQ Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  {/* Decorative Waves */}
                  <div className="position-relative">
                    <div
                      className="decoration-21 d-none d-lg-block"
                      data-rellax-y=""
                      data-rellax-speed="0.75"
                      data-rellax-percentage="0.5"
                    >
                      <Image
                        src="/assets/images/decoration-3.svg"
                        className="svg-shape"
                        width={148}
                        height={148}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* End Decorative Waves */}
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-gray mb-0">
                        Find answers to common questions about our home care
                        services, caregiver qualifications, personalized care
                        plans, safety measures, and how we ensure comfort,
                        dignity, and well-being for your loved ones
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Accordion */}
                      <Faq />
                      {/* End Accordion */}
                    </div>
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
