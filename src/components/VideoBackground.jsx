import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(id);

  if (!trailer) return null;

  return (
    <div className="w-screen aspect-video overflow-hidden">
      <iframe
        // scale-150 or scale-125 helps remove black bars by zooming in slightly
        className="w-screen aspect-video scale-150"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
