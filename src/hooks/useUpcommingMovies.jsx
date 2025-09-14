import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcommingMovies } from '../utils/moviesSlice';

export const useUpcommingMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getUpcommingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcommingMovies(json.results));
  }

  useEffect(() =>{
    getUpcommingMovies();
  },[]);
}