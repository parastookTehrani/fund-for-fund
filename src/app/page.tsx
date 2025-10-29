import Image from "next/image";
import Button from "./components/shared/button";
import Footer from "./HomePage/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center space-y-8">
          <div className="max-w-2xl space-y-2">
            <h1 className="text-[#644FC1] font-semibold text-lg text-start md:text-center">
              Create your profile and take the first step towards new
              opportunities
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed text-start md:text-center">
              By creating your account, you’ll gain access to a thriving
              community where brands and individuals are committed to offering
              you ongoing support. This support network will empower you with
              the resources, guidance, and connections you need to succeed,
              ensuring that you’re never alone on your journey.
            </p>
          </div>

          <div className="border border-gray-300 rounded-lg p-8 w-full max-w-sm flex flex-col items-center justify-center space-y-4 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center space-y-4">
              <div>
                <Image width={80} height={50} src="/brand.png" alt="brand" />
              </div>
              <div>
                <h3 className="font-medium text-[#644FC1]">
                  Brand or organization
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  If your brand is established and you’re looking to access
                  consistent support, get started now.
                </p>
              </div>
            </div>

            <Button>Start</Button>
            <a href="#" className="text-[#8D75F7] text-sm hover:underline">
              Learn more
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
