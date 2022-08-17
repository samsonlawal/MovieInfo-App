import "./index.css";
import React from "react";
import Header from "./Header";
import Cards from "./Cards";

function App() {
  // const [moviesData, setMoviesData] = React.useState({});

  const [movieData, setMovieData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  }, [movieData.id]);

  let poster = `https://www.themoviedb.org/t/p/w500/`;

  const all = movieData.map((item) => {
    return (
      <Cards
        movieTitle={item.original_title}
        date={item.release_date.slice(0, 4)}
        posterPath={`${poster}${item.poster_path}`}
        id={item.id}
        key={item.id}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <section>{all}</section>
      {/* <Cards
        movieTitle={movieData.original_title}
        posterPath={poster}
        date={date.slice(0, 4)}
      /> */}
    </div>
  );
}

export default App;

{
  /* <article>
        <h1>Get Quick Update on New Movies and TV Series Release</h1>
      </article> */
}
