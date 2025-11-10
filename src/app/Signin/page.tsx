"use client";
import React from "react";
import Button from "../components/shared/button";
import Input from "../components/shared/input";
import Link from "next/link";
import Image from "next/image";

export default function Signin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-[#644FC1] text-2xl font-bold">FUND FOR FOUND</h1>
        <p className="text-gray-600 text-sm">
          Create an account or sign in to start creating
        </p>

        <Image
          src="/Vector.png"
          width={50}
          height={50}
          alt="logo"
          className="mx-auto"
        />

        <Button
          variant="outline"
          className="flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path d="M488 261.8C488 403.3 391.1 512 248 512A248 248 0 1 1 248 0c66.8 0 122.8 24.4 166.1 64.5l-67.3 64.6C318.3 99.8 285.6 87 248 87c-84.9 0-153.9 68.9-153.9 153.9S163.1 394.8 248 394.8c73.2 0 120.5-41.8 126.3-99.6h-126v-79.3h209.5c2 11.6 3.2 23.5 3.2 36z" />
          </svg>
          Continue with Google
        </Button>

        <div className="relative">
          <span className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </span>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400">or</span>
          </div>
        </div>

        <form className="space-y-3 text-left">
          <Input
            label="Mobile number or email address"
            placeholder="e.g. 09120000000 or yourname@yahoo.com"
          />
          <Input label="Password" type="password" placeholder="••••••••" />
          <div className="text-right">
            <Link href="/forgot-password" className="text-xs text-[#644FC1] hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Button type="submit">Continue</Button>
        </form>

        <div className="text-sm text-gray-600">
          <p>
            Don’t have one?
            <Link
              href="/Signup"
              className="text-[#644FC1] font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>

        <div className="text-xs text-gray-400 space-x-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>&</span>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
