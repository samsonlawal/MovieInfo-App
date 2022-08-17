export default function Cards(props) {
  return (
    <div className="card">
      <div>
        <img className="poster" src={props.posterPath} alt="" />
      </div>
      <div className="info">
        <h2 className="title">{props.movieTitle}</h2>
        <p className="type">{props.date}</p>
      </div>
    </div>
  );
}
