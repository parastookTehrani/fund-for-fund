"use client";
import Button from "../components/shared/button";
import Input from "../components/shared/input";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-semibold">Create your personal account</h1>
        <h2 className="text-[#644FC1] text-xl font-bold">FUND FOR FOUND</h2>

        <Image
          src="/Vector.png"
          width={50}
          height={50}
          alt="logo"
          className="mx-auto"
        />

        <Button variant="outline">Continue with Google</Button>

        <p className="text-gray-400 text-sm">or</p>

        <form className="space-y-3 text-left">
          <Input label="First name" placeholder="John" />
          <Input label="Last name" placeholder="Doe" />
          <Input label="Password" />
          <Input
            label="Email address"
            type="email"
            placeholder="e.g. yourname@yahoo.com"
            helper="We will send you a 6 digit code to your email."
          />
          <Button type="submit">Continue</Button>
        </form>

        <div className="text-xs text-gray-500 space-x-2">
          <a href="#" className="hover:underline text-[#644FC1]">
            Privacy Policy
          </a>
          <span>&</span>
          <a href="#" className="hover:underline text-[#644FC1]">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
