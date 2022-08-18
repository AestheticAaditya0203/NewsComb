import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Searchbar, Button, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-redux';
import NewsPost from '../components/NewsPost';
import store from '../store/index';
import SearchBar from '../components/SearchBar';

const NewsScreen = ({navigation}) => {
  return (
    <View>
      <SearchBar />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Weather');
        }}>
        <Text style={{fontSize: 30}}>🌞</Text>
      </TouchableOpacity>
      {/* 
      <Text variant="headlineLarge" style={styles.text}>
        Science News
      </Text> */}
      <Provider store={store}>
        <NewsPost />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default NewsScreen;

/* ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
}; */
