import React from "react";

const Weather = props => (
    <div className="infoWeath">
        {props.city &&
        <div>
            <p>Местоположение: {props.city}, {props.country}</p>
            <p>Температура: {props.temp_c}</p>
            <p>Скорость ветра и направление: {props.wind_kph}, {props.wind_dir}</p>
        </div>
        }
        <p className="error">{props.error}</p>
    </div>
);

export default Weather;