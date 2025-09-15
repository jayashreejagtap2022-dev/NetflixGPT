import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { BackArrow, NextArrow } from '../utils/constants';

const MovieList = ({title, movies}) => {
   const rowRef = useRef();

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 py-4 relative">
      {/* Row Title */}
      <h1 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h1>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
        <BackArrow />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
          <NextArrow />
      </button>

      {/* Posters in a scrollable row */}
      <div
        ref={rowRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-88">
            <MovieCard posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;