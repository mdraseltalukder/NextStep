import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="w-full min-h-[450px] flex items-center relative overflow-hidden h-[90vh] dark:bg-gray-900 after:absolute after:w-full after:h-full dark:after:bg-gray-950/30 "
      style={{
        backgroundImage: "url('images/banner-2.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgyMDBMMCAxMDBWMFoiIGZpbGw9IiNGOEY4RjgiLz48cGF0aCBkPSJNMjAwIDIwMEgwTDIwMCAxMDBWMjAwWiIgZmlsbD0iI0Y4RjhGOCIvPjwvc3ZnPg==')] bg-[length:200px_200px] opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
            <div className="absolute inset-0 bg-green-600 rounded-full"></div>
            <img
              src="images/10003.png"
              alt="Job seeker with laptop"
              width={350}
              height={350}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white ">
              Our Excellent Find Job
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              Best Career
            </h2>
            <p className="text-gray-500 dark:text-white mt-2">
              There are many variations passages of Lorem Ipsum Fasts by
              injected humour, or randomised words which...
            </p>
          </div>

          {/* Job type selection */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="jobType"
                  className="sr-only"
                  defaultChecked
                />
                <div className="w-5 h-5 border-2 border-green-500 rounded-full"></div>
                <div className="absolute inset-1 bg-green-500 rounded-full"></div>
              </div>
              <span>Full Time</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input type="radio" name="jobType" className="sr-only" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
              <span>Part Time</span>
            </label>
          </div>

          {/* Search form */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <select className="w-full h-12 px-4 border border-gray-200 rounded-md appearance-none bg-white">
                <option>Job Title</option>
                <option>Software Developer</option>
                <option>UX Designer</option>
                <option>Product Manager</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 5L11 1"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex-1">
              <select className="w-full h-12 px-4 border border-gray-200 rounded-md appearance-none bg-white">
                <option>All category</option>
                <option>Technology</option>
                <option>Marketing</option>
                <option>Finance</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 5L11 1"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <button className="h-12 px-6 bg-green-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
