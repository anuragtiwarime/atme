import { Button } from "@/components/ui/button";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>

      <p className="mb-4">
        This website is committed to ensuring the privacy of your personal
        information. This Privacy Policy outlines how your personal information
        is collected, used, and protected when you use this website.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Information Collection and Use
      </h3>

      <p className="mb-4">
        This website may collect personal information that you provide
        voluntarily when using this website. This information may include, but
        is not limited to, your name, email address, and any other information
        you choose to provide.
      </p>

      <h3 className="text-xl font-semibold mb-2">Use of Your Information</h3>

      <p className="mb-4">
        This website may use the collected information for various purposes,
        including but not limited to:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Personalizing your experience on the website;</li>
        <li>Improving the website based on your feedback;</li>
        <li>Sending periodic emails regarding updates or other information.</li>
      </ul>

      {/* Add more sections as needed */}

      <p className="mt-4">
        This website will not sell, trade, or otherwise transfer your personal
        information to third parties without your consent, except as required by
        law.
      </p>

      <h3 className="text-xl font-semibold mb-2">Cookies</h3>

      <p className="mb-4">
        This website may use cookies to enhance your experience. You can choose
        to disable cookies through your browser settings if you prefer not to
        receive them.
      </p>

      <h3 className="text-xl font-semibold mb-2">Security</h3>

      <p className="mb-4">
        This website takes reasonable measures to protect your personal
        information from unauthorized access, use, or disclosure. However, no
        method of transmission over the internet or electronic storage is
        completely secure, and this website cannot guarantee absolute security.
      </p>

      <p className="mt-4">
        By using this website, you consent to this Privacy Policy. This website
        reserves the right to update or change this Privacy Policy at any time.
        Any changes will be posted on this page.
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

export default PrivacyPolicy;
