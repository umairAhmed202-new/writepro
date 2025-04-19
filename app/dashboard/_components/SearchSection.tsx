import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-5 sm:p-8 md:p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Browse All Templates</h2>
      <p className="text-sm sm:text-base md:text-lg text-center mt-1 sm:mt-2">
        What would you like to create today?
      </p>
      <div className="w-full flex justify-center mt-3 sm:mt-4 md:mt-5">
        <div className="flex gap-2 items-center p-2 sm:p-3 border border-gray-200 rounded-full bg-white w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-[50%] shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-transform duration-300 hover:rotate-12" />
          <input
            type="text"
            placeholder="Search templates..."
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-primary text-sm sm:text-base placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchSection