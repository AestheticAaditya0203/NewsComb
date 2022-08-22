import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';

const SearchBar = () => {
  return (
    <View>
      <Searchbar placeholder="search" style={styles.search} icon="camera" />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    margin: 8,
    borderRadius: 25,
  },
});

export default SearchBar;
