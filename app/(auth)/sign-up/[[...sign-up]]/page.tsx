import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Left side with background and text */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome to WritePro</h1>
          <p className="text-xl mb-4">
          Your professional writing companion for creating exceptional content.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ✍️ AI-powered writing assistance
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              🔓 Access premium content
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              🚀 Boost productivity
            </li>
          </ul>
        </div>
      </div>

      {/* Right side with sign-up form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <SignUp 
            appearance={{
              elements: {
                footer: {
                  display: "none"
                },
                footerActionText: {
                  display: "none"
                },
                footerActionLink: {
                  display: "none"
                },
                formButtonPrimary: {
                  backgroundColor: "#4f46e5",
                  "&:hover": {
                    backgroundColor: "#4338ca"
                  }
                }
              }
            }}
          />
          <div className="mt-4 mr-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}