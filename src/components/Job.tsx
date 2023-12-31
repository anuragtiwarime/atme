import { IJobDetails } from "@/helper/interface";
import React, { useState } from "react";

type IProp = {
  jobDetails: IJobDetails;
  index: number;
  lastIndex: number;
};

const Job = ({ jobDetails, index, lastIndex }: IProp) => {
  return (
    <div className={`relative ${index === lastIndex ? "w-fit" : "w-full"}`}>
      {/* for dot and connecting line */}
      <div className="flex items-center w-full">
        <div className="w-5 h-5 bg-gray-500 rounded-full" />
        <div
          className={`h-1 bg-gray-200 ${
            lastIndex === index ? "hidden" : "w-full"
          }`}
        />
      </div>

      {/* Job Details */}
      <div
        className={`w-60 shadow-md dark:shadow-white p-4 rounded-md absolute ${
          index === lastIndex ? "-right-28" : "right-1/2"
        } ${index % 2 === 0 ? "top-10" : "bottom-10"}`}
      >
        <h2 className="font-bold">{jobDetails?.companyName}</h2>
        <h5 className="font-semibold text-sm">{jobDetails?.designation}</h5>
        <p className="font-medium text-xs text-gray-500">
          {jobDetails?.startDate} to {jobDetails?.endDate}
        </p>
      </div>
    </div>
  );
};

export default Job;
