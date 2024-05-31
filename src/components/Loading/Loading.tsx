import React from 'react';
import {View, Dimensions} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const Loading = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        marginTop: windowWidth / 1.5, //refactor
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
