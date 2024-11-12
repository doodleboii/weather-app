import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
//import "./CardContainer.css";

export default function InfoBox({ info }) {
  const INIT_URL = `https://source.unsplash.com/800x600/?${info.weather}`;
  const hot_url="https://www.treehugger.com/thmb/emVFfdc5Dwzu-u531n2zOSyvkLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
  const cold_url="https://www.climaterealityproject.org/sites/default/files/adam-chang-iwenq-4jhqo-unsplash.jpg";
  const rain_url="https://static.vecteezy.com/system/resources/thumbnails/009/379/927/small/heavy-rain-and-raindrop-on-the-car-window-the-car-must-stop-on-the-way-for-the-safety-of-driving-because-i-cannot-see-the-way-ahead-it-may-cause-an-accident-while-driving-photo.jpg";

  return (
    <div className="InfoBox">
        
        <div classname="CardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity>80 && info.temp>15?rain_url:info.temp>20?hot_url:cold_url} title="weather image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}°C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}°C</p>
            <p>Max Temp = {info.tempMax}°C</p>
            <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}°C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
    
  );
}