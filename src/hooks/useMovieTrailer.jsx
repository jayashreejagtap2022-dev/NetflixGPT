import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      // Find "Official Trailer" if possible
      let trailer =
        json.results.find(
          (video) =>
            video.type === "Trailer" &&
            video.name.toLowerCase().includes("official trailer")
        ) || json.results.find((video) => video.type === "Trailer");

      if (!trailer && json.results.length > 0) {
        trailer = json.results[0];
      }

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (err) {
      console.error("Error fetching trailer:", err);
    }
  };

  useEffect(() => {
    if (movieId && !trailerVideo) {
      getMovieVideos();
    }
  }, [movieId, trailerVideo]);
};

export default useMovieTrailer;
