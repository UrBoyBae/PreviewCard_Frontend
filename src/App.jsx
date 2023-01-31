import './App.css';
import Card from './components/Card';
import Sedans from "./assets/images/icon-sedans.svg";
import Suvs from './assets/images/icon-suvs.svg';
import Luxury from './assets/images/icon-luxury.svg';

function App() {
  const image = {
    Sedans : Sedans,
    Suvs : Suvs,
    Luxury : Luxury
  }

  const bgColor = {
    brightOrange : "hsl(31, 77%, 52%)",
    darkCyan : "hsl(184, 100%, 22%)",
    veryDarkCyan : "hsl(179, 100%, 13%)"
  }

  const title = {
    Sedans : "Sedans",
    Suvs : "Suvs",
    Luxury : "Luxury"
  }

  const content = {
    Sedans : "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    Suvs : "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    Luxury : "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }

  const textColor = {
    brightOrange : "hsl(31, 77%, 52%)",
    darkCyan : "hsl(184, 100%, 22%)",
    veryDarkCyan : "hsl(179, 100%, 13%)"
  }

  const borderRadius = {
    Sedans : "8px 0 0 8px",
    Luxury : "0 8px 8px 0"
  }
  const mobileRadius = {
    Sedans : "8px 8px 0 0",
    Luxury : "0 0 8px 8px"
  }

  return (
    <div className='container'>
      <Card img={image.Sedans} color={bgColor.brightOrange} title={title.Sedans} content={content.Sedans} textColor={textColor.brightOrange} bgColor={bgColor.brightOrange} border={borderRadius.Sedans} mobile={mobileRadius.Sedans}/>
      <Card img={image.Suvs} color={bgColor.darkCyan} title={title.Suvs} content={content.Suvs} textColor={textColor.darkCyan} bgColor={bgColor.darkCyan}/>
      <Card img={image.Luxury} color={bgColor.veryDarkCyan} title={title.Luxury} content={content.Luxury} textColor={textColor.veryDarkCyan} bgColor={bgColor.veryDarkCyan} border={borderRadius.Luxury} mobile={mobileRadius.Luxury}/>
    </div>
  );
}

export default App;
