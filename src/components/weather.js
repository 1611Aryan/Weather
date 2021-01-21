import { useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const Weather = ({ weather, setWeather, location }) => {
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${location}`
      )
      .then(res => {
        setWeather(res.data);
      })
      .catch(err => console.log(`Could not get the weather`));
  }, [location, setWeather]);

  const date = new Date();
  const day = date.getUTCDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const timeHours = date.getHours();
  const timeMinutes = date.getMinutes();
  return (
    <StyledWeather>
      {weather && (
        <div className="weatherContent">
          <h1 className="location">{weather.location.name}</h1>
          <p className="time">
            {days[day]}, {timeHours}:{timeMinutes}
          </p>
          <p className="currentWeather">
            Weather: {weather.current.condition.text}
            <img src={weather.current.condition.icon} alt="weather-icon" />
          </p>
          <p className="currentTemp">
            Temperature: {weather.current.temp_c}&#8451; /&nbsp;
            {weather.current.temp_f}&#8457;
          </p>
          <p>Cloud Cover: {weather.current.cloud}%</p>
          <p className="humidity">Humidity: {weather.current.humidity}%</p>
          <p className="wind">Wind Speed: {weather.current.wind_kph}km/h</p>
          <p className="uv">UV Index: {weather.current.uv}</p>
        </div>
      )}
    </StyledWeather>
  );
};

const StyledWeather = Styled.div`
height:60%; 
width:60%;
background:rgba(255,255,255,0.5);
border-radius:25px;
display:flex;
align-items:center;
.weatherContent{
  padding: 1rem 2rem;
  height:80%;
  width:100%;
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  flex-direction:column;
}
.location{
  font-size:2.5rem;
}
.time{
  font-size:1.5rem;
}
.currentWeather{
  font-size:1rem;
  margin-bottom:0.5rem;
  img{
    height:100%;
    object-fit:contain;
  }
}
`;

export default Weather;
