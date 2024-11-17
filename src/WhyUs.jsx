import React from "react";
import companyFirst from "./assets/company-1.png";
import companySecond from "./assets/image-2.png";
import companyThird from "./assets/image-3.png";
import companyFourth from "./assets/image-4.png";
import companyFifth from "./assets/image-5.png";
import companySixth from "./assets/image-6.png";

const WhyUs = () => {
  return (
    <div className="text-left px-20 lg:flex">
      <div className="mr-10">
        <h1 className="text-4xl font-bold mb-4 mt-20 ">
          True Cloud Web Hosting
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          True Cloud Web Hosting All of the hosting packages we offer are
          deployed instantly on our SSD powered cloud. We dont use dedicated
          servers that operate on single pieces of hardware. Our entire
          infrastructure is built to be reliable, secure, and scalable.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 mx-5 my-2">
        <img className="my-4" src={companyFirst} alt="Company-logo" />
        <img className="my-4 mx-2" src={companySecond} alt="Company-logo" />
        <img className="my-4" src={companyThird} alt="Company-logo" />
        <img className="my-4" src={companyFourth} alt="Company-logo" />
        <img className="my-4 mx-2" src={companyFifth} alt="Company-logo" />
        <img className="my-4" src={companySixth} alt="Company-logo" />
      </div>
    </div>
  );
};

export default WhyUs;
