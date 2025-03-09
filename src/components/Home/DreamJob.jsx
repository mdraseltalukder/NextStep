import { Button } from "@/components/ui/button";

export default function DreamJob() {
  return (
    <div className="flex flex-col items-center mx-auto gap-5 py-20 lg:py-30">
      <h2 className="text-2xl lg:text-3xl">Your Dream jobs are Waiting</h2>
      <p className="lg:text-xl">
        Over ! million interections, 50,000 success stories Make Yours now
      </p>
      <div className="flex gap-4 mt-5">
        <Button>Search Job</Button>
        <Button className="bg-[#119c4e]">Apply Job Now</Button>
      </div>
    </div>
  );
}
