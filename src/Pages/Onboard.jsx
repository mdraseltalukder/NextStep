import { ArrowRight, Briefcase, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Onboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold">TalentConnect</h1>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Welcome to TalentConnect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please select your role to get started with our platform
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Recruiter</CardTitle>
                <CardDescription>
                  Find and connect with top talent for your organization
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <div className="h-40 bg-muted rounded-md flex items-center justify-center mb-6">
                  <Briefcase className="h-20 w-20 text-muted-foreground/60" />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Post unlimited job listings</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Access to candidate database</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced filtering and matching</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/jobs" className="w-full">
                  <Button size="lg" className="w-full">
                    Continue as Recruiter
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Applicant</CardTitle>
                <CardDescription>
                  Discover opportunities and advance your career
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <div className="h-40 bg-muted rounded-md flex items-center justify-center mb-6">
                  <UserRound className="h-20 w-20 text-muted-foreground/60" />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Apply to jobs with one click</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Get matched with relevant positions</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Track application status</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/alljobs" className="w-full">
                  <Button size="lg" className="w-full">
                    Continue as Applicant
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
