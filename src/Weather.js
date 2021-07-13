import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});

function displayForecast(response){
  console.log(response.data);

  setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    wind:response.data.wind.speed,
    city: response.data.name,
    humidity:response.data.main.humidity,
    description:response.data.weather[0].description,
  });
}

if (weatherData.ready) {

    return(
        <div className="App">
      <div className="weather-app">
        <div className="weather-wrapper">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-6">
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
              <div className="col-2">
                <button
                  type="button"
                  className="btnLocation"
                  id="location-button">
                  Location
                </button>
              </div>
            </div>
          </form>
          <h1 id="city">{weatherData.city}</h1>
          <h2 className="actual-time">
            <span id="date"> </span>
            <span className="description"> {weatherData.description}</span>
              <p id="description"></p>
          </h2>
          
          
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          

          <span className="units"> C° </span>
            
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
            
              <li>
                <span> Humidity:{weatherData.humidity}%</span>
              </li>
              <li>
               <span> Wind:{weatherData.wind}km/h</span>
              </li>
            </div>
            <src id="icon" />
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
} else{
  const apiKey ="1e3a1ed81fb1d1edbb19cf958878c70c"
  
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);

  return "Loading..."
}
}