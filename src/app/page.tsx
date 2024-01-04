"use client";

import Header from "@/components/Header";
import Job from "@/components/Job";
import { JobDetails, toolsData } from "@/constants/constants";
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
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Tool from "@/components/Tool";
import SocialMedia from "@/components/SocialMedia";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <main className="text-lg">
      <Header />

      {/* main section */}
      <section className="px-10 flex flex-col md:flex-row items-center gap-20 my-10">
        <Image
          className="rounded-full shadow-md"
          src="/assets/profile.jpeg"
          alt="profile"
          width={600}
          height={600}
        />

        {/* for user description */}
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold">Anurag Tiwari</h1>
            <h4 className="text-2xl font-semibold">
              Coder, Mentor, and Content Creator
            </h4>
          </div>
          <div className="space-y-2 font-medium">
            <p>
              Lead programmer with a track record of incorporating user and
              business requirements into cost-effective, secure and
              user-friendly solutions known for scalability and durability.
            </p>
            <p>I ❤️ To Code and Teach</p>
          </div>
        </div>
      </section>

      {/* for job section */}
      <section className="px-60 flex items-center flex-col gap-5">
        <div className="flex items-center gap-5">
          <Briefcase className="w-10 h-10" />
          <h1 className="text-4xl font-bold">Experiences</h1>
        </div>
        <div className="flex items-center justify-between w-full h-[350px]">
          {JobDetails &&
            JobDetails.map((job, index) => {
              return (
                <Job
                  key={index + job?.companyName + job?.designation}
                  jobDetails={job}
                  index={index}
                  lastIndex={JobDetails?.length - 1}
                />
              );
            })}
        </div>
      </section>

      <div className="px-10">
        <Separator />
      </div>

      {/* youtube integration section */}
      <section className="pl-10 pr-20 flex flex-col my-10 gap-10">
        <div className="flex items-center gap-10">
          {/* for channel details */}
          <div className="space-y-2 w-2/3">
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
          <div className="flex flex-col gap-5 w-1/3">
            <div className="shadow-md rounded-md p-4 flex items-center gap-5">
              <UsersRound size={30} />
              <p className="font-medium text-xl ">
                100K <span className="text-gray-500">Subscribers</span>
              </p>
            </div>
            <div className="shadow-md rounded-md p-4 flex items-center gap-5">
              <MonitorPlay size={30} />
              <p className="font-medium text-xl">
                100 <span className="text-gray-500">videos uploaded</span>
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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
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
      <section className="flex items-center gap-20 justify-between px-10">
        {/* left section */}
        <SocialMedia />

        {/* right section */}
        <ContactForm />
      </section>

      <div className="px-10 pt-20">
        <Separator />
      </div>

      <footer className="px-10 text-center text-base py-5 font-medium">
        &#169; Copyright {year} - All right reserved.
      </footer>
    </main>
  );
}
