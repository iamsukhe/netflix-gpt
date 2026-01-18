import { IMG_URL } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} path={IMG_URL + movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
