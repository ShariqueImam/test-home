"use client";
import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import client from "@/app/client";
export default function Contact2() {
  const tokenWithWriteAccess =
    "sk1EzSFyPxbA4Dj6jHqNXKpTAW2oUFyMfvq5zjZghErma21Es6XVjLZWuBDE1iDaBOR8WbHYnmG3kLLgUhtr7QGFK1aqxenxR0l4YOOPW9jeACnV60UFcTYljm5jsBrOJnnDPYanGeWFt1hXwxLq1ejH48e9PwatoeoPD6l9wJYktnRScGI0";
  const [resumeFile, setResumeFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  // Applicant Questionnaire
  const [driveLicense, setDriveLicense] = useState("");
  const [backgroundCheck, setBackgroundCheck] = useState("");
  const [drugTest, setDrugTest] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  // Equal Opportunity Employment
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [veteranStatus, setVeteranStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(resumeFile);
    // const sendFile = async () => {
    //   console.log(url);
    // };
    // sendFile();
    const sendData = async () => {
      const res = await client.assets.upload("file", resumeFile, {
        filename: resumeFile.name,
      });
      const { url, assetId } = res;
      const { data } = await axios.post(
        `https://nfaqwjx1.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "career",
                createdAt: new Date().toISOString(),
                resumeFile: url,
                name,
                email,
                address,
                city,
                state,
                zip,
                phone,
                coverLetter,
                driveLicense,
                backgroundCheck,
                drugTest,
                workingHours,
                gender,
                race,
                veteranStatus,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
    };
    const sendEmail = (e) => {
      let dataToBeSentToEmail = {
        createdAt: new Date().toISOString(),
      };
      emailjs
        .send(
          "service_ahudws1",
          "template_jxx33xz",
          dataToBeSentToEmail,
          "rE17r1uPFwxyNpOMg0Pky"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    };

    if (name != "" && email != "" && phone != "") {
      sendData();
      // sendEmail();
      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setState("");
      setZip("");
      setCoverLetter("");
    }
  };
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="">
          <div className="pe-lg-5">
            <h2 className="h5">Do you want to join our home care team?</h2>
            <p className="text-gray mb-0">
              Are you passionate about providing compassionate care? Join the
              team at Home Care Management and make a difference in the lives of
              the elderly.{" "}
            </p>
            <p className="text-gray mb-0">
              In home healthcare, several positions are available, depending on
              your skill set and qualifications. Some of the most common roles
              include:
            </p>
            {/* this is the section for the information of the applicants */}
            <h2 className="h5 mt-2"> 1. Home Health Aide (HHA) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Assist with daily living activities such as
              bathing, dressing, grooming, meal preparation, light housekeeping,
              and companionship. <br />
              Qualifications: Usually requires a certification and some
              training.
            </p>
            <h2 className="h5 mt-2"> 2. Certified Nursing Assistant (CNA) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Provide basic care under the supervision of
              registered nurses (RNs) or licensed practical nurses (LPNs), such
              as taking vital signs, assisting with personal care, and helping
              patients with mobility. <br />
              Qualifications: CNA certification required.
            </p>
            <h2 className="h5 mt-2">3. Registered Nurse (RN) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Assess patient health, administer medications,
              create care plans, and provide higher-level care. RNs may
              supervise HHAs or CNAs. <br />
              Qualifications: Registered Nurse license.
            </p>
            <h2 className="h5 mt-2"> 4. Licensed Practical Nurse (LPN) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Provide basic medical care such as monitoring
              vital signs, administering medications, and assisting with
              rehabilitation under the supervision of an RN or physician. <br />
            </p>
            <h2 className="h5 mt-2"> 5. Physical Therapist (PT) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Help patients recover from injuries or surgeries
              by developing personalized physical therapy plans, improving
              movement and function. <br />
              Qualifications: Doctor of Physical Therapy (DPT) degree.
            </p>
            <h2 className="h5 mt-2"> 6. Occupational Therapist (OT) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Help patients with physical or mental
              disabilities improve their ability to perform daily activities
              (e.g., dressing, cooking, or using the bathroom).
              <br />
              Qualifications: Master’s degree in occupational therapy and a
              state license.
            </p>
            <h2 className="h5 mt-2"> 7. Speech-Language Pathologist (SLP) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Diagnose and treat speech, language, and
              swallowing disorders. <br />
              Qualifications: Master’s degree in speech-language pathology and a
              state license.
            </p>
            <h2 className="h5 mt-2"> 8. Medical Social Worker (MSW) </h2>
            <p className="text-gray mb-0">
              Responsibilities: Provide counseling and emotional support, assist
              with accessing community resources, and help families with coping
              strategies. <br />
              Qualifications: Master's degree in social work.
            </p>
            <h2 className="h5 mt-2">9. Home Care Supervisor/Manager</h2>
            <p className="text-gray mb-0">
              Responsibilities: Oversee the operations of home health care,
              manage staff, ensure compliance with regulations, and develop care
              plans.
              <br />
              Qualifications: Background in nursing, healthcare administration,
              or a related field.
            </p>
            <h2 className="h5 mt-2"> 10. Phlebotomist </h2>
            <p className="text-gray mb-0">
              Responsibilities: Draw blood for medical testing and help in the
              process of diagnosis.
              <br />
              Qualifications: Phlebotomy certification.
            </p>
            <h2 className="h5 mt-2"> 11. Dietitian/Nutritionist </h2>
            <p className="text-gray mb-0">
              Responsibilities: Provide guidance on nutrition, diet plans, and
              overall healthy eating for patients with specific health
              conditions.
              <br />
              Qualifications: Degree in dietetics or nutrition and
              certification/licensure.
            </p>
            <h2 className="h5 mt-2"> 12. Respiratory Therapist </h2>
            <p className="text-gray mb-0">
              Responsibilities: Provide care for patients with breathing
              disorders, manage ventilators, and deliver respiratory treatments.
              <br />
              Qualifications: Respiratory therapy degree and state licensure.
            </p>
            <h2 className="h5 mt-2">13. Caregiver</h2>
            <p className="text-gray mb-0">
              Responsibilities: General care assistance to patients in their
              homes, focusing on companionship, personal care, and general
              support.
              <br />
              Qualifications: Some positions may require experience or
              certification, but not always.
            </p>
            <p className="text-gray mb-10">
              These roles can be part-time or full-time, depending on the needs
              of the patient or healthcare organization. Most positions require
              specific training and certification, so it's important to check
              the qualifications before applying.
            </p>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className=" mb-sm-50">
          {/* Contact Form */}
          <div className="font-bold">
            <h2
              className="section-caption-border mb-30 mb-xs-20 wow fadeInUp bg-black text-white"
              data-wow-duration="1.2s"
            >
              Resume
            </h2>
          </div>
          <form className="form contact-form pe-lg-5" id="contact_form">
            <div className="row">
              <div className="">
                <div className="form-group">
                  <label htmlFor="name">Upload Resume</label>
                  <input
                    type="file"
                    name="resumeFile"
                    id="resumeFile"
                    className="input-lg round form-control"
                    placeholder="Upload your Resume"
                    pattern=".{3,100}"
                    required
                    accept=".pdf"
                    aria-required="true"
                    // value={resume}
                    onChange={(e) => setResumeFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="font-bold">
                <h2
                  className="section-caption-border mb-30 mb-xs-20 wow fadeInUp bg-black text-white"
                  data-wow-duration="1.2s"
                >
                  Contact Information
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="input-lg round form-control"
                    placeholder="Address"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="input-lg round form-control"
                    placeholder="City"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="input-lg round form-control"
                    placeholder="State"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    className="input-lg round form-control"
                    placeholder="Zip"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    inputmode="numeric"
                    className="input-lg round form-control"
                    placeholder="+1 123-456-7890"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="font-bold">
              <h2
                className="section-caption-border mb-30 mb-xs-20 wow fadeInUp bg-black text-white"
                data-wow-duration="1.2s"
              >
                Attachments
              </h2>
            </div>
            <div className="form-group">
              <label htmlFor="message">Cover Letter</label>
              <textarea
                name="coverLetter"
                id="coverLetter"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Write your cover letter here..."
                defaultValue={""}
                required
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              />
            </div>
            <div className="font-bold">
              <h2
                className="section-caption-border mb-30 mb-xs-20 wow fadeInUp bg-black text-white"
                data-wow-duration="1.2s"
              >
                Applicant Questionnaire
              </h2>
            </div>
            <div className="">
              <div className="mb-20 mb-md-10">
                <label htmlFor="">
                  Do you possess a valid driver's license, automobile and auto
                  insurance?
                </label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions1"
                    className="form-check-input"
                    id="inlineRadio1"
                    value="Yes"
                    checked={driveLicense === "Yes"}
                    onChange={(e) => setDriveLicense(e.target.value)}
                  />{" "}
                  <span className="form-check-label">Yes</span>
                </label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions2"
                    className="form-check-input"
                    id="inlineRadio2"
                    value="No"
                    checked={driveLicense === "No"}
                    onChange={(e) => setDriveLicense(e.target.value)}
                  />{" "}
                  <span className="form-check-label">No</span>
                </label>
              </div>
            </div>
            <div className="">
              <div className="mb-20 mb-md-10">
                <label htmlFor="">
                  Are you able to pass a background check?
                </label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions3"
                    className="form-check-input"
                    id="inlineRadio3"
                    value="Yes"
                    checked={backgroundCheck === "Yes"}
                    onChange={(e) => setBackgroundCheck(e.target.value)}
                  />{" "}
                  <span className="form-check-label">Yes</span>
                </label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions4"
                    className="form-check-input"
                    id="inlineRadio4"
                    value="No"
                    checked={backgroundCheck === "No"}
                    onChange={(e) => setBackgroundCheck(e.target.value)}
                  />{" "}
                  <span className="form-check-label">No</span>
                </label>
              </div>
            </div>
            <div className="">
              <div className="mb-20 mb-md-10">
                <label htmlFor="">Are you able to pass a drug test?</label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions5"
                    className="form-check-input"
                    id="inlineRadio5"
                    value="Yes"
                    checked={drugTest === "Yes"}
                    onChange={(e) => setDrugTest(e.target.value)}
                  />{" "}
                  <span className="form-check-label">Yes</span>
                </label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions6"
                    className="form-check-input"
                    id="inlineRadio6"
                    value="No"
                    checked={drugTest === "No"}
                    onChange={(e) => setDrugTest(e.target.value)}
                  />{" "}
                  <span className="form-check-label">No</span>
                </label>
              </div>
            </div>
            <div className="">
              <div className="mb-20 mb-md-10">
                <label htmlFor="">
                  Are you able and willing to work at least 12 hours per week?
                </label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions7"
                    className="form-check-input"
                    id="inlineRadio7"
                    value="Yes"
                    checked={workingHours === "Yes"}
                    onChange={(e) => setWorkingHours(e.target.value)}
                  />{" "}
                  <span className="form-check-label">Yes</span>
                </label>
                <label className="radio-inline me-3">
                  <input
                    type="radio"
                    name="inlineRadioOptions88"
                    className="form-check-input"
                    id="inlineRadio88"
                    value="No"
                    checked={workingHours === "No"}
                    onChange={(e) => setWorkingHours(e.target.value)}
                  />{" "}
                  <span className="form-check-label">No</span>
                </label>
              </div>
            </div>
            <div className="font-bold">
              <h2
                className="section-caption-border mb-30 mb-xs-20 wow fadeInUp bg-black text-white"
                data-wow-duration="1.2s"
              >
                Equal Opportunity Employment
              </h2>
            </div>
            <div className="">
              <div className="form-group">
                <p>
                  We are an Equal Opportunity employer and do not discriminate
                  on the basis of race, ancestry, color, religion, sex, age,
                  marital status, sexual orientation, national origin, medical
                  condition, disability, veteran status, or any other basis
                  protected by law.
                </p>
                <p>
                  The information provided will be used for research, reporting,
                  statistical purposes and to monitor legal compliance. To help
                  us comply with these government requirements, please complete
                  the following information.
                </p>
                <p>
                  Completion of this form is voluntary and will not affect your
                  opportunity for employment or terms or conditions of
                  employment if hired. We appreciate your cooperation.
                </p>
                {/* This is the start of the long para Buttons */}
                <div className="">
                  <div className="mb-20 mb-md-10">
                    <label htmlFor="">Gender :</label>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions8"
                        className="form-check-input"
                        id="inlineRadio8"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      <span className="form-check-label">Male</span>
                    </label>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions9"
                        className="form-check-input"
                        id="inlineRadio9"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      <span className="form-check-label">Female</span>
                    </label>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions10"
                        className="form-check-input"
                        id="inlineRadio10"
                        value="I Choose Not to Respond"
                        checked={gender === "I Choose Not to Respond"}
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        {" "}
                        I Choose Not to Respond
                      </span>
                    </label>
                  </div>
                </div>

                {/* this is the start of the new long buttons */}
                <div className="">
                  <div className="mb-20 mb-md-10">
                    <label htmlFor="">Race/Ethnicity : </label>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions11"
                        className="form-check-input"
                        id="inlineRadio11"
                        value="American Indian or Alaska Native"
                        checked={race === "American Indian or Alaska Native"}
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        American Indian or Alaska Native (Not Hispanic or
                        Latino) A person having origins in any of the original
                        peoples of North America and South America (including
                        Central America), and who maintains tribal affiliation
                        or community attachment
                      </span>
                    </label>
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions12"
                        className="form-check-input"
                        id="inlineRadio12"
                        value="Black or African American"
                        checked={race === "Black or African American"}
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        {" "}
                        Black or African American (Not Hispanic or Latino) A
                        person having origins in any of the Black racial groups
                        of Africa
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions13"
                        className="form-check-input"
                        id="inlineRadio13"
                        value="Hispanic or Latino"
                        checked={race === "Hispanic or Latino"}
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Hispanic or Latino A person of Cuban, Mexican, Puerto
                        Rican, Central or South American, or other Spanish
                        culture or origin, regardless of race
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions14"
                        className="form-check-input"
                        id="inlineRadio14"
                        value="Asian"
                        checked={race === "Asian"}
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Asian (Not Hispanic or Latino) A person having origins
                        in any of the original peoples of the Far East,
                        Southeast Asia, or the Indian subcontinent including,
                        for example, Cambodia, China, India, Japan, Korea,
                        Malaysia, Pakistan, the Philippine Islands, Thailand,
                        and Vietnam
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions15"
                        className="form-check-input"
                        id="inlineRadio15"
                        value="White"
                        checked={race === "White"}
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        White (Not Hispanic or Latino) A person having origins
                        in any of the original peoples of Europe, North Africa,
                        or the Middle East
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions16"
                        className="form-check-input"
                        id="inlineRadio16"
                        value="Native Hawaiian or Other Pacific Islander"
                        checked={
                          race === "Native Hawaiian or Other Pacific Islander"
                        }
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Native Hawaiian or Other Pacific Islander (Not Hispanic
                        or Latino) A person having origins in any of the
                        original peoples of Hawaii, Guam, Samoa, or other
                        Pacific Islands
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions17"
                        className="form-check-input"
                        id="inlineRadio17"
                        value="Two or More Races"
                        checked={race === "Two or More Races"}
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Two or More Races (Not Hispanic or Latino) All persons
                        who identify with more than one of the above races
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions18"
                        className="form-check-input"
                        id="inlineRadio18"
                        value="I Choose Not to Respond"
                        checked={race === "I Choose Not to Respond"}
                        onChange={(e) => setRace(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        I Choose Not to Respond
                      </span>
                    </label>{" "}
                    <br />
                  </div>
                </div>
                {/* THIS IS THE START OF THE VETERAN STATUS */}
                <div className="">
                  <div className="mb-20 mb-md-10">
                    <label htmlFor="">Veteran Status: </label>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions19"
                        className="form-check-input"
                        id="inlineRadio19"
                        value="Vietnam Era Veteran"
                        checked={veteranStatus === "Vietnam Era Veteran"}
                        onChange={(e) => setVeteranStatus(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Vietnam Era Veteran A person who 1) Served on active
                        duty for a period of more than 180 days, and was
                        discharged or released therefrom with other than a
                        dishonorable discharge, if any part of such active duty
                        occurred; a. in the Republic of Vietnam between February
                        28, 1961, and May 7, 1975; or b. between August 5, 1964,
                        and May 7, 1975, in all other cases; or 2) Was
                        discharged or released from active duty for a
                        service-connected disability if any part of such active
                        duty was performed; a. in the Republic of Vietnam
                        between February 28, 1961, and May 7, 1975; or b.
                        between August 5, 1964, and May 7, 1975, in all other
                        cases.
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions20"
                        className="form-check-input"
                        id="inlineRadio20"
                        value="Disabled Veteran"
                        checked={veteranStatus === "Disabled Veteran"}
                        onChange={(e) => setVeteranStatus(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Disabled Veteran 1) A veteran of the U.S. military,
                        ground, naval or air service who is entitled to
                        compensation (or who but for the receipt of military
                        retired pay would be entitled to compensation) under
                        laws administered by the Secretary of Veterans Affairs;
                        or 2) A person who was discharged or released from
                        active duty because of a service-connected disability.
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions21"
                        className="form-check-input"
                        id="inlineRadio21"
                        value="War/Campaign/Expedition Veteran"
                        checked={
                          veteranStatus === "War/Campaign/Expedition Veteran"
                        }
                        onChange={(e) => setVeteranStatus(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        War/Campaign/Expedition Veteran A veteran who served on
                        active duty in the U.S. military, ground, naval or air
                        service during a war or in a campaign or expedition for
                        which a campaign badge has been authorized.
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions22"
                        className="form-check-input"
                        id="inlineRadio22"
                        value="Armed Forces Service Medal Veteran"
                        checked={
                          veteranStatus === "Armed Forces Service Medal Veteran"
                        }
                        onChange={(e) => setVeteranStatus(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Armed Forces Service Medal Veteran A veteran who, while
                        serving on active duty in the U.S. military, ground,
                        naval or air service, participated in a United States
                        military operation for which an Armed Forces service
                        medal was awarded pursuant to Executive Order No. 12985.
                        To identify the military operations that meet this
                        criterion, check your DD Form 214, Certificate of
                        Release or Discharge from Active Duty.
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions23"
                        className="form-check-input"
                        id="inlineRadio23"
                        value="Recently Separated Veteran"
                        checked={veteranStatus === "Recently Separated Veteran"}
                        onChange={(e) => setVeteranStatus(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        Recently Separated Veteran Any veteran during the
                        three-year period beginning on date of such veteran's
                        discharge or release from active duty in the U. S.
                        military, ground, naval or air service.
                      </span>
                    </label>{" "}
                    <br />
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="inlineRadioOptions24"
                        className="form-check-input"
                        id="inlineRadio24"
                        value="I Choose Not to Respond"
                        checked={veteranStatus === "I Choose Not to Respond"}
                        onChange={(e) => setVeteranStatus(e.target.value)}
                      />{" "}
                      <span className="form-check-label">
                        I Choose Not to Respond
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* THIS IS THE START OF THE BUTTON OF THE SUBMIT */}
            <div className="row">
              <div className="col-lg-5">
                {/* Send Button */}
                <div className="pt-20">
                  <button
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    id="submit_btn"
                    aria-controls="result"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <span>Send Application</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-7">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                  <i className="icon-info size-16" />
                  All the fields are required.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
