import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  VirtualizedList,
  ActivityIndicator,
} from 'react-native';
import {Card, Title, Paragraph, Text} from 'react-native-paper';
import {fetchPosts} from '../actions/newsAction';
//import SearchBar from './SearchBar';

const NewsPost = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const results = useSelector(state => state.news.newsPost);
  //console.log(results.category);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {Object.keys(results).length ? (
        <View style={styles.container}>
          {results.data.map((item, i) => {
            return (
              <View style={styles.container1} key={i}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details', {details: item});
                  }}>
                  <Card>
                    <Card.Cover
                      source={{uri: item.imageUrl}}
                      style={{height: 350}}
                    />
                    <Card.Content>
                      <Title>{item.title}</Title>
                      <Paragraph>by: {item.author}</Paragraph>
                      <Paragraph>date: {item.date}</Paragraph>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              </View>
            );
          })}
          {/* <FlatList
            nestedScrollEnabled
            data={results.data}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
              return (
                <View style={styles.container1}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', {details: item});
                    }}>
                    <Card>
                      <Card.Cover
                        source={{uri: item.imageUrl}}
                        style={{height: 350}}
                      />
                      <Card.Content>
                        <Title>{item.title}</Title>
                        <Paragraph>by: {item.author}</Paragraph>
                        <Paragraph>date: {item.date}</Paragraph>
                      </Card.Content>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            }}
          /> */}
        </View>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color='black' />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 400,
  },
  text: {
    fontSize: 25,
  },
  text1: {
    fontSize: 20,
  },
  container: {
    margin: 10,
  },
  container1: {
    marginBottom: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 600,
  },
});

export default NewsPost;
