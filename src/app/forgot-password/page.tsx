'use client'

import Image from "next/image"
import Button from "../components/shared/button"
import Input from "../components/shared/input"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 text-center">
       
        <div className="flex justify-center">
          <div className="p-4 rounded-xl inline-flex">
            <Image src='/forgot.png'  width={80} height={80} alt="forgot password"/>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-lg font-semibold text-[#644FC1]">Trouble with logging in?</h1>
          <p className="text-sm text-[#444444]">
            Enter your email address or phone number and we`ll send you a link to get back into your account.
          </p>
        </div>

        <form className="space-y-4 text-left">
          <Input
            label="Mobile number or email address"
            placeholder="yourname@yahoo.com"
          />
          <Button type="submit">Continue</Button>
        </form>

        <div className="relative">
          <span className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </span>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400">or</span>
          </div>
        </div>

        
        <div className="text-sm text-gray-600 space-y-1">
          <Link href="/Signup" className="text-[#644FC1] hover:underline">
            Create an account
          </Link>
          <br />
          <Link href="/Signin" className="text-[#444444] hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
