import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import { IMG_CDN, PlayIcon } from '../utils/constants';

const GptMovieSuggestion = () => {
  const movies = useSelector((store) => store.gpt.movieResults);
  
  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center mt-20 text-gray-400 text-lg">
        No results found. Try searching for a movie.
      </div>
    );
  }

   return (
    <div className="relative h-screen px-6 py-10 overflow-y-auto">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Top Search Results
      </h1>

      {/* Results Grid - 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto scrollbar-hide">
        {movies.map((movie) => (  
          <div
            key={movie.id}
            className="flex bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Poster */}
            {movie.poster_path && (
              <img
                src={IMG_CDN + movie.poster_path}
                alt={movie.title}
                className="w-28 md:w-40 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-lg md:text-xl font-bold text-white">
                {movie.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base line-clamp-3 mt-2">
                {movie.overview || "No description available."}
              </p>
              <button className="mt-3 flex items-center bg-[#E50914] text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition self-start">
                <PlayIcon className="w-5 h-5 mr-2" />
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestion