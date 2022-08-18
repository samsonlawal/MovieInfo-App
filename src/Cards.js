export default function Cards(props) {
  return (
    <div className="card">
      <div>
        <img className="poster" src={props.posterPath} alt={props.movieTitle} />
      </div>
      <div className="info">
        <p className="title">{props.movieTitle}</p>
        <p className="type">{props.date.substr(0, 4)}</p>
      </div>
    </div>
  );
}
