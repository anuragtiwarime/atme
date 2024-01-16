import { IJourneyDetails } from "@/helper/interface";
import React from "react";

type IProp = {
  journeyDetails: IJourneyDetails;
  index: number;
  lastIndex: number;
};

const Journey = ({ journeyDetails, index, lastIndex }: IProp) => {
  return (
    <div
      className={`relative ${
        index === lastIndex ? "w-fit h-fit" : "w-full h-full"
      }`}
    >
      {/* for dot and connecting line */}
      <div className="flex flex-col md:flex-row items-center w-full h-full">
        {/* dot */}
        <div className="relative w-3 h-3 md:w-5 md:h-5 bg-gray-400 rounded-full">
          {/* Job Details */}
          <div
            className={`absolute ${
              index % 2 === 0
                ? "left-5 md:left-0 md:top-10"
                : "right-5 md:right-0 md:bottom-10"
            } w-28 sm:w-32 md:w-52 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 md:-translate-y-0 shadow-md shadow-gray-400 p-2 rounded-md`}
          >
            <h2 className="font-bold">{journeyDetails?.companyName}</h2>
            <h5 className="font-semibold text-sm">
              {journeyDetails?.designation}
            </h5>
            <p className="font-medium text-xs text-gray-500">
              {journeyDetails?.startDate} to {journeyDetails?.endDate}
            </p>
          </div>
        </div>

        {/* connecting line */}
        <div
          className={`md:h-1 w-[1px] h-full bg-gray-300 ${
            lastIndex === index ? "hidden" : "md:w-full"
          }`}
        />
      </div>
    </div>
  );
};

export default Journey;
