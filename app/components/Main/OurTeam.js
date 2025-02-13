import React from "react";
import Team1 from "../../assets/client1.jpg";
import Team2 from "../../assets/client2.jpg";
import Team3 from "../../assets/client3.jpg";
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lorata Barsa",
      title: "Founder",
      imageSrc: Team1, // Replace with your image path
    },
    {
      name: "Moras Batas",
      title: "Manager",
      imageSrc: Team2, // Replace with your image path
    },
    {
      name: "Korata Mana",
      title: "Founder",
      imageSrc: Team3, // Replace with your image path
    },
  ];

  return (
    <section className="py-12 w-[90%] md:w-[75%] lg:w-[65%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center md:text-center">
            «OUR TEAM MEMBER »
          </p>
          <h2 className="text-4xl font-bold text-yellowDark">
            Meet Great Customer Service
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center cursor-pointer" // Hover effects added here
            >
              <div className="mx-auto">
                {" "}
                {/* Set a fixed height for images */}
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
