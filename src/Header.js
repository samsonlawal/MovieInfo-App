import React from "react";

export default function Navbar(props) {
  return (
    <header className="App-header" id="header">
      <nav id="nav">
        {/* <i className="fas fa-film"></i> */}
        <label onClick={props.trending}>
          Movie<span className="span">Info</span>
        </label>
        <div className="nav-div">
          <form onSubmit={props.handleSubmit}>
            <input
              id="input"
              autoComplete="on"
              onKeyPress={props.handleKeyPress}
              type="text"
              placeholder="Quick Search"
              value={props.value}
              onChange={props.handleChange}
              ref={props.inputRef}
            />
            {/* <i className="fa-solid fa-sun mode-icon"></i> */}
            <i class="fa-solid fa-moon mode-icon" onClick={props.lightMode}></i>
          </form>

          <ul>
            <li>
              <p class="nav-link" id="home" onClick={props.trending}>
                Trending
              </p>
            </li>
            <li>
              <p class="nav-link" id="movie" onClick={props.movie}>
                Movies
              </p>
            </li>
            <li>
              <p class="nav-link" id="tv" onClick={props.tv}>
                TV Shows
              </p>
            </li>
            <li>
              <p class="nav-link" onClick={props.handleClick}>
                Bookmarks
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
