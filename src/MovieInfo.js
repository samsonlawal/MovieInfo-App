import React from "react";
import { useState } from "react";
import Moadal from "./Modal";
import Casts from "./Casts";
import "./Overview.css";
import avatar from "./avatar.webp";

export default function MovieInfo(props) {
  const [loadMore, setLoadMore] = useState(8);
  let totalmapped = props.casts.length;

  const BtnMore = () => {
    if (document.getElementById("show-more").textContent == "Show More") {
      setLoadMore(totalmapped);
      document.getElementById("show-more").innerHTML = "Show Less";
    } else if (
      document.getElementById("show-more").textContent.includes("Show Less")
    ) {
      setLoadMore(8);
      document.getElementById("show-more").innerHTML = "Show More";
    }
  };

  let backdrop = "https://image.tmdb.org/t/p/original/";
  let backdrop_path = props.movie.backdrop_path;
  let runTime = `${props.movie.runtime || props.movie.episode_run_time}min`;
  let releaseDate = `${
    props.movie.release_date || props.movie.first_air_date || "Null"
  }`;
  let rawRating = props.movie.vote_average;
  let rating = rawRating.toString().substr(0, 3);
  // Genres
  let genres = props.movie.genres;
  let status = props.movie.status;
  let array = [];
  for (let i = 0; i < genres.length; i++) {
    array.push(genres[i].name.replace(" &", " •"));
  }
  let genre = array.join(" • ");
  let mediaType;
  if (props.movie.hasOwnProperty("episode_run_time")) {
    mediaType = "tv";
  } else {
    mediaType = "movie";
  }

  // GET TRAILER
  let results;
  let key = "";
  const trailerAPI = `https://api.themoviedb.org/3/${mediaType}/${props.movie.id}/videos?api_key=812b448acde6be144d26b93a3e68cb8d&language=en-US`;

  results = props.videos;
  for (let i = 0; i < results.length; i++) {
    let type = results[i].type;
    let name = results[i].name;
    let official = results[i].official;

    if (
      // results[i].name == "Official Trailer" ||
      // results[i].name == "Season 1 Official Trailer"
      type == "Trailer" &&
      official == true
    ) {
      results = results[i].key;
      // .replace(/[^a-zA-Z ]/g, "")
    }
  }
  key = results;
  let trailer;

  trailer = `https://www.youtube.com/embed/${key}`;
  let blank = " ";
  function closeTrailer() {
    // let url = document.getElementById("video").getAttribute("src");
    // url = blank;

    var iframe = document.getElementById("video");
    iframe.src = iframe.src;
  }

  console.log(trailer);
  console.log(props.movie);

  const castCard = props.casts.slice(0, loadMore).map((item) => {
    return (
      // item.profile_path ? (
      <Casts
        castPath={item.profile_path}
        id={item.id}
        key={item.id}
        backdrop="https://image.tmdb.org/t/p/original/"
        castName={item.name}
        character={item.character}
      />
    );
  });

  // function showMore() {
  //   props.sliced = totalmapped;
  // }

  return (
    <div className="container">
      <div
        className="overview-top"
        style={{ backgroundImage: `url(${backdrop}${backdrop_path})` }}
      >
        <div className="overview-image-overlay"></div>
        <div className="overview-content-layer">
          {/* <i class="fa-solid fa-arrow-left"></i> */}
          <i
            onClick={props.closeInfo}
            id="back-button"
            className="fa-solid fa-arrow-left-long"
          ></i>
          <div className="overview-content">
            <p className="date">
              {status.toUpperCase()}({releaseDate.substr(0, 4)}) •{" "}
              {mediaType.toUpperCase()} • {runTime} •{" "}
              <i className="fa-solid fa-star rating-star"></i> {rating}
            </p>
            <h3 className="overview-title">
              {props.movie.name ||
                props.movie.title ||
                props.movie.original_name ||
                props.movie.original_title}
            </h3>
            <p className="overview-overview">{props.movie.overview}</p>
            <p className="genre">{genre}</p>
            <a href="#demo-modal">
              {/* {trailer} target="_blank" */}
              <button className="trailer">
                Watch Trailer<i className="fa-solid fa-circle-play"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <iframe
            width="700"
            height="500"
            src={trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="video"
          ></iframe>
          <a href="#" className="modal__close" onClick={closeTrailer}>
            ×
          </a>
        </div>
      </div>

      <div className="director-casts">
        <h3 className="casts-title">Casts</h3>
        <div className="casts">
          {castCard}{" "}
          <button className="show-more" id="show-more" onClick={BtnMore}>
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
