import React from 'react';
import {Provider as WeatherProvider} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import NewsPost from '../components/NewsPost';
import store from '../store/index';
import WeatherPost from '../components/WeatherPost';

const WeatherScreen = () => {
  return (
    <View>
      <WeatherProvider store={store}>
        <WeatherPost />
      </WeatherProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default WeatherScreen;
