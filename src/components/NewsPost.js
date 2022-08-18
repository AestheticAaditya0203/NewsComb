import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {fetchPosts} from '../actions/newsAction';
//import SearchBar from './SearchBar';

const NewsPost = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const results = useSelector(state => state.news.newsPost);
  //console.log(results.category);

  /*  const [terms,setTerms] = useState("");

  const filterResultsByCategory = (category) => {
   
    return results.filter((result)=>{
      return result.category === category;
    })
  }

  term={term}
  onTermChange={setTerm}
  onTermSubmit={fetchPosts(term)}
    */

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={results.data}
        keyExtractor={result => result.key}
        renderItem={({item}) => {
          return (
            <View style={styles.container1}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {id: item.id});
                }}>
                <Card>
                  <Card.Cover source={{uri: item.imageUrl}} />
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
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
    marginBottom: 25,
  },
});

export default NewsPost;
