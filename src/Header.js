export default function Header(props) {
  return (
    <header className="App-header">
      <nav>
        <label>
          Movie<i className="fas fa-film"></i>Info
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
            />
          </form>

          <ul>
            <li>
              <p onClick={props.handleClick}>Trending</p>
            </li>
            {/* <li>
              <p onClick={props.HandleClick}>Watchlist</p>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
