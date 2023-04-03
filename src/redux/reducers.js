// // reducers.js

// import {
//     FETCH_CURRENT_WEATHER_REQUEST,
//     FETCH_CURRENT_WEATHER_SUCCESS,
//     FETCH_CURRENT_WEATHER_FAILURE
//   } from './getWeather';
  
//   const initialState = {
//     data: null,
//     loading: false,
//     error: null
//   };
  
//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCH_CURRENT_WEATHER_REQUEST:
//         console.log(state, initialState)
//         return { ...state, loading: true, error: null };
//       case FETCH_CURRENT_WEATHER_SUCCESS:
//         return { ...state, loading: false, data: action.payload };
//       case FETCH_CURRENT_WEATHER_FAILURE:
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default reducer;
  