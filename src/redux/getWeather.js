import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } from "./slice";
import store from "./store";


const apiKey = process.env.REACT_APP_API_KEY;
export const fetchCurrentLocationWeather = () => (dispatch) => {
    dispatch(fetchWeatherRequest());

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(fetchWeatherFailure(false))
                const { latitude, longitude } = position.coords;
                console.log(latitude)
                const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
                fetch(endpoint) 
                    .then((response) => response.json())
                    .catch(() =>  dispatch(fetchWeatherFailure(true)))
                    .then((data) =>
                        dispatch(fetchWeatherSuccess(data))
                    )
                    .catch(({error}) =>
                        dispatch(fetchWeatherFailure(error))
                    );
            },
            ({ message }) => dispatch(fetchWeatherFailure(message))
        );
    } else {
        dispatch(fetchWeatherFailure("Browser does not support using location"));
    }
};

export const fetchWeatherByUserInput =()=> (dispatch)=>{
    const city = store.getState().weatherReducer.cityName
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    dispatch(fetchWeatherRequest())
    
    fetch(endpoint)
    .then((response) => response.json())
    .catch(({message}) =>dispatch(fetchWeatherFailure(message)))
    .then((data) => {
        if (data.cod === '404'){
            dispatch(fetchWeatherFailure(data.message))
        }else{
                dispatch(fetchWeatherSuccess(data))
            }
        // console.log(data.code === '404');
    })
    .catch(({message}) =>dispatch(fetchWeatherFailure(message)))
}