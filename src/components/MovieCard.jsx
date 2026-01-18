const MovieCard = ({ path }) => {
  return (
    <div className="w-54 md:w-60 pr-4 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <img src={path} alt="movie image" />
    </div>
  );
};

export default MovieCard;
