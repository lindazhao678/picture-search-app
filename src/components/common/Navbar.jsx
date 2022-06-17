import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { query, getQuery } = props;
  function changeWhite() {
    document.querySelector("body").style.backgroundColor = "white";
  }

  function changeBlack() {
    document.querySelector("body").style.backgroundColor = "black";
  }
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid row">
          <h1 className="navbar-brand text-center m-0 col-3">Picture Search App</h1>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={query}
              onChange={(e) => getQuery(e.target.value)}
            />
          </div>
          <ul className="navbar-nav col-3 justify-content-center text-black">
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
              className="btn btn-dark btn-sm border me-5"
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
