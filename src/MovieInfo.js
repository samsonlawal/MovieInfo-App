import React from "react";
import "./Overview.css";

export default function MovieInfo(props) {
  let backdrop = "https://image.tmdb.org/t/p/original/";
  let backdrop_path = props.movie.backdrop_path;
  return (
    <div className="container">
      <div
        className="overview-top"
        style={{ backgroundImage: `url(${backdrop}${backdrop_path})` }}
      >
        <div className="overview-image-overlay"></div>
        <div className="overview-content-layer">
          <button onClick={props.closeInfo} id="back-button">
            <p>Back</p>
          </button>
          <div className="overview-content">
            <h3 className="overview-title">
              {props.movie.name ||
                props.movie.title ||
                props.movie.original_name ||
                props.movie.original_title}
            </h3>
            <p className="overiview-overview">{props.movie.overview}</p>
            <button className="trailer">
              Watch Trailer<i class="fa-solid fa-circle-play"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
