import Footer2 from "@/components/footers/Footer2";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header10 from "@/components/headers/Header10";
import Faq from "@/components/common/Faq";
import { strongMultiPages } from "@/data/menu";
import Careers from "@/components/homes/home-1/Careers";

const dark = false;
export const metadata = {
  title:
    "Caregiving Management Management || Compassionate Caregiving Management Services",
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
                              <a href="#applyForm" className="no-underline">
                                {" "}
                                Apply Now
                              </a>
                            </h2>
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                Want to join Caregiving Management
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
              <section className="page-section pt-0">
                <div className="container position-relative">
                  <div className="row">
                    <div className="">
                      <div className="pe-lg-5">
                        <h2 className="h5">
                          Do you want to join our Caregiving Management team?
                        </h2>
                        <p className="text-gray mb-0">
                          Are you passionate about providing compassionate care?
                          Join the team at Caregiving Management and make a
                          difference in the lives of the elderly.{" "}
                        </p>
                        <p className="text-gray mb-0">
                          In home healthcare, several positions are available,
                          depending on your skill set and qualifications. Some
                          of the most common roles include:
                        </p>
                        {/* this is the section for the information of the applicants */}
                        <h2 className="h5 mt-2"> 1. Home Health Aide (HHA) </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Assist with daily living activities
                          such as bathing, dressing, grooming, meal preparation,
                          light housekeeping, and companionship. <br />
                          Qualifications: Usually requires a certification and
                          some training.
                        </p>
                        <h2 className="h5 mt-2">
                          {" "}
                          2. Certified Nursing Assistant (CNA){" "}
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Provide basic care under the
                          supervision of registered nurses (RNs) or licensed
                          practical nurses (LPNs), such as taking vital signs,
                          assisting with personal care, and helping patients
                          with mobility. <br />
                          Qualifications: CNA certification required.
                        </p>
                        <h2 className="h5 mt-2">3. Registered Nurse (RN) </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Assess patient health, administer
                          medications, create care plans, and provide
                          higher-level care. RNs may supervise HHAs or CNAs.{" "}
                          <br />
                          Qualifications: Registered Nurse license.
                        </p>
                        <h2 className="h5 mt-2">
                          {" "}
                          4. Licensed Practical Nurse (LPN){" "}
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Provide basic medical care such as
                          monitoring vital signs, administering medications, and
                          assisting with rehabilitation under the supervision of
                          an RN or physician. <br />
                        </p>
                        <h2 className="h5 mt-2">
                          {" "}
                          5. Physical Therapist (PT){" "}
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Help patients recover from injuries
                          or surgeries by developing personalized physical
                          therapy plans, improving movement and function. <br />
                          Qualifications: Doctor of Physical Therapy (DPT)
                          degree.
                        </p>
                        <h2 className="h5 mt-2">
                          {" "}
                          6. Occupational Therapist (OT){" "}
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Help patients with physical or
                          mental disabilities improve their ability to perform
                          daily activities (e.g., dressing, cooking, or using
                          the bathroom).
                          <br />
                          Qualifications: Master’s degree in occupational
                          therapy and a state license.
                        </p>
                        <h2 className="h5 mt-2">
                          {" "}
                          7. Speech-Language Pathologist (SLP){" "}
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Diagnose and treat speech, language,
                          and swallowing disorders. <br />
                          Qualifications: Master’s degree in speech-language
                          pathology and a state license.
                        </p>
                        <h2 className="h5 mt-2">
                          {" "}
                          8. Medical Social Worker (MSW){" "}
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Provide counseling and emotional
                          support, assist with accessing community resources,
                          and help families with coping strategies. <br />
                          Qualifications: Master's degree in social work.
                        </p>
                        <h2 className="h5 mt-2">
                          9. Home Care Supervisor/Manager
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Oversee the operations of home
                          health care, manage staff, ensure compliance with
                          regulations, and develop care plans.
                          <br />
                          Qualifications: Background in nursing, healthcare
                          administration, or a related field.
                        </p>
                        <h2 className="h5 mt-2"> 10. Phlebotomist </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Draw blood for medical testing and
                          help in the process of diagnosis.
                          <br />
                          Qualifications: Phlebotomy certification.
                        </p>
                        <h2 className="h5 mt-2">
                          {" "}
                          11. Dietitian/Nutritionist{" "}
                        </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Provide guidance on nutrition, diet
                          plans, and overall healthy eating for patients with
                          specific health conditions.
                          <br />
                          Qualifications: Degree in dietetics or nutrition and
                          certification/licensure.
                        </p>
                        <h2 className="h5 mt-2"> 12. Respiratory Therapist </h2>
                        <p className="text-gray mb-0">
                          Responsibilities: Provide care for patients with
                          breathing disorders, manage ventilators, and deliver
                          respiratory treatments.
                          <br />
                          Qualifications: Respiratory therapy degree and state
                          licensure.
                        </p>
                        <h2 className="h5 mt-2" id="applyForm">13. Caregiver</h2>
                        <p className="text-gray mb-0">
                          Responsibilities: General care assistance to patients
                          in their homes, focusing on companionship, personal
                          care, and general support.
                          <br />
                          Qualifications: Some positions may require experience
                          or certification, but not always.
                        </p>
                        <p className="text-gray mb-10" >
                          These roles can be part-time or full-time, depending
                          on the needs of the patient or healthcare
                          organization. Most positions require specific training
                          and certification, so it's important to check the
                          qualifications before applying.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Careers />
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
                        Find answers to common questions about our Caregiving
                        Management services, caregiver qualifications,
                        personalized care plans, safety measures, and how we
                        ensure comfort, dignity, and well-being for your loved
                        ones
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
