import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';

const SearchBar = () => {
 /*  const [text, onChangeText] = useState('used text');
  const [number, onChangeNumber] = useState(null); */

  return (
    <View>
      <Text>Way to searchBar</Text>
      <Searchbar placeholder="search" />
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
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
