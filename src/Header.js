export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <label>
          Movie<i className="fas fa-film"></i>Info
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
  );
}
