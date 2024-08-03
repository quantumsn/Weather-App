import SearchBox from "./SearchBox";
import ShowWeather from "./ShowWeather";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [report, setReport] = useState({
    name: "Loading..",
    temp: "0",
    maxTemp: "0",
    minTemp: "0",
    humidity: "_ _",
    feelsLike: "_ _",
    weather: "_ _",
  });

  let weatherData = (data) => {
    setReport(data);
  };

  return (
    <div className="weather-app">
      <SearchBox weatherData={weatherData} />
      <ShowWeather report={report} />
    </div>
  );
}
