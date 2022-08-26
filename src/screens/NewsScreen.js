import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
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

const NewsScreen = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);

  const translateY = diffClamp.interpolate({
    inputRange: [0, 40],
    outputRange: [0, -40],
  });

  return (
    <View>
      <Animated.View
        style={{
          transform: [{translateY: translateY}] /* 
        elevation:4,
        zIndex:100, */,
        }}>
        <ScrollBar />
      </Animated.View>
      <ScrollView
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <NewsPost />
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
