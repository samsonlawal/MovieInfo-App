import "./index.css";
import React from "react";
import Header from "./Header";
import Cards from "./Cards";
// import Popup from "./Popup";
import Footer from "./Footer";

function App() {
  //Page Number
  const [count, setCount] = React.useState(1);
  function add() {
    setCount((prevCount) => (prevCount += 1));
    console.log(tvAPI);
  }

  // State for the movie info
  const [movieData, setMovieData] = React.useState([]);

  // Managing the 'side effects' of fetching and saving the fetched info in the movieData state.
  React.useEffect(() => {
    fetch(
      trendingAPI
      // "https://api.themoviedb.org/3/movie/now_playing?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  }, []);

  // Getting the first half of poster link
  let poster = `https://www.themoviedb.org/t/p/w500/`;

  // mapping over the array of objects containing movie info
  const MovieCard = movieData.map((item) => {
    return (
      <Cards
        movieTitle={item.title || item.original_name || item.original_title}
        date={item.release_date || item.first_air_date || "Null"}
        posterPath={
          item.poster_path
            ? `${poster}${item.poster_path}`
            : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
        }
        id={item.id}
        key={item.id}
        overview={item.overview}
      />
    );
  });

  // State for the input value
  const [movieSearch, setMovieSearch] = React.useState("");

  // API url for the search
  const searchAPI = `https://api.themoviedb.org/3/search/multi?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&query=${movieSearch}&page=1&include_adult=false`;

  // Fetching results on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(searchAPI)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  };

  // Saving the search input in state
  const handleChange = (event) => {
    setMovieSearch(event.target.value);
  };

  // TRENDING
  const trendingAPI =
    "https://api.themoviedb.org/3/trending/all/week?api_key=812b448acde6be144d26b93a3e68cb8d";

  const trending = (event) => {
    event.preventDefault();

    fetch(trendingAPI)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  };

  //MOVIE
  const movieAPI =
    "https://api.themoviedb.org/3/movie/popular?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&page=1";
  const movie = (event) => {
    event.preventDefault();

    fetch(movieAPI)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  };

  const upcomingMovieAPI =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&page=1";
  const upcomingMovie = (event) => {
    event.preventDefault();

    fetch(upcomingMovieAPI)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  };

  // TV SHOWS
  const tvAPI = `https://api.themoviedb.org/3/tv/popular?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&page=${count}`;
  const tv = (event) => {
    event.preventDefault();

    fetch(tvAPI)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  };

  return (
    <div className="App">
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={movieSearch}
        trending={trending}
        movie={movie}
        upcomingMovie={upcomingMovie}
        tv={tv}
      />
      <section>{MovieCard}</section>
      <Footer add={add} />
    </div>
  );
}

export default App;

{
  /* <article>
        <h1>Get Quick Update on New Movies and TV Series Release</h1>
      </article> */
}
