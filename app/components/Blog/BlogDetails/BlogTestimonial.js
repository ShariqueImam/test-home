import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import FounderImg from "../../../assets/client1.jpg";
const TestimonialCard = ({ blogAuthorComment }) => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-amber-50 rounded-lg relative font my-8 md:my-16 w-full mx-auto ">
      {/* Large quotation marks */}
      <div className="text-yellowDark text-6xl absolute top-4 left-4">"</div>
      <div className="text-yellowDark text-6xl absolute bottom-4 right-4">
        "
      </div>

      {/* Testimonial text */}
      <div className="mb-8 px-8 text-black italic">{blogAuthorComment}</div>

      {/* Profile section */}
      <div className="flex items-center gap-6">
        {/* Profile image */}
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={FounderImg}
            alt="Morata Bara"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          {/* Name and title */}
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-black">Morata Bara</h3>
            <span className="text-gray-500">-</span>
            <span className="text-gray-500">Founder</span>
          </div>

          {/* Social media links */}
          <div className="flex gap-4 mt-2">
            <button className="text-gray-500 hover:text-blue-500 transition-colors">
              <BsFacebook size={20} className="text-yellow" />
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition-colors">
              <AiFillInstagram size={20} className="text-yellow" />
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition-colors">
              <BsTwitter size={20} className="text-yellow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
