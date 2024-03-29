import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Creators from "../redux/reducers/CategoryReducers";
import Navbar from "./Navbar";

function NewsCategorized() {
  const dispatch = useDispatch()
  const news = useSelector(state => state.category.data)
  const isLoading = useSelector(state => state.category.isLoading)
  const params = useParams();
  const category = params.id;
  useEffect(() => {
    dispatch(Creators.categoryRequest(category));
  }, [category, dispatch]);

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

export default NewsCategorized
