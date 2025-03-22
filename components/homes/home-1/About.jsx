"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/full-width-images/about-image.jpg"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">Our Mission</h4>
        <p className="text-gray">
          At Care Giving Management , our mission is to deliver high-quality,
          personalized care that meets the unique needs of each individual. We
          believe in treating our clients with dignity, respect, and kindness,
          ensuring they live their lives to the fullest.
        </p>
        <h4 className="h5">Our Experience</h4>
        <p className="text-gray">
        With a background in Caregiving and years of hands-on experience, we have worked with numerous families to ensure their loved ones receive the best care possible. Our team is trained to provide not only medical support but also emotional and social companionship.
        </p>
        <div
          className="local-scroll wch-unset wow fadeInUp animated"
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
            href="/contact"
            className={`btn btn-mod btn-large btn-round ms-1 me-1 mt-2 align-middle`}
            data-btn-animate="y"
          >
            <span className="btn-animate-y">
              <span className="btn-animate-y-1">Contact Us</span>
              <span className="btn-animate-y-2" aria-hidden="true">
                Contact Us
              </span>
            </span>
          </a>
        </div>
        {/* <h4 className="h5">Our Vision</h4>
        <p className="text-gray">
          To be a trusted leader in home care management, delivering
          exceptional, personalized care that empowers individuals to live
          safely and comfortably in their own homes while promoting a healthier,
          happier community.
        </p> */}
      </div>
    </div>
  );
}
