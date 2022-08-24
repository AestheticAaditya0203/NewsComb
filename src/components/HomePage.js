import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Card, Title} from 'react-native-paper';
import {fetchPosts} from '../actions/newsAction';

const HomePage = () => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.news.newsPost);
  const resp = res.data;

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchPosts('all'));
  }, [resp]);

  //console.log(resp);

  return (
    <>
      {Object.keys(res).length ? (
        <View>
            <Card>
              <Card.Cover source={{uri: resp[0].imageUrl}} />
              <Card.Content>
                <Title>{resp[0].title}</Title>
              </Card.Content>
            </Card>
          {/*  <Text>{resp[0].title}</Text> */}
        </View>
      ) : (
        <Text>....loading</Text>
      )}
    </>
  );
};

export default HomePage;
