import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { query, getQuery } = props;

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Pixel App</span>

          <ul className="navbar-nav ml-auto text-black">
            <li className="nav-item">
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
        </div>
      </nav>
      <div className="m-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          defaultValue={query}
          onChange={(e) => getQuery(e.target.value)}
        />
      </div>
    </Fragment>
  );
}
export default Navbar;
