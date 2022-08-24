import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Text, Searchbar, Button, Appbar} from 'react-native-paper';
//import {Header} from 'react-navigation';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-redux';
import NewsPost from '../components/NewsPost';
import store from '../store/index';
//import SearchBar from '../components/SearchBar';
import ScrollBar from '../components/ScrollBar';
//import HomePage from '../components/HomePage';

const NewsScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <ScrollBar />
          <NewsPost />
        </View>
      </ScrollView>
    </View>
  );
};

/* NewsScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={()=>{
          console.log('clicked');
        }}>
        <Text>Weather</Text>
      </TouchableOpacity>
    ),
  };
}; */

const styles = StyleSheet.create({});

export default NewsScreen;
