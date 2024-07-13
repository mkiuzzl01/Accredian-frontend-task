import React from "react";

const Hero = () => {
  return (
    <div className="container bg-[#EEF5FF] rounded-md mx-auto">
      <div className="items-center  lg:flex mx-12">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-7xl">
              <span className="">Let’s Learn <br /> & Earn</span>
            </h1>

            <p className="mt-3 text-2xl">
              Get a chance to win up-to <br />{" "}
              <span className="text-2xl font-semibold text-blue-500">
                Rs. 15,000
              </span>
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition">
            Refer Now
          </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img src="/Anniversary .png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
