import { Button } from "./ui/button";
import Link from "next/link";
import { AtSign, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const handleMail = () => {
    console.log("working");
    router.push("mailto:anuragtiwari.me@gmail.com");
  };

  const test = () => {
    console.log("test");
  };

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
      className={`flex items-center justify-between px-5 md:px-10 py-5 ${
        isScrolled ? "sticky top-0 z-50 backdrop-blur-lg" : ""
      }`}
    >
      <Image
        src="/assets/logoWhite.png"
        alt="anurag tiwari"
        width={150}
        height={50}
      />

      <div className="block sm:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="mx-2">
            <DrawerHeader className="space-y-2">
              <Button variant="outline" className="flex justify-start">
                Blogs
              </Button>
              <Button variant="outline" className="flex justify-start">
                Recommendation
              </Button>
              <Button
                onClick={test}
                variant="outline"
                className="flex justify-start"
              >
                Let&#39;s Talk
              </Button>

              <Button
                type="button"
                onClick={handleMail}
                variant="outline"
                className="flex justify-start"
              >
                Mail me @
              </Button>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full" variant="secondary">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* buttons menu */}
      <div className="items-center gap-5 hidden sm:flex">
        <Button variant="secondary">Blogs</Button>
        <Button
          variant="outline"
          // className="bg-gradient-to-r from-red-500 to-purple-800 border-transparent transform hover:border-white transition-transform duration-300 ease-in-out text-white"
        >
          Recommendation
        </Button>
        <Button variant="outline">Let&#39;s Talk</Button>
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
