import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, FlatList, TextInput, Button} from 'react-native';
import {
  Text,
  Card,
  Title,
  Paragraph,
  Image,
  Searchbar,
  ActivityIndicator,
} from 'react-native-paper';
import {fetchWeather} from '../actions/newsAction';
import '../../assets/weather.jpg';

const WeatherPost = () => {
  const dispatch = useDispatch();
  const snaps = useSelector(state => state.weather.weatherPost);
  const [city, setCity] = useState('');
  //console.log(snaps);

  const fetchCities = text => {
    setCity(text);
    // return dispatch(fetchWeather(text));
  };

  useEffect(() => {
    dispatch(fetchWeather('Bangalore'));
  }, []);

  return (
    <>
      {Object.keys(snaps).length ? (
        <View>
          <View style={styles.backgroundStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Search any city.."
              value={city}
              onChangeText={setCity}
            />
          </View>
          <Button
            onPress={() => {
              //console.log(city);
              dispatch(fetchWeather(city));
            }}
            title="click"
          />
          <Card>
            <Card.Cover
              source={{
                uri: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
              }}
              style={{height: 300}}
            />
            <Card.Content>
              <Title style={{color: '#00aaff'}}>{snaps.name}</Title>
              <Title>{snaps.main.temp}°C</Title>
              <Paragraph>
                ↑{snaps.main.temp_max}°C ↓{snaps.main.temp_min}°C
              </Paragraph>
              <Paragraph>HUM {snaps.main.humidity}% </Paragraph>
            </Card.Content>
          </Card>
          {snaps.weather.map((snap, i) => (
            <Card key={i}>
              <Card.Content>
                <Title style={styles.desc}>{snap.description}</Title>
              </Card.Content>
            </Card>
          ))}
        </View>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  desc: {
    color: '#00aaff',
    fontSize: 25,
  },
  search: {
    margin: 5,
    borderRadius: 25,
  },
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 600,
  },
});

export default WeatherPost;

// ↓ ↑ °
