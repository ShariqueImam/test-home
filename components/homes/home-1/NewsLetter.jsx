"use client";
import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
export default function NewsLetter() {
  const tokenWithWriteAccess =
    "skxKVzLbfjHu0i5NGh7L4x5gfAaG3YYj4NyqcNWJpp2xog9wGHAxBk57ZildZSSNoNOzfHlLi8CYTsznZA2voWldxoqcwtKPzAUKCnDoNx9WGdgWRsS8bZ29X1AXxYoHS71AFUdlaO3zbOOvj7uRMej67QcA1xiK41KH7BzUD1WqH6dM4V0B";
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = async () => {
      const { data } = await axios.post(
        `https://twjj8qdq.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "newsletter",
                createdAt: new Date().toISOString(),
                email,
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

    if (email != "") {
      // sendEmail();
      sendData();
      setEmail("");
    }
  };
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3 wow fadeInUp">
          <h2 className="section-title-small text-center mb-40">
            Stay informed with our newsletter
          </h2>
          <form id="mailchimp" className="form">
            <div className="d-sm-flex justify-content-between mb-20">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                placeholder="Enter your email"
                className="newsletter-field input-lg round"
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                pattern=".{5,100}"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                onClick={handleSubmit}
                aria-controls="subscribe-result"
                className="submit_btn btn btn-mod btn-white btn-large btn-hover-anim bg-white text-black "
              >
                <span>Subscribe Now</span>
              </button>
            </div>
            <div className="form-tip">
              <i className="icon-info size-16" /> By sending the form you agree
              to the <a href="/privacy-terms">Terms &amp; Conditions</a> and{" "}
              <a href="/privacy-terms">Privacy Policy</a>.
            </div>
            <div
              id="subscribe-result"
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
