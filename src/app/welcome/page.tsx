"use client";
import Image from "next/image";
import Button from "../components/shared/button";

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-4xl font-bold text-[#644FC1] mb-3">
        Welcome to 3F
      </h1>

      <div className="mb-10">
        <Image
          src="/welcome.png"
          alt="Welcome illustration"
          width={300}
          height={200}
        />
      </div>

      <p className="text-[#717171] font-bold text-2xl mb-8">
        Your journey begins here. <br /> Ready to start?
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button className="w-full sm:w-auto">Go homepage</Button>
        <Button className="w-full sm:w-auto">Start project</Button>
      </div>
    </div>
  );
}
