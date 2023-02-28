import React from 'react';
import { View, Text } from 'react-native';

const SampleView = ({ text = 'Hello world!' }) => {
  return (
    <View
      style={{
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{text}</Text>
    </View>
  );
};

export default SampleView;
