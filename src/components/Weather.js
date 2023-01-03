import axios from "axios";
import { useState, useEffect } from "react";

import '../styles.css'

const Weather = ({country}) => {
    const [weather, setWeather] = useState({})
    
    const latitude = Object.keys(country).length === 0 ? 0 : country.latlng[0]
    const longitude = Object.keys(country).length === 0 ? 0 : country.latlng[1]

    // console.log('latitude', latitude)
    // console.log('longitude', longitude)
    const api_key = 'f5fcc725485e9d1a8f5dd13074dd7911' 

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`).then(response => {
            console.log("promise fulfilled Weather")
            console.log(response)
            setWeather(response.data)
        })
    })
    
    if(Object.keys(country).length === 0){
        return <></>
    }

    // console.log('country', country.name.common)
    const temp = weather.main.temp - 273.15
    return(
        <div className="countryWeather">
            <h2>Weather in <span>{country.capital[0]}</span></h2>
            <p>temperature <span>{temp.toPrecision(4)}</span> Celcius</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>wind <span>{weather.wind.speed}</span> m/s</p>
        </div>
    )
    
}

export default Weather