import React from "react";
import "./Weather.css";


export default function Weather(){

    return(
        <div className="App">
      <div className="weather-app">
        <div className="weather-wrapper">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-5">
                <input
                  type="search"
                  className="form-control"
                  id="city-input"
                  placeholder="Search a city ..."
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <button type="button" 
                className="btnSearch"
                 id="search-button">
                  Search
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className="btnLocation"
                  id="location-button">
                  🚩Location
                </button>
              </div>
            </div>
          </form>
          <h1 id="city"> Pula,Croatia </h1>
          <h2 className="actual-time">
            <span id="date"> </span>
          </h2>
          <strong id="temperature"></strong>
          <span className="units">
            <span href="#" id="celsius-link">
              C°
            </span>
          </span>
          <div className="row">
            <div className="col-md-8">
              <div className="center-block">
                <span src="https://image.freepik.com/free-vector/weather-forecast-concept-woman-forecasting-weather-tv-news-flat-illustration-forecast-weather-meteorology-climate_53562-11779.jpg" 
                id="image" />
              </div>
            </div>
            <div className="col-md-4">
              <ul className="weather-info"></ul>
              <p id="description"></p>
              <li>
                Humidity: <span id="humidity"> % </span>
              </li>
              <li>
                Wind: <span id="wind"></span> km/h
              </li>
            </div>
            <src id="icon" />
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
