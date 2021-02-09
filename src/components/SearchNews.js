import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

function SearchNews({ news, isLoading }) {

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
            <h3>Hasil Pencarian Berita</h3>
            <div className="row">
              {news &&
                news.map((headline) => (
                  <div key={headline.url} className="col-6 headline-small">
                    <a href={headline.url} target='_blank' rel="noreferrer">
                      <img src={headline.urlToImage} alt={headline.title} />
                      <h5>{headline.title}</h5>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const stateProps = (initialState) => {
  return {
    news: initialState.search.data,
    isLoading: initialState.search.isLoading,
  };
};

export default connect(stateProps)(SearchNews);
