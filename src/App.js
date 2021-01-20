import { useState, useCallback } from "react";
import Search from "./components/search";
import Weather from "./components/weather";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Haryana");

  return (
    <div className="App">
      <Search setLocation={setLocation} />
      <Weather location={location} weather={weather} setWeather={setWeather} />
    </div>
  );
};

export default App;
