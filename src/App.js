import { useState } from "react";

import Styled from "styled-components";
import GlobalStyle from "./globalStyle";
import Search from "./components/search";
import Weather from "./components/weather";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Haryana");

  return (
    <StyledApp>
      <GlobalStyle />
      <Search setLocation={setLocation} location={location} />
      <Weather location={location} weather={weather} setWeather={setWeather} />
    </StyledApp>
  );
};

const StyledApp = Styled.div`
width:100vw;
height:100vh;
background: linear-gradient(to left, #6dd5ed, #2193b0); 
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column
`;

export default App;
