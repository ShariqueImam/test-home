import React from "react";

const ServiceCards = ({blogFeatures}) => {
  const services = [
    {
      title: "Our Success Team Man",
      description: "Dedicated team ensuring your success",
    },
    {
      title: "Professional Service",
      description: "Expert solutions for your needs",
    },
    {
      title: "Latest Business Technology",
      description: "Cutting-edge tech solutions",
    },
    {
      title: "Long Experience Support",
      description: "Years of industry expertise",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-6 md:py-12 font">
      {services.map((service, index) => {
        return (
          <div className="bg-yellowDark p-8 flex items-center gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-white">{service.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCards;
