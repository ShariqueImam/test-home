import React from "react";
import Link from "next/link";
import Image from "next/image";

import { faqDataMain } from "@/data/faqs";

const ContactForBlog = () => {
  return (
    <div>
      <>
        <hr className="mt-0 mb-0" />
        <section className="page-section">
          {/* End Decorative Waves */}
          <div className="row wow fadeInUp">
            <div className="col-md-6 offset-md-1 col-lg-8 offset-lg-0 text-md-start mb-sm-30">
              <p className="section-descr mb-0">
                Reach out today for compassionate, professional home care
                services designed to support comfort, independence, and
                well-being for your loved ones.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 text-md-end">
              <div className="container position-relative">
                {/* Decorative Waves */}
                <div className="position-relative">
                  <div
                    className="decoration-21 d-none d-lg-block"
                    data-rellax-y=""
                    data-rellax-speed="0.7"
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
              </div>
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
        </section>
      </>
    </div>
  );
};

export default ContactForBlog;
