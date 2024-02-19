import { Button } from "./ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // for sticky navbar
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
            <DrawerHeader className="grid grid-cols-2 place-items-center gap-5">
              <Link
                href={"https://blog.anuragtiwari.me/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="secondary" className="w-full">
                  Blogs
                </Button>
              </Link>
              <Link href="recd" className="w-full">
                <Button variant="outline" className="w-full">
                  Recommendation
                </Button>
              </Link>
              <Link
                href={"https://topmate.io/anuragtiwarime"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Let&#39;s Talk
                </Button>
              </Link>
              <Button variant="ghost" className="hover:bg-transparent">
                <Link
                  href="mailto:anuragtiwari.me@gmail.com?Subject=Let's%20Connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-[2.5rem]"
                >
                  📧
                </Link>
              </Button>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full" variant="default">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* buttons menu */}
      <div className="items-center gap-5 hidden sm:flex">
        <Link
          href={"https://blog.anuragtiwari.me/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary">Blogs</Button>
        </Link>
        <Link href="recd">
          <Button variant="outline">Recommendation</Button>
        </Link>
        <Link
          href={"https://topmate.io/anuragtiwarime"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">Let&#39;s Talk</Button>
        </Link>
        <Button variant="ghost" className="hover:bg-transparent">
          <Link
            href="mailto:anuragtiwari.me@gmail.com?Subject=Let's%20Connect"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-[2.5rem]"
          >
            📧
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
