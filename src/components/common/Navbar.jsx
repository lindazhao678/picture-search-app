import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { query, getQuery } = props;
  function changeWhite() {
    document.querySelector("body").style.backgroundColor = "transparent";
  }

  function changeBlack() {
    document.querySelector("body").style.backgroundColor = "#4b5563";
  }
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid row">
          <a href= "/" className="navbar-brand text-center m-0  col-12 col-lg-3">Picture Search App</a>
          <div className="col-12 col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={query}
              onChange={(e) => getQuery(e.target.value)}
            />
          </div>
          <ul className="navbar-nav flex-row col-3 ms-3 justify-content-center text-black">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="col-3 d-flex justify-content-center">
            <button
              className="btn btn-secondary btn-sm border me-3"
              onClick={() => {
                changeWhite();
              }}
            >
              Light
            </button>
            <button
              className="btn btn-dark btn-sm border"
              onClick={() => {
                changeBlack();
              }}
            >
              Dark
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Navbar;
