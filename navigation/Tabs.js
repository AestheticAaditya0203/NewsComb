import React from 'react';
import {Header} from 'react-navigation';
import {Appbar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import NewsScreen from '../src/screens/NewsScreen';
import DetailScreen from '../src/screens/DetailScreen';
import WeatherScreen from '../src/screens/WeatherScreen';
import Actionbar from '../src/components/Actionbar';

const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <>
     {/*  <StatusBar barStyle="dark-content" backgroundColor="#00aaff" /> */}
      <NavigationContainer backgroundColor='white'>
        <Stack.Navigator>
          <Stack.Screen
            name="News"
            component={NewsScreen}
            options={{
              title: '📰  Gossip',
              headerStyle: {
                backgroundColor: 'white',
              },
              headerRight: () => <Actionbar />,
            }}
          />
          <Stack.Screen name="Weather" component={WeatherScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Tabs;

{
  /* <Stack.Screen
  name="HomeActivity"
  component={HomeActivity}
  options={{
    title: 'Home', //Set Header Title
    headerStyle: {
      backgroundColor: '#d8d8d8', //Set Header color
    },
    headerTintColor: 'black', //Set Header text color
    headerTitleStyle: {
      fontWeight: 'bold', //Set Header text style
    },
    headerLeft: () => <ActionBarImage />,
  }}
/> */
}
