"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { recdProduct } from "@/constants/constants";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Recd = () => {
  const router = useRouter();
  return (
    <div className="m-5 md:m-10 flex flex-col gap-10">
      <Button
        onClick={() => router.push("/")}
        className="self-center flex items-center gap-2"
      >
        <ArrowLeft /> <span className="text-lg">Go to homepage</span>
      </Button>

      {recdProduct.map((recd, index) => {
        return (
          <section key={index} className="space-y-2">
            <h1 className="text-2xl font-medium">{recd.name}</h1>
            <div className="flex items-center gap-10 flex-wrap">
              {recd.items.map((item, index) => {
                return (
                  <Card key={index} className="w-[350px] flex-1">
                    <CardHeader>
                      <CardTitle className="relative h-56">
                        <Image
                          src={item?.productImageUrl}
                          alt={item?.productName}
                          fill
                        />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{item?.productName}</CardContent>
                    <CardFooter className="flex justify-between">
                      <Link
                        href={item?.productPurchaseUrl}
                        target="_blank"
                        className="w-full"
                      >
                        <Button className="w-full">Buy now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Recd;
