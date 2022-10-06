export default function Footer(props) {
  return (
    <div className="footer-div">
      <button id="prev" className="prev">
        Prev
      </button>
      <button id="next" className="next" onClick={props.add}>
        Next
      </button>
    </div>
  );
}
