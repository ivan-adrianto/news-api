import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Creators from "../redux/actions/actions";
import Navbar from "./Navbar";

function NewsCategorized({ news, categoryRequest, isLoading }) {
  const params = useParams();
  const category = params.id;
  useEffect(() => {
    categoryRequest(category);
  }, [category]);

  let loadingMap = "123456789012".split("");

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {isLoading === true ? (
            <div className="sk-circle">
              {loadingMap.map((spinner, index) => (
                <div
                  key={index}
                  className={`sk-circle${index + 1} sk-child`}
                ></div>
              ))}
            </div>
          ) : (
            news.map((categorized) => (
              <div key={categorized.url} className="col-4 headline-small">
                <a href={categorized.url} target="_blank" rel="noreferrer">
                  <img src={categorized.urlToImage} alt={categorized.title} />
                  <h5>{categorized.title}</h5>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const stateProps = (initialState) => {
  return {
    news: initialState.categoryReducers.data,
    isLoading: initialState.categoryReducers.isLoading,
  };
};
const dispatchProps = (dispatch) => {
  return {
    categoryRequest: (category) => dispatch(Creators.categoryRequest(category)),
  };
};
export default connect(stateProps, dispatchProps)(NewsCategorized);
