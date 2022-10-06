export default function Header(props) {
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
            />
          </form>

          <ul>
            {/* <li>
              <p onClick={props.trending}>Trending</p>
            </li> */}
            <li>
              <p onClick={props.trending}>Home</p>
            </li>
            <li>
              <p onClick={props.movie}>Movies</p>
            </li>
            <li>
              <p onClick={props.tv}>TV Shows</p>
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
