import { Button } from "./ui/button";
import Link from "next/link";
import { AtSign, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

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

      <div className="block sm:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="mx-2">
            <DrawerHeader>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start text-left shadow-sm shadow-gray-500 hover:shadow-gray-400 transition-all ease-in-out duration-300"
              >
                Recommendation
              </Button>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start text-left shadow-sm shadow-gray-500 hover:shadow-gray-400 transition-all ease-in-out duration-300"
              >
                Let&#39;s Talk
              </Button>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start text-left shadow-sm shadow-gray-500 hover:shadow-gray-400 transition-all ease-in-out duration-300"
              >
                Mail me @
              </Button>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full" variant="outline">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* buttons menu */}
      <div className="items-center gap-5 hidden sm:flex">
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
