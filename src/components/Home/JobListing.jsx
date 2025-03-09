import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Clock, DollarSign, MapPin } from "lucide-react";

export default function JobListing() {
  const jobs = [
    {
      id: 1,
      title: "Junior Graphic Designer (Web)",
      company: "Q",
      companyBgColor: "#1E88E5",
      categories: ["Design", "Development"],
      location: "New York",
      date: "June 20, 2021",
      salary: "$150 - $180 / week",
      isFeatured: true,
      isFilled: true,
      isFullTime: true,
      isUrgent: true,
    },
    {
      id: 2,
      title: "Finance Manager & Health",
      company: "M",
      companyBgColor: "#212121",
      categories: ["Design"],
      location: "New York",
      date: "May 3, 2021",
      salary: "$450 - $500 / month",
      isFeatured: true,
      isFullTime: true,
      isUrgent: true,
    },
    {
      id: 3,
      title: "General Ledger Accountant",
      company: "up",
      companyBgColor: "#4CAF50",
      categories: ["Design", "Marketing"],
      location: "New York",
      date: "May 3, 2021",
      salary: "$50 - $68 / day",
      isFeatured: true,
      isFullTime: true,
    },
    {
      id: 4,
      title: "Assistant / Store Keeper",
      company: "N",
      companyBgColor: "#E50914",
      categories: ["Automotive Jobs", "Marketing"],
      location: "New York",
      date: "May 3, 2021",
      salary: "$250 - $280 / week",
      isFeatured: true,
      isPartTime: true,
    },
    {
      id: 5,
      title: "Group Marketing Manager",
      company: "A",
      companyBgColor: "#3F2E3E",
      categories: ["Customer", "Marketing"],
      location: "Miami",
      date: "May 3, 2021",
      salary: "$800 - $850 / month",
      isFeatured: true,
      isPartTime: true,
    },
  ];

  return (
    <div className=" min-h-screen py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Featured Jobs
          </h1>
          <p className="mt-2 text-gray-600 dark:text-white">
            Know your worth and find the job that qualify your life
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="overflow-hidden shadow-sm">
              <div className="p-6 flex items-start">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: job.companyBgColor }}
                >
                  {job.company}
                </div>

                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                        {job.title}
                        {job.isFeatured && (
                          <span className="ml-2 text-xs text-green-600 font-medium">
                            Featured
                          </span>
                        )}
                        {job.isFilled && (
                          <span className="ml-1 text-xs text-red-500 font-medium">
                            Filled
                          </span>
                        )}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500 dark:text-white gap-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.categories.join(", ")}
                        </div>

                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>

                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.date}
                        </div>

                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="">
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {job.isFullTime && (
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs bg-blue-100 text-blue-800"
                      >
                        Full Time
                      </Badge>
                    )}
                    {job.isPartTime && (
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs bg-blue-100 text-blue-800"
                      >
                        Part Time
                      </Badge>
                    )}
                    {job.isUrgent && (
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs bg-amber-100 text-amber-800"
                      >
                        Urgent
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Load More Listing
          </Button>
        </div>
      </div>
    </div>
  );
}
