import { useEffect } from "react";
import axios from "axios";

const Weather = ({ weather, setWeather, location }) => {
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${location}`
      )
      .then(res => {
        setWeather(res.data);
      })
      .catch(err => console.log(err.message));
  }, [location, setWeather]);

  return (
    <>
      {weather && (
        <>
          <h1>{weather.location.name}</h1>
          <h3>
            {weather.current.condition.text}
            <br />
            <img src={weather.current.condition.icon} alt="weather-icon" />
          </h3>
          <h3>
            Temperature: {weather.current.temp_c}&#8451;/
            {weather.current.temp_f}&#8457;
          </h3>
          <p>
            Humidity: {weather.current.humidity}%
            <br />
            Wind Speed: {weather.current.wind_kph}km/h
            <br />
            UV Index: {weather.current.uv}
          </p>
        </>
      )}
    </>
  );
};

export default Weather;
