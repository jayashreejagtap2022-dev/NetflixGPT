import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useEffect } from "react";

export const useSearchMovies = ({query}) =>{
    const dispatch = useDispatch();
    const movieResults = useSelector((store)=>store.gpt.movieResults);

    const getSearchResultForMovies = async () =>{
       const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addGptMovieResult(json.results));
    }

    useEffect(() =>{
        if(!movieResults) getSearchResultForMovies();
    },[]);

}