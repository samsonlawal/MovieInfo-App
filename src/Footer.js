import React from "react";

export default function Footer(props) {
  let light = props.lightMode ? "light" : "";

  for (let i = 1; i <= props.pages + 1; i++) {
    // let active = props.currentPage == i ? "active" : "";
    // pagelink.push(
    //   <li
    //     className={`${active}`}
    //     key={i}
    //     onClick={() => {
    //       props.nextPage(props.currentPage);
    //     }}
    //   >
    //     <a href="#">{i}</a>
    //   </li>
    // );
  }

  return (
    <div className={`footer-div ${light}`}>
      {props.API === "bookmark" ? (
        ""
      ) : (
        <div className="btns">
          {props.currentPage > 1 ? (
            <button
              className="prevPage"
              onClick={() => {
                props.nextPage(props.currentPage - 1);
              }}
            >
              Prev
            </button>
          ) : (
            ""
          )}

          <button
            id="currentPage"
            onClick={() => {
              // props.nextPage(props.currentPage - 1);
            }}
          >
            Page {props.currentPage}
          </button>

          {props.currentPage < props.numberOfPages ? (
            <button
              className="nextPage"
              onClick={() => {
                props.nextPage(props.currentPage + 1);
              }}
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      )}
      <p className="copyright">
        copyright © 2021{" "}
        <a href="https://www.twitter.com/samsonlawal_" target="blank_">
          Samson
        </a>
        .
      </p>
    </div>
  );
  /* <article>
        <h1>Get Quick Update on New Movies and TV Series Release</h1>
      </article> */
}
