import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        
        <h1 id="city">{props.data.city}</h1>


          <h2 className= "date"> <FormattedDate date={props.data.date}/> </h2>
      
                 <h3 className="description">
             <span id="date"> </span>
              <span className="description"> {props.data.description}</span> 
          </h3>
          
          
          <span className="temperature">{Math.round(props.data.temperature)}</span>
          

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
                <span> Humidity:{props.data.humidity}%</span>
              </li>
              <li>
               <span> Wind:{props.data.wind}km/h</span>
              </li>
            </div>
            <src id="icon" />
          </div>
          <div className="weather-forecast" id="forecast">     
          </div>
        </div>
      
    );
}
