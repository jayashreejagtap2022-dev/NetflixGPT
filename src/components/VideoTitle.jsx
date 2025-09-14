import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute top-1/3 left-8 md:left-16 text-white z-20 max-w-xl">
      {/* Movie Title */}
      <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow-lg">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-4 text-sm md:text-lg font-medium text-gray-200 drop-shadow-md line-clamp-3">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        {/* Play Button */}
  <button className="flex items-center bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-md font-bold hover:bg-gray-200 transition">
    {/* Play SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-black"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 2v20l18-10L4 2z" />
    </svg>
    <span className="ml-2">Play</span>
  </button>
        <button className="bg-gray-700/80 text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-bold hover:bg-gray-600 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle