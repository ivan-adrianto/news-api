import React, { useEffect } from "react";
import { connect } from "react-redux";
import HeadlineTypes from "../redux/actions/HeadlinesTypes";
import "./Home.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Navbar from "./Navbar";

function HeadlineHome({ headlineRequest, isLoading, news }) {
  useEffect(() => {
    headlineRequest();
  }, []);
  let loadingMap = "123456789012".split("");
  return (
    <div>
      <Navbar />
      <div className="container">
        {isLoading ? (
          <div className="sk-circle">
            {loadingMap.map((spinner, index) => (
              <div
                key={index}
                className={`sk-circle${index + 1} sk-child`}
              ></div>
            ))}
          </div>
        ) : (
          <div>
            <AwesomeSlider>
              {news &&
                news.slice(0, 5).map((headline) => (
                  <div key={headline.url} className="carousel-inner">
                    <a href={headline.url} target="_blank" rel="noreferrer">
                      <img src={headline.urlToImage} alt={headline.title} />
                      <h5>{headline.title}</h5>
                    </a>
                  </div>
                ))}
            </AwesomeSlider>
            <div className="another-headlines">
              <h3>Berita Lainnya</h3>
              <div className="row">
                {news &&
                  news.slice(5, 19).map((headline) => (
                    <div key={headline.url} className="col-6 headline-small">
                      <a href={headline.url} target="_blank" rel="noreferrer">
                        <img src={headline.urlToImage} alt={headline.title} />
                        <h5>{headline.title}</h5>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const stateProps = (initialState) => {
  return {
    news: initialState.HeadlineReducers.data,
    isLoading: initialState.HeadlineReducers.isLoading,
  };
};

const dispatchProps = (dispatch) => {
  return {
    headlineRequest: () => dispatch({ type: HeadlineTypes.HEADLINE_REQUEST }),
  };
};

export default connect(stateProps, dispatchProps)(HeadlineHome);
