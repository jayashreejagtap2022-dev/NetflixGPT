import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
 
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  if (!trailerVideo) {
    return null; // or show a loader
  }

  return (
    <div className="w-full h-[80vh] relative overflow-hidden">
      <iframe
        className="w-full h-full absolute top-0 left-0"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Gradient Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
    </div>
  )
}

export default VideoBackground;