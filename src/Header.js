import React from "react";

export default function Navbar(props) {
  return (
    <header className="App-header">
      <nav>
        {/* <i className="fas fa-film"></i> */}
        <label onClick={props.trending}>
          Movie<span>Info</span>
        </label>
        <div className="nav-div">
          <form onSubmit={props.handleSubmit}>
            <input
              id="input"
              onKeyPress={props.handleKeyPress}
              type="text"
              placeholder="Quick Search"
              value={props.value}
              onChange={props.handleChange}
              ref={props.inputRef}
            />

            <i className="fa-solid fa-sun mode-icon"></i>
          </form>

          <ul>
            <li>
              <p id="home" onClick={props.trending}>
                Trending
              </p>
            </li>
            <li>
              <p id="movie" onClick={props.movie}>
                Movies
              </p>
            </li>
            <li>
              <p id="tv" onClick={props.tv}>
                TV Shows
              </p>
            </li>
            <li>
              <p onClick={props.handleClick}>Bookmarks</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
