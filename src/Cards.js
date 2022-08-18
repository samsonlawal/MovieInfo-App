export default function Cards(props) {
  return (
    <div className="card">
      <div>
        <img className="poster" src={props.posterPath} alt="" />
      </div>
      <div className="info">
        <p className="title">{props.movieTitle}</p>
        <p className="type">{props.date}</p>
      </div>
    </div>
  );
}
