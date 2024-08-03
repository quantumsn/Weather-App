import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { getWeatherReport } from "./apiCall";
import "./SearchBox.css";

export default function SearchBox({ weatherData }) {
  let [city, setCity] = useState("");

  let handleInput = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let data = await getWeatherReport(city);
    weatherData(data);
    setCity("");
  };

  return (
    <div className="search-box">
      <h1>Weather Forcast</h1>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          maxWidth: 400,
          minWidth: 250,
        }}
        onSubmit={handleSubmit}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search your city"
          inputProps={{ "aria-label": "search your city" }}
          value={city}
          onChange={handleInput}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
