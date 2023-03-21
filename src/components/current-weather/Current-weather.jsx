import "../current-weather/Current-weather.css";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { AiFillDashboard } from "react-icons/ai";
import { TiWeatherWindy } from "react-icons/ti";

const CurrentWeather = ({ data }) => {
  return (
    <div className="wrapper__flex">
      <div className="weather__wrapper__top">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>

            <p className="weather-desc">{data.weather[0].description}</p>
          </div>
          <div className="top__bottom__container">
            <p className="temp">{Math.round(data.main.temp)}°C</p>
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
        </div>
      </div>

      {/* _________BOTTOM__________ */}
      <div className="weather__wrapper__bottom">
        <div className="bottom">
          <div className="details">
            {/* <div className="parameter-row">
              <span className="parameter-label parameter-label-top">
                Details
              </span>
            </div> */}
            <div className="parameter-row ">
              <TiWeatherWindy className="parameter-icon scale" />
              <span className="parameter-label">Feels</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>

            <div className="parameter-row">
              <BsWind className="parameter-icon scale__small  " />
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>

            <div className="parameter-row ">
              <WiHumidity className="parameter-icon scale" />
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>

            <div className="parameter-row">
              <AiFillDashboard className="parameter-icon scale__small " />
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
