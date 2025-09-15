import { API_OPTIONS } from "./constants";
import { addGptMovieResult } from "./gptSlice";

export const searchMovies = async (query, dispatch) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addGptMovieResult(json.results));
  return json.results;
};