import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Navbar from "./Navbar";
import Creators from "../redux/reducers/HeadlineReducers";

function HeadlineHome() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Creators.headlineRequest());
  }, [dispatch]);
  let loadingMap = "123456789012".split("");
  
  const news = useSelector(state => state.headline.data)
  const isLoading = useSelector(state => state.headline.isLoading)
  const errorData = useSelector(state => state.headline.errorData)

  return (
    <div>
      <Navbar />
      <div className="container">
        {errorData.message === 'Network Error' && <h1>Anda sedang di luar jaringan</h1>}
        {errorData === 'server down' && <h1>Server sedang tidak bisa diakses. Coba lagi nanti</h1> }
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

export default HeadlineHome;
