import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-white dark:text-black py-20 text-white">
      <div className="container mx-auto px-4 mb-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/*      <!-- Brand logo --> */}
              <Link
                id="WindUI"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 log-cinzel-decorative font-thin"
                to="./"
              >
                NextStep
              </Link>
            </div>
            <div className="space-y-2">
              <p className="font-medium dark:text-black">Call us</p>
              <p className="text-lg dark:text-black">123 456 7890</p>
              <p className="dark:text-black">
                328 Queensberry Street, North Melbourne VIC
              </p>
              <p className="dark:text-black">3051, Australia</p>
              <p className="dark:text-black">support@superio.com</p>
            </div>
          </div>

          {/* Find Jobs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold dark:text-black">
                Find Jobs
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dark:text-black hover:underline">
                    Browse Candidates
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dark:text-black hover:underline">
                    Candidate Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="#" className=" dark:text-black hover:underline">
                    Job Alerts
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dark:text-black hover:underline">
                    My Bookmarks
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h3 className="text-lg dark:text-black font-semibold">
                Frequently Asked Questions
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Site Map
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Privacy Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Security Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    Accessibility Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline dark:text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Join Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-black">
              Join Us On
            </h3>
            <p className="dark:text-black">
              We don't send spam so don't worry.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your e-mail"
                className="rounded-r-none dark:bg-black dark:text-white bg-white text-black"
              />
              <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-6 border-indigo-600">
        <div className="container  mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="dark:text-black">© All Right Reserved by Md Rasel.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="dark:text-black hover:text-indigo-200">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="hover:text-indigo-200 dark:text-black">
              <Twitter className="h-6 w-6 dark:text-black" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="hover:text-indigo-200 dark:text-black">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="hover:text-indigo-200 dark:text-black">
              <Linkedin className="h-6 w-6 dark:text-black" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
