import './App.css';
import Nav from './components/Nav';
import CurrentLocationWeather from './components/CurrentLocationWeather';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position=>{console.log(position)}, error=>{console.log(error)})
  })
  
  // console.log(position)
  return (
    <>
      <Nav />
      <CurrentLocationWeather />
    </>
  );
}

export default App;
