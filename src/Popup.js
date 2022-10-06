export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <img
          src={props.posterpath}
          alt={props.movietitle}
          className="popup-img"
        />
        <p>{props.movietitle}</p>
      </div>
    </div>
  ) : (
    ""
  );
}
