import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';

const SearchBar = () => {
  return (
    <View>
      <Searchbar placeholder="search" style={styles.search} icon="camera" />
      {/* <Image source={require('../../assets/weather-sunny.svg')} />
       */}
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginBottom: 10,
  },
});

export default SearchBar;
