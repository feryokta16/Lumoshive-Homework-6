import React from "react";

const Card = () => {
  const features = [
    {
      icon: "fas fa-clock",
      title: "99.9% Uptime",
      description:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Blazing Fast Web Hosting",
      description:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      icon: "fas fa-lock",
      title: "Free SSL Certificates",
      description:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      icon: "fas fa-headset",
      title: "24x7 Friendly Support",
      description:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
  ];
  return (
    <div className="mx-12 flex justify-center items-center min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-6 rounded-full">
                <i className={`${feature.icon} text-red-500 text-4xl`}></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
