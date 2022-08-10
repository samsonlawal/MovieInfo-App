import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <label>
            Movie<i class="fas fa-film"></i>Info
          </label>
          <div className="nav-div">
            <input type="text" placeholder="Quick Search" />
            <ul>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Watchlist</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <article>
        <h1>Get Quick Update on New Movies and TV Series Release</h1>
      </article> */}

      <section>
        <div className="card">
          <div className>
            <img
              className="poster"
              src="https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h2 className="title">1971</h2>
            <p className="type">Movie</p>
            <div className="movie-info">
              <p className="genre">Action</p>
              <p className="year">2022</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="poster"
            src="https://m.media-amazon.com/images/M/MV5BOTBhZGJjYjQtODRjOC00MWJhLTk1NTctZDJiM2JkMTY3MGNiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1181_.jpg"
            alt=""
          />
          <div className="info">
            <h2 className="title">Bullet Train</h2>
            <p className="type">Movie</p>
            <div className="movie-info">
              <p className="genre">Action</p>
              <p className="year">2022</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="poster"
            src="https://m.media-amazon.com/images/M/MV5BMThlNTk3YzMtOTZjMi00M2NiLTg1NTgtYThiYzE2MDFmMDUwXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX720_.jpg"
            alt=""
          />
          <div className="info">
            <h2 className="title">Teen Wolf</h2>
            <p className="type">Series</p>
            <div className="movie-info">
              <p className="genre">Action/Horror</p>
              <p className="year">2011 - 2017</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="poster"
            src="https://m.media-amazon.com/images/M/MV5BYmY5YmJiM2QtNjdhOC00NjRhLTgyNDEtYmM1NmJhNjc5NDE2XkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_FMjpg_UX810_.jpg"
            alt=""
          />
          <div className="info">
            <h2 className="title">Halo</h2>
            <p className="type">Series</p>
            <div className="movie-info">
              <p className="genre">Action/Sci-Fi</p>
              <p className="year">2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
