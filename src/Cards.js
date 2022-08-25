export default function Cards(props) {
  return (
    <div className="card">
      <div className="poster-div">
        <img
          className="poster-div__img"
          src={props.posterPath}
          alt={props.movieTitle}
        />
        <div className="poster-div__overlay">
          <button>See Details</button>
        </div>
      </div>
      <div className="info">
        <p className="title">{props.movieTitle}</p>
        <p className="date">{props.date.substr(0, 4)}</p>
      </div>
    </div>
  );
}
