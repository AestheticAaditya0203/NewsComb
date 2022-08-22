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

const ScrollBar = ({route}) => {
  const dispatch = useDispatch();
  const results = useSelector(state => state.news.newsPost);

  useEffect(() => {
    console.log('click');
  }, [results]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('all'));
            }}>
            <Text style={styles.text}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('science'));
            }}>
            <Text style={styles.text}>Science</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('technology'));
            }}>
            <Text style={styles.text}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('sports'));
            }}>
            <Text style={styles.text}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('national'));
            }}>
            <Text style={styles.text}>National</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('politics'));
            }}>
            <Text style={styles.text}>Politics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('business'));
            }}>
            <Text style={styles.text}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(fetchPosts('entertainment'));
            }}>
            <Text style={styles.text}>Entertainment</Text>
          </TouchableOpacity>
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
