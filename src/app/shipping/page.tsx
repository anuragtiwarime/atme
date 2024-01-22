import { Button } from "@/components/ui/button";
import Link from "next/link";

const Shipping = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shipping Information</h2>

      <p className="mb-4">
        Thank you for considering our online courses. Please note that all our
        courses are delivered online, and there is no physical shipping
        involved.
      </p>

      <h3 className="text-xl font-semibold mb-2">Delivery Method</h3>

      <p className="mb-4">
        All courses are delivered digitally through our online platform. After
        completing the purchase, you can access your courses by logging into
        your account on our website.
      </p>

      <h3 className="text-xl font-semibold mb-2">Accessing Your Courses</h3>

      <p className="mb-4">To access your courses:</p>

      <ol className="list-decimal pl-6 mb-4">
        <li>Log in to your account on our website using your credentials.</li>
        <li>Navigate to the &quot;My Courses&quot; section.</li>
        <li>Start learning and enjoy the course content!</li>
      </ol>

      <h3 className="text-xl font-semibold mb-2">Contact Information</h3>

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

export default Shipping;
