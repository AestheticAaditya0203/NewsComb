import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>G</Text>
      <Text style={styles.text1}>o</Text>
      <Text style={styles.text2}>s</Text>
      <Text style={styles.text}>s</Text>
      <Text style={styles.text3}>i</Text>
      <Text style={styles.text1}>p</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 2,
    marginBottom: 25,
    color: 'blue',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 2,
    marginBottom: 25,
    color: 'red',
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 2,
    marginBottom: 25,
    color: '#ffdf00',
  },
  text3: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 2,
    marginBottom: 25,
    color: 'green',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Heading;
