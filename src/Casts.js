import React from "react";
import poster from "./poster.jpg";

export default function Casts(props) {
  let light = props.lightMode ? "light" : "";

  return (
    <div className="cast">
      <div className="img-div">
        <img
          src={props.castPath ? `${props.backdrop}${props.castPath}` : poster}
          // alt={props.casts[0].name}
          className="cast-image"
          loading="lazy"
        />
      </div>
      <div className="cast-name">
        <b>
          <p className={light}>{props.castName}</p>
        </b>
        <p className={light}>
          {props.character.split("/ ")[1] || props.character}
        </p>
      </div>
    </div>
  );
}
