import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (   
    <div className="w-40 md:w-48 lg:w-52 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform cursor-pointer">
     <img
        src={IMG_CDN+posterPath} 
        alt="poster"
        className="w-full h-auto object-cover"
      />
    </div>
  )
}

export default MovieCard;