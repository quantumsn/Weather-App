import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ShowWeather.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function ShowWeather({ report }) {
  const SUNNY_DAY =
    "https://media.istockphoto.com/id/470669958/photo/blue-sky.jpg?s=1024x1024&w=is&k=20&c=01SLLhIK01yieexy_WVYSCTKtRhsrxddbm4agKXHdCU=";

  const RAINY_DAY =
    "https://images.unsplash.com/photo-1516038858785-1cf85ef58b0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_DAY =
    "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="show-weather">
      <Card
        sx={{ minWidth: 341 }}
        style={{ backgroundColor: "#01b572", color: "#ffffffde" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={
              report.humidity >= 75
                ? RAINY_DAY
                : report.temp <= 17
                ? COLD_DAY
                : SUNNY_DAY
            }
            alt="Weather"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontFamily:
                  "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
              }}
            >
              <div className="weather-head">
                {report.humidity >= 75 ? (
                  <ThunderstormIcon style={{ fontSize: "3.3rem" }} />
                ) : report.temp <= 17 ? (
                  <AcUnitIcon style={{ fontSize: "3.3rem" }} />
                ) : (
                  <WbSunnyIcon style={{ fontSize: "3.3rem" }} />
                )}
                <div>
                  <h4>
                    {report.name} &nbsp; {report.temp}&deg;C
                  </h4>
                  <p className="city-name">{report.weather}</p>
                </div>
              </div>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
              style={{
                fontFamily:
                  "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                color: "#ffffffde",
              }}
            >
              <p>
                <WaterDropIcon />
                <b>Humidity :</b>
                {report.humidity}%
              </p>
              <p>
                <Brightness7Icon />
                <b>Maximun Temparature :</b>
                {report.maxTemp}&deg;C
              </p>
              <p>
                <Brightness1Icon />
                <b>Minimum Temparature :</b>
                {report.minTemp}&deg;C
              </p>
              <p>
                <EmojiEmotionsOutlinedIcon />
                <b>Feels Like :</b>
                {report.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
