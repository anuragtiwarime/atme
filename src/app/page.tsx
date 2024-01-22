"use client";

import Header from "@/components/Header";
import { JourneyDetails, socialMedia, toolsData } from "@/constants/constants";
import Image from "next/image";
import { Briefcase, MonitorPlay, UsersRound, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Tool from "@/components/Tool";
import Journey from "@/components/Journey";
import { fetchYoutubeVideos, getYoutubeStats } from "@/helper/youtube";
import { useEffect, useState } from "react";
import { IYoutubeVideoData } from "@/helper/interface";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Home() {
  const year = new Date().getFullYear();
  const [youtubeVideoData, setYoutubeVideoData] = useState<IYoutubeVideoData[]>(
    []
  );
  const [stats, setStats] = useState({
    videoCount: 0,
    subscriberCount: 0,
  });
  useEffect(() => {
    (async () => {
      const youtubeVideoData = await fetchYoutubeVideos();
      youtubeVideoData && setYoutubeVideoData([...youtubeVideoData]);
      const stats = await getYoutubeStats();
      setStats({
        videoCount: Number(stats?.videoCount) || 0,
        subscriberCount: Number(stats?.subscriberCount) || 0,
      });
    })();
  }, []);

  return (
    <main>
      <Header />

      {/* main section */}
      <section className="px-5 md:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 my-5 md:my-10">
        <div className="rounded-full p-1 border-[2px] border-gray-400">
          <Image
            className="rounded-full"
            src="/assets/profile.jpeg"
            alt="profile"
            width={600}
            height={600}
          />
        </div>

        {/* for user description */}
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-bold">Anurag Tiwari</h1>
            <h4 className="text-lg sm:text-2xl font-semibold">
              Manager | SDE - II | Mentorship | Technology Enthusiast | Speaker
            </h4>
          </div>
          <div className="space-y-2 font-medium text-gray-300 text-sm sm:text-base">
            <p>
              Lead programmer with a track record of incorporating user and
              business requirements into cost-effective, secure and
              user-friendly solutions known for scalability and durability.
            </p>
            <p>I ❤️ To Code and Teach</p>
          </div>
        </div>
      </section>

      {/* for journey section */}
      <section className="px-40 flex items-center flex-col gap-5">
        <div className="flex items-center gap-3 md:gap-5">
          <Briefcase className="w-6 h-6 sm:w-10 sm:h-10" />
          <h1 className="text-2xl md:text-4xl font-bold">Journey</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-[600px] md:h-[320px] mt-10 mb-20 md:mt-0 md:mb-0">
          {JourneyDetails &&
            JourneyDetails.map((job, index) => {
              return (
                <Journey
                  key={index + job?.companyName + job?.designation}
                  journeyDetails={job}
                  index={index}
                  lastIndex={JourneyDetails?.length - 1}
                />
              );
            })}
        </div>
      </section>

      <div className="px-5 md:px-10">
        <Separator />
      </div>

      {/* youtube integration section */}
      <section className="px-5 md:px-10 flex flex-col my-10 gap-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* for channel details */}
          <div className="space-y-2 md:w-2/3">
            <h1 className="text-4xl font-bold">Youtube</h1>
            <h4 className="text-2xl font-semibold">
              Checkout my popular videos
            </h4>
            <p className="text-gray-500 font-medium">
              I would really appreciate it if you could check it out and maybe
              even hit the subscribe button if you enjoy the content. Thanks in
              advance!
            </p>
          </div>

          {/* for videos and subscriber */}
          <div className="flex flex-col gap-5 md:w-1/3">
            <div className="shadow-md shadow-gray-800 rounded-md p-2 flex items-center gap-5">
              <UsersRound size={25} />
              <p className="font-medium text-lg">
                {stats?.subscriberCount} Subscribers
              </p>
            </div>
            <div className="shadow-md shadow-gray-800 rounded-md p-2 flex items-center gap-5">
              <MonitorPlay size={25} />
              <p className="font-medium text-lg">
                {stats?.videoCount} videos uploaded
              </p>
            </div>
            <Button variant="destructive" className="text-lg" size={"lg"}>
              Subscribe
            </Button>
          </div>
        </div>

        {/* for recent videos */}
        <div className="px-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {youtubeVideoData.length === 0
                ? Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Skeleton className="w-full h-60" />
                      </div>
                    </CarouselItem>
                  ))
                : youtubeVideoData.map((video: IYoutubeVideoData) => {
                    return (
                      <CarouselItem
                        key={video?.publishTime + video?.publishedAt}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <Card className="h-[17rem]">
                          <CardContent className="aspect-square p-4">
                            <div className="space-y-3">
                              <Image
                                className="rounded-md"
                                src={video?.thumbnails?.medium?.url}
                                width={video?.thumbnails?.medium?.width}
                                height={video?.thumbnails?.medium?.height}
                                alt="youtube video"
                              />
                              <h4 className="font-medium line-clamp-2">
                                {video?.title}
                              </h4>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    );
                  })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* tools and technolgoies */}
      <section className="flex flex-col items-center gap-10 px-10 my-20">
        <div className="flex items-center gap-5">
          <Wrench className="w-10 h-10" />
          <h1 className="text-4xl font-bold">Tools and Technologies</h1>
        </div>

        <div className="flex items-center justify-center gap-10 flex-wrap">
          {toolsData &&
            toolsData.map((tool) => {
              return (
                <Tool
                  key={tool.name + tool.url}
                  name={tool?.name}
                  url={tool?.url}
                />
              );
            })}
        </div>
      </section>

      {/* connect with me section */}
      <section className="flex items-center gap-10 justify-between px-10">
        <div className="w-1/2 space-y-5">
          <h1 className="text-4xl font-bold">Connect with me</h1>
          {/* social media icon */}
          <div className="flex items-center flex-wrap gap-5">
            {socialMedia &&
              socialMedia.map((social, index) => {
                return (
                  <Link
                    key={index + social?.name + social?.image}
                    href={social?.link}
                    className="hover:bg-gray-300 hover:shadow-md hover:rotate-[360deg] scale-105 bg-gray-50 h-12 w-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-500 ease-in-out"
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
        </div>

        {/* adding the newsletter */}
        <iframe
          className="rounded-md"
          src="https://anuragtiwari.substack.com/embed"
          width="50%"
          height="150"
          style={{ border: "1px solid #EEE", background: "white" }}
        />
      </section>

      <div className="px-10 pt-20">
        <Separator />
      </div>

      <footer className="px-10 text-center text-base py-5 font-medium flex items-center justify-between gap-10">
        <div>
          <p> &#169; Copyright {year} - All right reserved.</p>
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/shipping">Shipping</Link>
          </li>
          <li>
            <Link href="/cancellation">Cancellation</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy & Policy</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
}
