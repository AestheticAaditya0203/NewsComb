import axios from 'axios';
import newsApi from '../api/newsApi';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await newsApi.get('/news?category=science')
      .then(res => {
        //console.log(res);
        const news = res.data.data;
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