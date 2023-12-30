import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
            <Image
              className="w-8 h-8"
              width={50}
              height={50}
              src="/assets/email.svg"
              alt="email"
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
