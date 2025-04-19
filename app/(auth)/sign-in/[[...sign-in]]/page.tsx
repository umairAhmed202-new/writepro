import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen flex-row-reverse"> {/* Added flex-row-reverse to flip the layout */}
      {/* Right side with background and text */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome Back to WritePro</h1>
          <p className="text-xl mb-4">
            Continue your writing journey with your professional companion.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ✍️ Access your saved content
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              🔓 Continue where you left off
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              🚀 Boost your productivity
            </li>
          </ul>
        </div>
      </div>

      {/* Left side with sign-in form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <SignIn 
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
          <div className="mt-4 mr-11 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}