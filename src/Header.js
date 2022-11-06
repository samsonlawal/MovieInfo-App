import React from "react";
// className={`nav-div ${props.lightMode ? "light" : ""}`}
export default function Navbar(props) {
  let light = props.lightMode ? "light" : "";
  return (
    <header className="App-header" id="header">
      <nav id="nav" className={props.lightMode ? "light" : ""}>
        {/* <i className="fas fa-film"></i> */}
        <label onClick={props.trending}>
          Movie<span className={props.lightMode ? "light" : ""}>Info</span>
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
              className={props.lightMode ? "light" : ""}
            />
            {/* <i className="fa-solid fa-sun mode-icon"></i> */}
            <i
              className={`fa-solid fa-moon mode-icon ${light}`}
              onClick={props.toggleLightMode}
            ></i>
          </form>

          <ul>
            <li>
              <p class={`nav-link ${light}`} id="home" onClick={props.trending}>
                Trending
              </p>
            </li>
            <li>
              <p class={`nav-link ${light}`} id="movie" onClick={props.movie}>
                Movies
              </p>
            </li>
            <li>
              <p class={`nav-link ${light}`} id="tv" onClick={props.tv}>
                TV Shows
              </p>
            </li>
            <li>
              <p class={`nav-link ${light}`} onClick={props.handleClick}>
                Bookmarks
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
