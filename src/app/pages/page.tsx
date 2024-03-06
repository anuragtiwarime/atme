import { socialMedia } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pages = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 p-10">
      <Image
        src={"/assets/logoWhite.png"}
        alt="signature"
        width={300}
        height={100}
      />

      {/* container for social links */}
      <div className="flex flex-col items-center gap-5 w-full">
        {/* for youtube */}
        <Link
          href={"https://www.youtube.com/@anuragtiwarime?sub_confirmation=1"}
          target="_blank"
          className="w-full md:w-96"
        >
          <div className="px-5 md:px-0 w-full md:w-96 rounded-[50px] p-5 flex items-center justify-center gap-5 bg-white hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-sm hover:shadow-white">
            <Image
              src="/assets/social/youtube.svg"
              alt="Youtube"
              width={20}
              height={20}
            />
            <p className="text-black font-medium text-lg">Youtube</p>
          </div>
        </Link>

        {/* for topmate */}
        <Link
          href={"https://topmate.io/anuragtiwarime"}
          target="_blank"
          className="w-full md:w-96"
        >
          <div className="px-5 md:px-0 w-full md:w-96 rounded-[50px] p-5 flex items-center justify-center gap-5 bg-white hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-sm hover:shadow-white">
            <Image
              src="/assets/social/topmate.png"
              alt="Topmate"
              width={20}
              height={20}
            />
            <p className="text-black font-medium text-lg">Topmate</p>
          </div>
        </Link>

        {socialMedia.length > 0 &&
          socialMedia.map((social, index) => {
            return (
              <Link
                key={index}
                href={social?.link}
                target="_blank"
                className="w-full md:w-96"
              >
                <div className="px-5 md:px-0 w-full md:w-96 rounded-[50px] p-5 flex items-center justify-center gap-5 bg-white hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-sm hover:shadow-white">
                  <Image
                    src={social?.image}
                    alt={social?.name}
                    width={20}
                    height={20}
                  />
                  <p className="text-black font-medium text-lg">
                    {" "}
                    {social?.name}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Pages;
