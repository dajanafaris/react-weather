import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Logo from "./Logo.svg";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city">{props.data.city}</h1>

      <h2 className="date">
        <FormattedDate date={props.data.date} />
      </h2>

      <h3 className="description">
        <span id="date"> </span>
        <span className="description"> {props.data.description}</span>
      </h3>
      <div className="float-left">
        <WeatherIcon code={props.data.icon} size={60} />
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units"> C° </span>

        <ul className="weather-info">
          <li>
            <span> Humidity:{props.data.humidity}%</span>
          </li>
          <li>
            <span> Wind:{props.data.wind}km/h</span>
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="center-block">
            <div>
              <img src={Logo} width="300" alt="logo" className="Visual" />
            </div>
          </div>
        </div>

        <div className="col-2"></div>
        <src id="icon" />
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
