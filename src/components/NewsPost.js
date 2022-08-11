import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {fetchPosts} from '../actions/newsAction';

const NewsPost = () => {
  const dispatch = useDispatch();
  const results = useSelector(state => state.news.newsPost);
  //console.log(results);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <View>
      <Text>science news</Text>
      <FlatList
        data={results}
        keyExtractor={result => {
          result.id;
        }}
        renderItem={({item}) => {
          return <Text>{item.author}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewsPost;
