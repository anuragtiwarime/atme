import Header from "@/components/Header";
import Job from "@/components/Job";
import { JobDetails } from "@/constants/constants";
import Image from "next/image";
import { Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="text-lg">
      <Header />

      {/* main section */}
      <section className="px-10 flex items-center gap-20 my-10">
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
      <section className="px-60  flex items-center flex-col gap-5">
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
    </main>
  );
}
