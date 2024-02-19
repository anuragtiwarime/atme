import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag Tiwari",
  description:
    "Manager | SDE - II | Mentorship | Technology Enthusiast | Speaker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script src="https://apis.google.com/js/platform.js" />
      </head>
      <body
        className={`${inter.className} shadow-green-500 shadow-md my-5 rounded-md`}
      >
        {children}{" "}
      </body>
      {/* <body className="font-serif">{children} </body> */}
    </html>
  );
}
