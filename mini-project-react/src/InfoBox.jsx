import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
    const INIT_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let info = {
        city: "Delhi",
        Temperature: 23,
        Humidity: 5,
        tempMin:4,
        tempMax:9,
        feelslike:24,
        weather:"haze",
    }
    return (
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>
                <p>Temperature = {info.Temperature}&deg;C</p>
                <p>Humidity = {info.Humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The weather can described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
            </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );

}