import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="mt-20">
        <form className="flex items-center w-full max-w-2xl mx-auto mt-10 px-4 py-2 bg-white rounded-full shadow-md">
            {/* Input Box */}
            <input
            type="text"
            placeholder="Search movies..."
            className="flex-1 px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none rounded-l-full"
            />

            {/* Search Button */}
            <button
            type="submit"
            className="px-6 py-2 bg-[#E50914] text-white font-semibold rounded-full hover:bg-red-700 transition"
            >
            Search
            </button>
        </form>
        </div>

  )
}

export default GptSearchBar