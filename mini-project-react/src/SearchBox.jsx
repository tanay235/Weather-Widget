import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="c6c8018b6978a37f7ebdc2b03aab5f0c";
    let getWeatherInfo = async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        console.log(jsonResponse);
        let result={
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return(
        <div className='SearchBox'>
            <h1>Search for web</h1>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                    <br /><br />
                    <Button variant="contained" type='sumbmit'>
                        Search
                    </Button>
                </form>
        </div>
    );
}