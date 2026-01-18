import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // TODO: Add Shimmer
  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-12">
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList
          title={"Upcoming Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
