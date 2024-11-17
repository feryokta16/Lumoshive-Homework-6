import React from "react";
import hero from "./assets/imageMain.jpeg";

const Hero = () => {
  return (
    <main className="text-left py-16 bg-gray-50 px-4">
      <div className="flex flex-col md:flex-row px-5" id="root">
        <div className="md:w-1/2 relative order-1 md:order-2">
          <img
            alt="Person working on a laptop in a cozy room"
            className=" object-cover resize-x  sm-w-3/4 sm-h-3/4"
            height="450"
            src={hero}
            width="450"
          />
        </div>
        <div className="md:w-1/2 flex mb-10 flex-col justify-center p-10 md:pl-20 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Web Hosting for Your Website
          </h1>
          <p className="text-base md:text-lg mb-6">
            Blazing fast web hosting for individuals and <br />
            businesses of all sizesbacked by 24×7×365 Support.
          </p>
          <div className=" flex flex-wrap ">
            <button className=" rounded px-2 py-2 bg-red-600 text-white hover:bg-red-700 mx-1 my-2 ">
              Create an Account
            </button>
            <button className=" rounded bg-white text-black px-2 py-2 border border-gray-300 hover:bg-gray-100 mx-1 my-2">
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
