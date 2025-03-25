import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container position-relative ">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Our Services</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="We provide the best Caregiving Management" />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Professional care in the comfort of your own home.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Caregiving Management <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Companionship <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Personal Care <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Hygiene Care <span className="number">04</span>
              </a>
            </li>
            {/* <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Cleaning <span className="number">05</span>
              </a>
            </li> */}
          </ul>
          <div
            className="local-scroll wch-unset wow fadeInUp animated mt-12"
            data-wow-delay="0.6s"
            data-wow-duration="1.2s"
            style={{
              visibility: "visible",
              animationDuration: "1.2s",
              animationDelay: "0.6s",
              animationName: "fadeInUp",
            }}
          >
            <a
              href="/services"
              className={`btn btn-mod btn-large btn-round ms-1 me-1 mt-2 align-middle`}
              data-btn-animate="y"
            >
              <span className="btn-animate-y">
                <span className="btn-animate-y-1">More Services</span>
                <span className="btn-animate-y-2" aria-hidden="true">
                  More Services
                </span>
              </span>
            </a>
          </div>
        </div>

        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Caregiving Management</h4>
                  <p className="text-gray mb-0">
                    Providing professional, compassionate support to help
                    individuals maintain independence and comfort in their own
                    homes
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/full-width-images/service-1.png"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Companionship</h4>
                  <p className="text-gray mb-0">
                    Offering friendly companionship to reduce loneliness,
                    enhance well-being, and provide emotional support for a
                    fulfilling life.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/full-width-images/service-2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Personal Care</h4>
                  <p className="text-gray mb-0">
                    Assisting with daily activities like dressing, grooming, and
                    mobility to ensure dignity, comfort, and independence.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/full-width-images/service-4.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Hygiene Care</h4>
                  <p className="text-gray mb-0">
                    Helping with bathing, toileting, and personal hygiene needs
                    to promote cleanliness, confidence, and overall health.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/full-width-images/service-3.jpg"
                alt="Image Description"
              />
            </div>
            {/* <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Cleaning</h4>
                  <p className="text-gray mb-0">
                    Ensuring a safe, healthy living environment with light
                    housekeeping, laundry, and home organization services.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/full-width-images/service-5.jpg"
                alt="Image Description"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
