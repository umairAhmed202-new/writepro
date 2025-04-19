import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className="hidden md:flex relative p-5 shadow-2xl border-b-2 bg-white justify-end items-center overflow-hidden">
      {/* Animated Background Circle (Clockwise Spin) */}
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
        <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-25 blur-3xl animate-[spin_30s_linear_infinite]"></div>
      </div>

      {/* Animated Background Circle (Counterclockwise Spin) */}
      <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
        <div className="w-40 h-40 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-full opacity-25 blur-3xl animate-[spin_30s_linear_infinite] [animation-direction:reverse]"></div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-bounce" style={{ top: '10%', left: '30%' }}></span>
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-bounce" style={{ top: '50%', left: '70%' }}></span>
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-bounce" style={{ top: '80%', left: '40%' }}></span>
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-bounce" style={{ top: '30%', left: '80%' }}></span>
        </div>
      </div>

      {/* Glowing Halo and Interactive UserButton */}
      <div className="relative flex gap-5 items-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50 blur-2xl animate-pulse"></div>
        <div className="relative z-10 transition-transform duration-300 transform hover:scale-125">
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Header
