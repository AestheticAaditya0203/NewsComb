import React, {useEffect, useState} from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import {View, Pressable} from 'react-native';
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
          <Title>{details.content}</Title>
          <Pressable
            onPress={() => {
              {
                uri: details.readMoreUrl;
              }
            }}>
            <Paragraph>read more</Paragraph>
          </Pressable>
        </Card.Content>
      </Card>
    </View>
  );
};

export default DetailScreen;
