"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen text-gray-900 dark:text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image 
                  src="/logo.svg"
                  alt="logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link 
                  href="/features" 
                  className={`font-medium ${pathname === '/features' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className={`font-medium ${pathname === '/pricing' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  Pricing
                </Link>
                <Link 
                  href="/about" 
                  className={`font-medium ${pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  About
                </Link>
                <Link href="/dashboard" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                href="/features" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/features' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} hover:bg-gray-50 dark:hover:bg-neutral-700`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/pricing' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} hover:bg-gray-50 dark:hover:bg-neutral-700`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} hover:bg-gray-50 dark:hover:bg-neutral-700`} 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link href="/dashboard" className="block w-full px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-center" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>
{/* Main Content */}
<main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4 ">
              About <span className="text-blue-600">WritePro</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              WritePro is your intelligent writing companion built for creators, professionals, and teams who want to write faster, clearer, and smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Person writing with laptop"
                width={500}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Why We Built WritePro</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                We believe that writing should be effortless. Whether you're drafting emails, essays, blogs, or business proposals, WritePro uses powerful AI to help you write with clarity and confidence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                We’re not just a tool. We’re a partner in your creative journey—equipping you with smart suggestions, intuitive formatting, and beautiful templates to elevate your work.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                Our mission is to make professional-quality writing accessible to everyone, everywhere.
              </p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-4">What Makes WritePro Awesome?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left">
              {[
                "AI-powered writing suggestions and rewrites",
                "One-click formatting for APA, MLA, Chicago, and more",
                "500+ professional templates",
                "Real-time cloud sync and version history",
                "Privacy-focused, secure infrastructure",
                "Beautiful interface for effortless editing"
              ].map((item, idx) => (
                <li key={idx} className="bg-blue-50 dark:bg-neutral-800/60 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-neutral-700">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Writers</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              From students to CEOs, content creators to legal teams—WritePro empowers people to express their ideas brilliantly.
            </p>
            <Link 
              href="/dashboard"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition"
            >
              Try WritePro Free
            </Link>
          </div>
        </div>
      </main>

       {/* Footer */}
       <footer className="bg-gray-50 dark:bg-neutral-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li><Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link></li>
                <li><Link href="/templates" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
                <li><Link href="/guides" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Guides</Link></li>
                <li><Link href="/support" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
                <li><Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Terms</Link></li>
                <li><Link href="/cookies" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} WritePro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
    <span className="sr-only">Facebook</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  </Link>
  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
    <span className="sr-only">Twitter</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  </Link>
  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
    <span className="sr-only">Instagram</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  </Link>
  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
    <span className="sr-only">LinkedIn</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  </Link>
  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
    <span className="sr-only">GitHub</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  </Link>
  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
    <span className="sr-only">YouTube</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
    </svg>
  </Link>
</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
