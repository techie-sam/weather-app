import { fetchCurrentWeatherRequest, fetchCurrentWeatherSuccess, fetchCurrentWeatherFailure } from "./slice";


const apiKey = process.env.REACT_APP_API_KEY;
export const fetchCurrentLocationWeather = () => (dispatch) => {
    dispatch(fetchCurrentWeatherRequest());
  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log(latitude)
                const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
                fetch(endpoint)
                    .then((response) => response.json())
                    .then((data) =>
                        dispatch(fetchCurrentWeatherSuccess(data))
                    )
                    .catch((error) =>
                        dispatch(fetchCurrentWeatherFailure(error))
                    );
            },
            ({message}) => dispatch(fetchCurrentWeatherFailure(message))
        );
    } else {
        dispatch(fetchCurrentWeatherFailure("Browser does not support using location"));
    }
  };