import "./index.css";
import React from "react";
import Header from "./Header";
import Cards from "./Cards";
// import Popup from "./Popup";
import Footer from "./Footer";
import { useRef } from "react";
import MovieInfo from "./MovieInfo";

function App() {
  // State for the movie info
  const [movieData, setMovieData] = React.useState({
    API: "",
    movies: [],
    totalPages: "",
    currentPage: 1,
    totalResults: 0,
    currentMovie: null,
  });

  const trendingAPI = `https://api.themoviedb.org/3/trending/all/week?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US`;
  const popularMovieAPI =
    "https://api.themoviedb.org/3/movie/popular?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US";
  const tvAPI = `https://api.themoviedb.org/3/tv/popular?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US`;

  var currentAPI = movieData.API;

  const inputRef = useRef(null);

  // Managing the 'side effects' of fetching and saving the fetched info in the movieData state.
  React.useEffect(() => {
    fetch(trendingAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovieData({
          API: trendingAPI,
          movies: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
          totalResults: data.total_results,
        });
      });
  }, []);

  const numberOfPages = movieData.totalPages;

  // Getting the first half of poster link
  let poster = `https://www.themoviedb.org/t/p/w500/`;

  // mapping over the array of objects containing movie info
  const MovieCard = movieData.movies.map((item) => {
    return (
      <Cards
        movieTitle={
          item.name || item.title || item.original_name || item.original_title
        }
        date={item.release_date || item.first_air_date || "Null"}
        posterPath={
          item.poster_path
            ? `${poster}${item.poster_path}`
            : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
        }
        id={item.id}
        key={item.id}
        overview={item.overview}
        movieclick={movieClick}
      />
    );
  });

  // State for the input value
  const [movieSearch, setMovieSearch] = React.useState("");

  // API url for the search
  const searchAPI = `https://api.themoviedb.org/3/search/multi?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&query=${movieSearch}&include_adult=false`;

  // Fetching results on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(searchAPI)
      .then((res) => res.json())
      .then((data) =>
        setMovieData({
          API: searchAPI,
          movies: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
          totalResults: data.total_results,
        })
      );
  };

  // Saving the search input in state
  const handleChange = (event) => {
    setMovieSearch(event.target.value);
  };

  // TRENDING
  const trending = (event) => {
    event.preventDefault();

    fetch(trendingAPI)
      .then((res) => res.json())
      .then((data) =>
        setMovieData({
          API: trendingAPI,
          movies: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
          totalResults: data.total_results,
        })
      );
  };

  //MOVIE
  const movie = (event) => {
    event.preventDefault();

    fetch(popularMovieAPI)
      .then((res) => res.json())
      .then((data) =>
        setMovieData({
          API: popularMovieAPI,
          movies: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
          totalResults: data.total_results,
        })
      );
  };

  // const upcomingMovieAPI =
  //   "https://api.themoviedb.org/3/movie/upcoming?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&page=1";
  // const upcomingMovie = (event) => {
  //   event.preventDefault();

  //   fetch(upcomingMovieAPI)
  //     .then((res) => res.json())
  //     .then((data) => setMovieData(data.results));
  // };

  // TV SHOWS
  const tv = (event) => {
    event.preventDefault();

    currentAPI = tvAPI;

    fetch(tvAPI)
      .then((res) => res.json())
      .then((data) =>
        setMovieData({
          API: tvAPI,
          movies: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
          totalResults: data.total_results,
        })
      );
  };

  let nextPage = (pageNumber) => {
    document.documentElement.scrollTop = 0;

    // console.log(`${currentAPI}&page=${pageNumber}`);

    fetch(`${currentAPI}&page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData({
          API: currentAPI,
          movies: data.results,
          currentPage: pageNumber,
          totalPages: data.total_pages,
        });
      });
  };

  var home = document.getElementById("home");
  var movieElem = document.getElementById("movie");
  var tvElem = document.getElementById("tv");
  var seacrhBar = document.getElementById("input");

  if (currentAPI === trendingAPI) {
    home.classList.add("active");
    tvElem.classList.remove("active");
    movieElem.classList.remove("active");
  } else if (currentAPI === tvAPI) {
    tvElem.classList.add("active");
    home.classList.remove("active");
    movieElem.classList.remove("active");
  } else if (currentAPI === popularMovieAPI) {
    movieElem.classList.add("active");
    home.classList.remove("active");
    tvElem.classList.remove("active");
  } else if (currentAPI === searchAPI) {
    movieElem.classList.remove("active");
    home.classList.remove("active");
    tvElem.classList.remove("active");
    seacrhBar.classList.add("active-bar");
  }

  // MOVIE-INFO
  function movieClick(id) {
    const filtered = movieData.movies.filter((item) => item.id === id);
    console.log(
      filtered[0].title ||
        filtered[0].original_title ||
        filtered[0].original_name
    );

    const newCurrentMovie = filtered.length > 0 ? filtered[0] : null;

    setMovieData({ ...movieData, currentMovie: filtered[0] });
  }

  function closeInfo() {
    setMovieData({ ...movieData, currentMovie: null });
  }

  return (
    <div className="App">
      {/* <h1 className="topTitle">Trending</h1> */}
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={movieSearch}
        trending={trending}
        movie={movie}
        // upcomingMovie={upcomingMovie}
        tv={tv}
        inputRef={inputRef}
      />
      {movieData.currentMovie == null ? (
        <>
          <section>{MovieCard}</section>
          <Footer
            numberOfPages={numberOfPages}
            nextPage={nextPage}
            currentPage={movieData.currentPage}
          />
        </>
      ) : (
        <MovieInfo
          closeInfo={closeInfo}
          movie={movieData.currentMovie}
          poster={poster}
        />
      )}
    </div>
  );
}

export default App;
