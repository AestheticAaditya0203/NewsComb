import axios from 'axios';
import newsApi from '../api/newsApi';
import weatherApi from '../api/weatherApi';

export const fetchPosts = category => {
  return async dispatch => {
    //const category = 'technology';
    const response = await newsApi
      .get(`/news?category=${category}`)
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
    const responds = await weatherApi
      .get(
        '/data/2.5/weather?q=Bangalore&units=metric&appid=5e1e4be3246072957554d0eb7f663fa8',
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

/* jkfsdkfh

`string text`


*/
