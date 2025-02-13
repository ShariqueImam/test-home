"use client";
import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
export default function Contact2() {
  const tokenWithWriteAccess =
    "skxJ3DhLVSHKGHexfHHIXKfdthiBZ387ESq6oWDVT5dYsh85TByQ1FPRj33ULh6BKHV3UtaeUaJwNfY3g5GdqbZ5b89MXC2dFcX6amezhiFdINTg5d68P4EEC6CwpUM8kAryOjpvq2Htx7YETEHDO42jIH0OJOU8paGF4eel9zB2kRDkvuEQ";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = async () => {
      const { data } = await axios.post(
        `https://nfaqwjx1.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "career",
                createdAt: new Date().toISOString(),
                name,
                email,
                phone,
                position,
                experience,
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

    if (
      name != "" &&
      email != "" &&
      message != "" &&
      phone != "" &&
      experience != ""
    ) {
      // sendEmail();
      sendData();
      setName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setExperience("");
    }
  };
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <h2 className="h5">Do you want to join our home care team?</h2>
            <p className="text-gray mb-0">
              Are you passionate about providing compassionate care? Join the
              team at Home Care Management and make a difference in the lives of
              the elderly.{" "}
            </p>
            <p className="text-gray mb-0">
              Our current openings are Caregiver, Housekeeper, Personal Care
              Assistant
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mb-60 mb-sm-50">
            {/* Contact Item */}
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                  <div className="alt-features-icon-s">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                    </svg>
                  </div>
                </div>
                <h4 className="alt-features-title">Say hello</h4>
                <div className="alt-features-descr clearlinks">
                  <div>
                    <a href="mailto:caregivingmanagementllc@gmail.com">
                      caregivingmanagementllc@gmail.com
                    </a>
                  </div>
                  <a href="tel:+12406449874">+1 240 644 9874</a>
                </div>
              </div>
            </div>
            {/* End Contact Item */}
            {/* Contact Item */}
            {/* <div className="col-sm-6 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".5s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                  </svg>
                </div>
                <h4 className="alt-features-title">Location</h4>
                <div className="alt-features-descr">
                  123 King Street, State, United States
                </div>
              </div>
            </div> */}
            {/* End Contact Item */}
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-md-6 mb-sm-50">
          {/* Contact Form */}
          <form className="form contact-form pe-lg-5" id="contact_form">
            <div className="row">
              <div className="col-lg-6">
                {/* Name */}
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
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Position</label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    className="input-lg round form-control"
                    placeholder="Applyin for position..."
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
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

            <div className="form-group">
              <label htmlFor="message">Relevant Experience</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="What is your past experience?"
                defaultValue={""}
                required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
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
          {/* End Contact Form */}
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          {/* Google Map */}
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3071.5318265717196!2d-75.60465104752062!3d39.660249785873326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c703f3cdadbfdb%3A0x80d20252268fc006!2zMjQ1IFF1aWdsZXkgQmx2ZCBzdGUgaywgTmV3IENhc3RsZSwgREUgMTk3MjAsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1662469609333!5m2!1suk!2sua"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* End Google Map */}
        </div>
      </div>
    </div>
  );
}
