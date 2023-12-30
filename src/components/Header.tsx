import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { AtSign } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      <h1 className="text-gray-500 text-lg font-mono border-l-4 pl-2 border-blue-500">
        &gt;&gt; Anurag Tiwari
      </h1>

      <div className="flex items-center gap-5">
        <Button>Lecture</Button>
        <Button variant="secondary">Let&#39;s Talk</Button>
        <Button variant="outline" size="icon">
          <Link href="#">
            <AtSign />
          </Link>
        </Button>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
