import React from "react";

export default function Cards(props) {
  let light = props.lightMode ? "light" : "";

  return (
    <div className="card">
      <div
        className="poster-div"
        onClick={() => {
          props.movieclick(props.id);
        }}
      >
        <img
          className="poster-div__img"
          src={props.posterPath}
          alt={props.movieTitle}
        />
        <div className="poster-div__overlay">
          {/* <button>See Details</button> */}
        </div>
      </div>
      <div className="info">
        <p
          className={`title ${light}`}
          onClick={() => props.movieclick(props.id)}
        >
          {props.movieTitle}
        </p>
        {/* <p>{props.id}</p> */}
        <p className="date">{props.date.substr(0, 4)}</p>
      </div>
    </div>
  );
}
