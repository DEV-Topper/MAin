import React from "react";
import proceeds from "../../assets/sale-proceeds.png";
import side from "../../assets/download.png";

const Distribution = () => {
  return (
    <div>
      <div
        className="w-full min-h-[150vh] lg:min-h-[80vh] justify-center items-center flex  bg-no-repeat bg-right-top bg-blue-600"
        style={{ backgroundImage: `url(${side})` }}
      >
        <div className="w-[80%] flex flex-col justify-between ">
          <h1 className="text-[40px] mb-10 text-white font-bold text-center">
            Token Distribution
          </h1>
          <div className="w-full flex flex-wrap justify-between flex-row-reverse items-center">
            <img src={proceeds} className="w-full lg:w-1/2 scale-90" alt="" />
            <div className="flex flex-col w-full lg:w-1/2 justify-center space-y-3">
              <div className="text-start pl-4 py-3 font-semibold text-white text-[18px] w-[100%] lg:w-[390px] border-orange-600 border-l-4 bg-blue-700 shadow-lg">
                Interconnection Dev.
              </div>
              <div className="py-3 pl-4 font-semibold text-white text-[18px] w-[100%] lg:w-[390px] border-green-600 border-l-4 bg-blue-700 shadow-lg">
                Marketing & General
              </div>
              <div className="py-3 pl-4 font-semibold text-white text-[18px] w-[100%] lg:w-[390px] border-green-900 border-l-4 bg-blue-700 shadow-lg">
                Mobile Ad Platform
              </div>
              <div className="py-3 pl-4 font-semibold text-white text-[18px] w-[100%] lg:w-[390px] border-blue-500 border-l-4 bg-blue-700 shadow-lg">
                Ad Platform Integration
              </div>
              <div className="py-3 pl-4 font-semibold text-white text-[18px] w-[100%] lg:w-[390px] border-red-600 border-l-4 bg-blue-700 shadow-lg">
                Operational Overhead
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
