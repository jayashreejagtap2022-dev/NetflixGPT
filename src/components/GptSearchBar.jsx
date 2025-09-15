import { useDispatch } from 'react-redux';
import React, { useRef } from 'react'
import { searchMovies } from '../utils/searchMovies';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const res = await searchMovies(searchText.current.value, dispatch);
    console.log(res);
  };

  return (
    <div className="mt-20 p-10 z-10 relative">
        <form className="flex items-center w-full max-w-2xl mx-auto mt-10 px-4 py-2 bg-white rounded-full shadow-md" onSubmit={(e) => e.preventDefault}>
            {/* Input Box */}
            <input
            ref={searchText}
            name="searchText"
            type="text"
            placeholder="Search movies..."
            className="flex-1 px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none rounded-l-full"
            />

            {/* Search Button */}
            <button
            type="button"
            className="px-6 py-2 bg-[#E50914] text-white font-semibold rounded-full hover:bg-red-700 transition"
            onClick={handleGptSearchClick}
            >
            Search
            </button>
        </form>
        </div>

  )
}

export default GptSearchBar;