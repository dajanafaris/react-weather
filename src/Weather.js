import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const[city, setCity] = useState (props.defaultCity);

function handleResponse(response){
  console.log(response.data);

  setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    wind:response.data.wind.speed,
    city: response.data.name,
    humidity:response.data.main.humidity,
    description:response.data.weather[0].description,
    date: new Date (response.data.dt * 1000),
    icon: response.data.weather[0].icon,
  });
}
function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity (event.target.value);
}



function search() {
const apiKey ="1e3a1ed81fb1d1edbb19cf958878c70c"
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

if (weatherData.ready) {

    return(
        <div className="App">
      <div className="weather-app">
        <div className="weather-wrapper">
          <form className="mb-3" onSubmit={handleSubmit} >
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  className="form-control"
                  id="city-input"
                  placeholder="Search a city ..."
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <button type="button" 
                className="btnSearch"
                 id="search-button">
                  Search
                </button>
              </div>
              
            </div>
          </form>
          <WeatherInfo data={weatherData}/>
          <WeatherForecast/>
      </div>
    </div>
    </div>
  );
} 
else{
  search();
  return "Loading";
}
}
