import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-paper';
import {fetchPosts} from '../actions/newsAction';

const ScrollBar = () => {
  const dispatch = useDispatch();
  const results = useSelector(state => state.news.newsPost);

  const categories = [
    'all',
    'science',
    'technology',
    'sports',
    'national',
    'politics',
    'business',
    'entertainment',
  ];

  // useEffect(() => {
  //   fetchPosts();
  // }, [results]);

  useEffect(() => {
    dispatch(fetchPosts('all'));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {categories.map((e, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                dispatch(fetchPosts(e));
              }}
              style={{borderBottomColor: 'red'}}>
              <Text style={styles.text}>{e}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default ScrollBar;

/* 
<ScrollView
onScroll={(e) => {
onScroll(e);
}}
stickyHeaderIndices={[1]}
contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
style={{ width: '100%' }}
> */

/* category=[{title:'science'},{title:'national'}, {title:'science}] 

onPress=()=>{
  dispatch(fetchPosts(category.title))
}

{category.title}

*/
