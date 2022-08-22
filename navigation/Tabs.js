import React from 'react';
import {Header} from 'react-navigation';
import {Appbar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import NewsScreen from '../src/screens/NewsScreen';
import DetailScreen from '../src/screens/DetailScreen';
import WeatherScreen from '../src/screens/WeatherScreen';

const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gossip" component={NewsScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Tabs;
