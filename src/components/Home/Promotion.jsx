import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileEdit } from "lucide-react";

export default function Promotion() {
  return (
    <div className=" py-16 px-4 sm:py-28 lg:py-32">
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Promoting Career
            </h1>
            <p className="text-gray-600 dark:text-white mb-2">
              There are many variations of passages of Lorem Ipsum Facts
            </p>
            <p className="text-gray-600 dark:text-white mb-2">
              There are many variations of passages of Lorem Ipsum
            </p>
            <p className="text-gray-600 dark:text-white mb-8">
              Fastsby injected humour fasts there
            </p>
            <div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 h-auto">
                Browse Job
              </Button>
            </div>
          </div>

          {/* Right Column */}

          <div className="flex flex-col gap-16 justify-center items-center">
            {/* Step Indicator */}
            <div className="flex items-center justify-end">
              <div className="h-[1px] bg-green-500 w-24 md:w-40"></div>
              <div className="flex space-x-2 md:space-x-4">
                <Button className="hover:bg-green-500 focus:bg-green-500  px-4 py-2 -xl">
                  Step One
                </Button>
                <Button className="hover:bg-green-500 focus:bg-green-500 px-4 py-2 -xl">
                  Step Two
                </Button>
                <Button className="hover:bg-green-500 focus:bg-green-500 px-4 py-2 -xl">
                  Step Three
                </Button>
              </div>

              <div className="h-[1px] bg-green-500 w-24 md:w-40"></div>
            </div>

            <Card className="bg-white dark:bg-black dark:text-white p-8 -xl-lg shadow-sm w-full max-w-md relative">
              {/* Circle with number */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 -xl-full bg-white border border-gray-200 flex items-center justify-center">
                <span className="text-gray-600 ">1</span>
              </div>

              <div className="flex flex-col items-center text-center pt-4">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 text-green-500">
                  <div className="border-2 border-green-500 p-3 -xl-md">
                    <FileEdit className="w-full h-full" />
                  </div>
                </div>

                {/* Content */}
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Set Up Your Profile All
                </h2>
                <p className="text-gray-600 dark:text-white">
                  After signing up to TechCareer, you start to set up your
                  profile and find the hottest & latest tech jobs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
