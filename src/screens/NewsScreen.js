import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Searchbar, Button, Appbar} from 'react-native-paper';
import {Provider} from 'react-redux';
import NewsPost from '../components/NewsPost';
import store from '../store/index';

const NewsScreen = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Weather');
        }}>
        Weather
      </Button>
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
