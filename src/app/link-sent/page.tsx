"use client";

import Image from "next/image";

export default function LinkSentPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center space-y-6">
      <div className="flex justify-center">
        <div className="relative w-40 h-40">
          <Image
            src="/done.png"
            alt="link sent illustration"
            width={150}
            height={150}
          />
        </div>
      </div>

      <h1 className="text-xl font-semibold text-[#644FC1]">
        Your link is being sent. Hang tight!
      </h1>

      <p className="text-[#959595] text-sm">
        we’ve sent the link to
        <span className="font-medium text-[#2D2D2D]">
          shahbazi.n1.design@gmail.com
        </span>
      </p>

      <a
        href="#"
        className="text-[#644FC1] hover:underline text-sm font-medium"
      >
        Go to your mail
      </a>

      <p className="text-xs text-[#959595] max-w-sm">
        You will be redirected from the link in the email, you can safely close
        the tab.
      </p>
    </div>
  );
}
