import { Button } from "@/components/ui/button";

const Cancellation = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">
        Cancellation and Refund Policy
      </h2>

      <h3 className="text-xl font-semibold mb-2">Cancellation</h3>

      <p className="mb-4">
        To cancel your subscription or request a refund, please contact us at
        [your email address] within 10 days of the purchase date. We will
        process your cancellation request as soon as possible.
      </p>

      <h3 className="text-xl font-semibold mb-2">Refund Policy</h3>

      <p className="mb-4">
        We offer a full refund for courses purchased on this website within 10
        days of the purchase date. After the 10-day period, no refunds will be
        issued.
      </p>

      <p className="mb-4">
        To be eligible for a refund, the following conditions must be met:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>
          The refund request must be made within 10 days of the purchase date.
        </li>
        <li>The course has not been completed or accessed.</li>
        <li>The request must be made by the original purchaser.</li>
      </ul>

      <p className="mb-4">
        Refunds will be processed using the original payment method. Please
        allow a few business days for the refund to be reflected in your
        account.
      </p>

      <h3 className="text-xl font-semibold mb-2">Contact Information</h3>

      <Button
        variant="ghost"
        className="w-fit flex items-center justify-start text-left shadow-sm shadow-gray-700 hover:shadow-gray-800 transition-all ease-in-out duration-300"
      >
        Mail me @
      </Button>
    </div>
  );
};

export default Cancellation;
