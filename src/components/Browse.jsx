import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Calling Api and storing
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* Main Video Section */}
      <MainContainer />

      {/* Seccond part all movies category */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
