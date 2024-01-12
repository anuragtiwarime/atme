import { Button } from "./ui/button";
import Link from "next/link";
import { AtSign } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-10 py-5 ${
        isScrolled ? "sticky top-0 z-50 backdrop-blur-lg" : ""
      }`}
    >
      <h1
        className={`text-lg font-mono border-l-4 pl-2 border-blue-500 ${
          isScrolled ? "text-gray-300" : "text-gray-400"
        }`}
      >
        &gt;&gt; Anurag Tiwari
      </h1>

      <div className="flex items-center gap-5">
        <Button
          variant="ghost"
          className="shadow-md shadow-gray-500 hover:shadow-gray-400 transition-all ease-in-out duration-300"
        >
          Recommendation
        </Button>
        <Button
          variant="ghost"
          className="shadow-md shadow-gray-500 hover:shadow-gray-400 transition-all ease-in-out duration-300"
        >
          Let&#39;s Talk
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="shadow-md shadow-gray-500 hover:shadow-gray-400 transition-all ease-in-out duration-300"
        >
          <Link href="#">
            <AtSign />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
