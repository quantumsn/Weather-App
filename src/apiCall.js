let URL = "https://api.openweathermap.org/data/2.5/weather?";
let API_KEY = "20659545a3c5b5a4a318120f9ef993d6";

export async function getWeatherReport(city) {
  let response = await fetch(`${URL}q=${city}&appid=${API_KEY}&units=metric`);
  let data = await response.json();
  let weatherReport = {
    name: city,
    temp: data.main.temp,
    maxTemp: data.main.temp_max,
    minTemp: data.main.temp_min,
    humidity: data.main.humidity,
    feelsLike: data.main.feels_like,
    weather: data.weather[0].description,
  };
  return weatherReport;
}
