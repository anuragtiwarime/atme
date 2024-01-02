import { socialMedia } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="space-y-10 w-1/2 self-stretch">
      <h1 className="text-4xl font-bold">Connect with me</h1>
      {/* social media icon */}
      <div className="flex items-center flex-wrap gap-5">
        {socialMedia &&
          socialMedia.map((social, index) => {
            return (
              <Link
                key={index + social?.name + social?.image}
                href={social?.link}
                className="hover:bg-gray-300 hover:shadow-md bg-gray-50 h-12 w-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-200 ease-in-out"
              >
                <Image
                  src={social?.image}
                  alt={social?.name}
                  width={50}
                  height={50}
                  className="w-7 h-7"
                />
              </Link>
            );
          })}
      </div>

      {/* adding the newsletter */}

      <iframe
        src="https://anuragtiwari.substack.com/embed"
        width="100%"
        height="300"
        style={{ border: "1px solid #EEE", background: "white" }}
      />
    </div>
  );
};

export default SocialMedia;
