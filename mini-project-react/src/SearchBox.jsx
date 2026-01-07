import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
    let [city,setCity]=useState("");
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
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