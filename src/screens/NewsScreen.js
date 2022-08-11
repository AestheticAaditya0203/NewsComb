import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import NewsPost from '../components/NewsPost';
import store from '../store/index';

const NewsScreen = () => {
  return (
    <View>
      <Provider store={store}>
        <NewsPost />
      </Provider>
    </View>
  );
};

export default NewsScreen
