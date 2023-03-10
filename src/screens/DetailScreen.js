/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Card, Paragraph, Text, Title} from 'react-native-paper';

const DetailScreen = ({route}) => {
  //const [details, setDetails] = useState({});

  const {details} = route.params;
  //console.log(details);

  //console.log(details);

  const url = details.readMoreUrl;

  return (
    <ScrollView>
      <View style={styles.card}>
        {/*
      <Text>😜Way to DetailScreen</Text> */}
        <Card>
          <Card.Content>
            <Title style={styles.title}>{details.title}</Title>
            <Paragraph>by: {details.author}</Paragraph>
            <Paragraph>date: {details.date}</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: details.imageUrl}} style={{height: 350, marginTop:5}} />
          <Card.Content>
            <Paragraph style={styles.text}>{details.content}</Paragraph>
            <TouchableOpacity
              onPress={() => Linking.openURL(details.readMoreUrl)}>
              <Paragraph style={styles.para}>read more ...</Paragraph>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card:{
    padding:10,
  },
  title: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    lineHeight: 25,
  },
  para: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default DetailScreen;
