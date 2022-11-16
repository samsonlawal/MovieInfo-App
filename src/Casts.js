import React from "react";

export default function Casts(props) {
  let light = props.lightMode ? "light" : "";

  return (
    <div className="cast">
      <div className="img-div">
        <img
          src={
            props.castPath
              ? `${props.backdrop}${props.castPath}`
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            // "./avatar.webp"
          }
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
