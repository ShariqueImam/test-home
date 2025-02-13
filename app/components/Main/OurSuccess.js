import React from "react";
import Butter1 from "../../assets/butterservice1.jpeg";
import Butter2 from "../../assets/butterservice2.jpeg";
import Butter3 from "../../assets/butterservice3.jpeg";
import Butter4 from "../../assets/butter3.jpeg";
const CompanyStatus = () => {
  const items = [
    {
      id: 1,
      title: "100% Pure Shea Butter",
      description:
        "Experience the natural, unrefined goodness of high-quality, organic shea butter.",
      icon: Butter1, // Replace with your icon paths
    },
    {
      id: 2,
      title: "Moisturizing Benefits",
      description:
        "Deeply nourishes and hydrates the skin, leaving it soft and smooth all day.",
      icon: Butter2,
    },
    {
      id: 3,
      title: "Sustainably Sourced",
      description:
        "Ethically harvested from local communities, supporting fair trade and environmental responsibility",
      icon: Butter3,
    },
    {
      id: 4,
      title: "Multiple Skin Uses",
      description:
        "Ideal for treating dry skin, hair, and reducing stretch marks naturally and effectively",
      icon: Butter4,
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center md:text-center">
          «OUR COMPANY STATUS »
        </p>
        <h2 className="text-4xl font-bold text-yellowDark">
          The Success of our Butter
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md relative"
          >
            <div className="text-6xl font-bold text-amber-100 absolute top-4 left-4">{`0${item.id}`}</div>
            <div className="mb-4">
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="h-36 w-36 rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStatus;
