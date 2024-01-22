import { Button } from "@/components/ui/button";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>

      <p className="mb-4">
        By accessing this website, you are agreeing to be bound by these Terms
        and Conditions of Use, all applicable laws, and regulations, and agree
        that you are responsible for compliance with any applicable local laws.
      </p>

      <p className="mb-4">
        If you do not agree with any of these terms, you are prohibited from
        using or accessing this site. The materials contained in this website
        are protected by applicable copyright and trademark law.
      </p>

      <h3 className="text-xl font-semibold mb-2">Use License</h3>

      <p className="mb-4">
        Permission is granted to temporarily download one copy of the materials
        (information or software) on this website for personal, non-commercial
        transitory viewing only. This is the grant of a license, not a transfer
        of title, and under this license, you may not:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>modify or copy the materials;</li>
        <li>
          use the materials for any commercial purpose, or for any public
          display (commercial or non-commercial);
        </li>
        <li>
          attempt to decompile or reverse engineer any software contained on
          this website;
        </li>
        <li>
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li>
          transfer the materials to another person or &apos;mirror&apos; the
          materials on any other server.
        </li>
      </ul>

      {/* Add more sections as needed */}

      <p className="mt-4">
        This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by [Your Name] at any time. Upon
        terminating your viewing of these materials or upon the termination of
        this license, you must destroy any downloaded materials in your
        possession whether in electronic or printed format.
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

export default TermsAndConditions;
