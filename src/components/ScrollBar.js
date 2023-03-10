import React, {useEffect, useState} from 'react';
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
  const [color, setColor] = useState('all');

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
    'world',
    'startup',
    'automobile',
    'miscellaneous',
    'hatke',
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
        <>
          {categories.map((e, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                dispatch(fetchPosts(e));
                setColor(e);
              }}>
              <Text
                style={
                  color === `${e}`
                    ? {
                        ...styles.text,
                        textDecorationLine: 'underline',
                        color: 'red',
                      }
                    : styles.text
                }>
                {e}
              </Text>
            </TouchableOpacity>
          ))}
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 50,
    //elevation: 4,
    //position: 'absolute',
    /* top: 0,
    left: 0,
    right: 0, */
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
