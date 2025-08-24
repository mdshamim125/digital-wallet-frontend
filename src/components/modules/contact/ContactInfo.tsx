import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-blue-500" />
          <p className="text-gray-700 dark:text-gray-300">
            support@digitalwallet.com
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-green-500" />
          <p className="text-gray-700 dark:text-gray-300">+1 (234) 567-890</p>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="w-6 h-6 text-red-500" />
          <p className="text-gray-700 dark:text-gray-300">
            123 Wallet Street, Fintech City, USA
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Our support team is available <strong>24/7</strong> to help you with
          any issues or queries.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
