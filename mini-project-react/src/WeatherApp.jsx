import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function weatherApp(){
    const [WeatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        Temperature: 23,
        Humidity: 5,
        tempMin:4,
        tempMax:9,
        feelslike:24,
        weather:"haze",
    });
    let UpdateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <InfoBox info={WeatherInfo}/>

        </div>
    );
}