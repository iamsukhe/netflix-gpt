import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          API_OPTIONS,
        );

        const json = await response.json();

        const trailer = json.results?.find((video) => video.type === "Trailer");

        if (trailer) {
          dispatch(addTrailerVideo(trailer));
        }
      } catch (error) {
        console.error("Failed to fetch trailer", error);
      }
    };

    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
