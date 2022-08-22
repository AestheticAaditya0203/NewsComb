import React, {useEffect, useState} from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Card, Paragraph, Text, Title} from 'react-native-paper';
import newsApi from '../api/newsApi';

const DetailScreen = ({route}) => {
  //const [details, setDetails] = useState({});

  const {details} = route.params;
  //console.log(details);

  //console.log(details);

  const url = details.readMoreUrl;

  return (
    <View>
      {/* 
      <Text>😜Way to DetailScreen</Text> */}
      <Card>
        <Card.Content>
          <Title style={styles.title}>{details.title}</Title>
          <Paragraph>by {details.author}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: details.imageUrl}} />
        <Card.Content>
          <Paragraph style={styles.text}>{details.content}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  text: {
    fontSize: 20,
    marginTop:10,
  },
});

export default DetailScreen;
