import Image from "next/image";
import React from "react";
import { IToolsData } from "@/helper/interface";

const Tool = ({ url, name }: IToolsData) => {
  return (
    <div className="relative group w-32 h-32 p-4 shadow-md shadow-gray-800 rounded-md flex flex-col items-center justify-between hover:-translate-y-2 transition-all ease-in-out duration-200">
      <Image src={url} alt="name" width={50} height={50} />
      <h5 className="font-semibold">{name}</h5>
    </div>
  );
};

export default Tool;
