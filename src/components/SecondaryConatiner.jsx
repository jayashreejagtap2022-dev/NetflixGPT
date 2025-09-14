import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    <div className='-mt-52 bg-gradient-to-t from-black via-gray-900 to-transparent'>
      <div className="bg-black bg-opacity-90 px-6 py-5 space-y-10">
        <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcommingMovies} />
      </div>
    </div>
  )
}

export default SecondaryConatiner;