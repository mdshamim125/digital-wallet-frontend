import Logo from "@/assets/icons/Logo";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          {/* Left side with Logo and description */}
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Logo />

              <p className="max-w-sm mt-3 text-gray-500 dark:text-gray-400">
                Digital Wallet Management – a secure and seamless way to manage
                your money, send payments, and track transactions with
                confidence.
              </p>
            </div>
          </div>

          {/* Right side with links */}
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Company */}
              <div>
                <h3 className="text-gray-700 uppercase font-semibold dark:text-white">
                  Company
                </h3>
                <a
                  href="/about"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  About Us
                </a>
                <a
                  href="/careers"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Careers
                </a>
                <a
                  href="/contact"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Contact
                </a>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-gray-700 uppercase font-semibold dark:text-white">
                  Features
                </h3>
                <a
                  href="/features"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Secure Wallet
                </a>
                <a
                  href="/features"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Instant Transfers
                </a>
                <a
                  href="/features"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Transaction History
                </a>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-gray-700 uppercase font-semibold dark:text-white">
                  Resources
                </h3>
                <a
                  href="/faq"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  FAQ
                </a>
                <a
                  href="/blog"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Blog
                </a>
                <a
                  href="/support"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Help Center
                </a>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-gray-700 uppercase font-semibold dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  +880-1710534833
                </span>
                <span className="block  mt-2 text-sm text-gray-600 dark:text-gray-400">
                  cse1205038brur@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Digital Wallet Management – All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
