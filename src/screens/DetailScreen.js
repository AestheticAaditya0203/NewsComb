import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
//import axios from 'axios';
import newsApi from '../api/newsApi';

const DetailScreen = ({route}) => {
  //const [details, setDetails] = useState({});

  const {id} = route.params;
  //console.log(id);

 /*  const getResultApi = async () => {
    const response = await newsApi.get('/news?category=technology');
    const result = response.data.data; */
    //console.log(result[0].id);
    
  /* };

  getResultApi(); */
  //console.log(details);

  return (
    <View>
      <Text>😜Way to DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
