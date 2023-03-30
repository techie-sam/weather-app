import './App.css';
import Nav from './components/Nav';
import CurrentLocationWeather from './components/CurrentLocationWeather';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentLocationWeather } from './redux/getWeather';
function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentLocationWeather())
  })
  
  return (
    <>
      <Nav />
      <CurrentLocationWeather />
    </>
  );
}

export default App;
