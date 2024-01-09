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
        className={`text-gray-500 text-lg font-mono border-l-4 pl-2 border-blue-500 ${
          isScrolled ? "text-gray-700 dark:text-gray-100" : ""
        }`}
      >
        &gt;&gt; Anurag Tiwari
      </h1>

      <div className="flex items-center gap-5">
        <Button>Recommendation</Button>
        <Button variant="secondary">Let&#39;s Talk</Button>
        <Button variant="outline" size="icon">
          <Link href="#">
            <AtSign />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
