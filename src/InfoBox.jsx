import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({ info }) {
  const INIT_URL = `https://source.unsplash.com/800x600/?${info.weather}`;
  const hot_url="https://www.treehugger.com/thmb/emVFfdc5Dwzu-u531n2zOSyvkLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
  const cold_url="https://www.climaterealityproject.org/sites/default/files/adam-chang-iwenq-4jhqo-unsplash.jpg";
  const rain_url="https://static.vecteezy.com/system/resources/thumbnails/009/379/927/small/heavy-rain-and-raindrop-on-the-car-window-the-car-must-stop-on-the-way-for-the-safety-of-driving-because-i-cannot-see-the-way-ahead-it-may-cause-an-accident-while-driving-photo.jpg";
  const img="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="InfoBox" style={{BackgroundImage:`url(${info.img})`}}>
        
        <div style={{display:"flex", justifyContent:"center"}} classname="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity>80 && info.temp>15?rain_url:info.temp>20?hot_url:cold_url} title="weather image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
              info.humidity>80 && info.temp>15?<BeachAccessIcon/>:info.temp>20?<WbSunnyIcon/>:<AcUnitIcon/>
            }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}°C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}°C</p>
            <p>Max Temp = {info.tempMax}°C</p>
            <p>The weather can be described as <i><b>{info.weather}</b></i> feels like {info.feelsLike}°C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
    
  );
}