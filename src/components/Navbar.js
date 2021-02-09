import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import newsIcon from "../img/newspaper.png";
import "./Navbar.css";
import * as Sentry from "@sentry/react";
import { sentryError } from  './Helper'
import Creators from "../redux/reducers/SearchReducer";

function Navbar({ searchRequest, news }) {
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useState("");
  const history = useHistory();
  

  const handleInput = (e) => {
    if(e.target.value.match(/[^\w\s]/gi)){
      sentryError('this is component', 'user search')
      alert("Kolom pencarian tidak bisa diisi dengan simbol");
    }

    setValue(e.target.value.replace(/[^\w\s]/gi, ""));
    setKeyword(value);
  };

  // console.log(/[^\w\s]/gi)

  const handleClick = (e) => {
    e.preventDefault();
    searchRequest(keyword);
    history.push("/search");
  };

  let categories = "Sports Entertainment Business Technology Science".split(
    " "
  );

  return (
    <Sentry.ErrorBoundary fallback={sentryError}>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          data-test="navbar-component"
        >
          <Link
            to="/"
            className="navbar-brand d-flex justify-content-center align-items-center"
          >
            <img src={newsIcon} alt="" />
            <h4>NewsApp</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  All News <span className="sr-only">(current)</span>
                </a>
              </li>
              {categories.map((category) => (
                <li className="nav-item" key={category}>
                  <Link
                    className="nav-link"
                    to={`/category/${category.toLowerCase()}`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Cari Berita"
                aria-label="Search"
                value={value}
                onChange={handleInput}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={(e) => handleClick(e)}
              >
                Cari
              </button>
            </form>
          </div>
        </nav>
      </div>
    </Sentry.ErrorBoundary>
  );
}

const stateProps = (initialState) => {
  return {
    news: initialState.search.data,
  };
};

const dispatchProps = (dispatch) => {
  return {
    searchRequest: (keyword) => dispatch(Creators.searchRequest(keyword)),
  };
};

export default connect(stateProps, dispatchProps)(Navbar);
