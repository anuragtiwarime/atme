import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <p className="mb-4">
        Have a question or need assistance? Feel free to reach out to us using
        the contact button below.
      </p>

      <div className="flex items-center gap-5">
        <Button
          variant="ghost"
          className="w-fit flex items-center justify-start text-left shadow-sm shadow-gray-700 hover:shadow-gray-800 transition-all ease-in-out duration-300"
        >
          Mail me @
        </Button>
        <Link href={"/"}>
          <Button
            variant="ghost"
            className="w-fit flex items-center justify-start text-left shadow-sm shadow-gray-700 hover:shadow-gray-800 transition-all ease-in-out duration-300"
          >
            Back to homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
