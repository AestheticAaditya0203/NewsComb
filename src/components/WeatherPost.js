import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text, Card, Title, Paragraph} from 'react-native-paper';
import {fetchWeather} from '../actions/newsAction';
import '../../assets/weather.jpg';

const WeatherPost = () => {
  const dispatch = useDispatch();
  const snaps = useSelector(state => state.weather.weatherPost);

  //console.log(snaps);

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <>
      {Object.keys(snaps).length ? (
        <View>
          <Card>
            <Card.Cover
              source={{
                uri: 'https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
              }}
              style={{height: 250}}
            />
            <Card.Content>
              <Title style={{color: '#00aaff'}}>{snaps.name}</Title>
              <Title>{snaps.main.temp}°F</Title>
              <Paragraph>
                ↑{snaps.main.temp_max}°F ↓{snaps.main.temp_min}°F
              </Paragraph>
              <Paragraph>HUM {snaps.main.humidity}% </Paragraph>
            </Card.Content>
          </Card>
          {snaps.weather.map((snap, i) => (
            <Card key={i}>
              <Card.Content>
                <Title>{snap.description}</Title>
                <Title>{snap.main}</Title>
              </Card.Content>
            </Card>
          ))}
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default WeatherPost;

// ↓ ↑ °