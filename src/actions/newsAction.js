import axios from 'axios';
import newsApi from '../api/newsApi';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await newsApi
      .get('/news?category=technology')
      .then(res => {
        //console.log(res);
        const news = res.data;
        dispatch({
          type: 'NEWS_POST',
          payload: news,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const fetchWeather = () => {
  return async dispatch => {
    const responds = await axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metrics&appid=5e1e4be3246072957554d0eb7f663fa8',
      )
      .then(snaps => {
        const weather = snaps.data;
        dispatch({
          type: 'WEATHER_POST',
          payload: weather,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
