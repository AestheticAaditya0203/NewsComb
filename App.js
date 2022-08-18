import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* import {StatusBar} from 'react-native';
import NewsScreen from './src/screens/NewsScreen'; */
//import DetailScreen from './src/screens/DetailScreen';
//import WeatherScreen from './src/screens/WeatherScreen';
import Tabs from './navigation/Tabs';

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Tabs />
    </>
  );
};

export default App;
