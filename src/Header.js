export default function Header(props) {
  return (
    <header className="App-header">
      <nav>
        <label>
          Movie<i className="fas fa-film"></i>Info
        </label>
        <form className="nav-div" onSubmit={props.handleSubmit}>
          <input
            id="input"
            onKeyPress={props.handleKeyPress}
            type="text"
            placeholder="Quick Search"
            value={props.value}
            onChange={props.handleChange}
          />
        </form>
      </nav>
    </header>
  );
}
