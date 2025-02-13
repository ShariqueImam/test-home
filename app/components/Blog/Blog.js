import React, { useState, useEffect } from "react";
import { urlForThumbnail } from "./image";
import { Link } from "react-router-dom";
const TeamSection = ({ data }) => {
  const teamMembers = [...data];

  return (
    <section className="py-12 w-[90%] md:w-[75%] lg:w-[65%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center md:text-center">
            «OUR LARGEST BLOG »
          </p>
          <h2 className="text-4xl font-bold text-yellowDark">
            Latest News from the Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center justify-center items-center">
          {teamMembers.map((member) => (
            <Link
              to={`/${member.tag}`}
              key={member.name}
              className=" p-4 bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center cursor-pointer" // Hover effects added here
            >
              <div className="mx-auto">
                {" "}
                {/* Set a fixed height for images */}
                <img
                  src={urlForThumbnail(member.image)}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg w-72 h-48"
                />
              </div>

              <div className="p-6 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 border-move-animation">
                  {member.title}
                </h3>
                <p className="text-gray-600">{member.details[0]}</p>
                <p className="text-yellow my-4 md:my-6 border-move-animation">
                  Read More »
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
