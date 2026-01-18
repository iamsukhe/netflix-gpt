import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // TODO: Add Shimmer
  if (!movies) return;

  const mainMovie = movies[0];

  const { id, original_title, overview } = mainMovie;

  return (
    <div className="relative bg-black pt-0 md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
