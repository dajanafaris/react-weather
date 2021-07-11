import React from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(){
  const apiKey ="2b3bd1a1e50c09583da5280a7c6bd061"
  let city = "Zagreb";
  let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
             30 C°
            </span>
              
          </span>
          <div className="row">
            <div className="col-6">
              <div className="center-block">
             
                <img src="https://image.freepik.com/free-vector/weather-forecast-concept-woman-forecasting-weather-tv-news-flat-illustration-forecast-weather-meteorology-climate_53562-11779.jpg"
                alt="Mostly Cloudy"
                className="visual" />

                </div>
           </div>
                
            <div className="col-2">
              <ul className="weather-info"></ul>
              <p id="description"></p>
              <li>
                Humidity:<span id="humidity"> % </span>
              </li>
              <li>
                Wind: <span id="wind">km/h</span>
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
