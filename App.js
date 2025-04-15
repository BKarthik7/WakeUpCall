import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import './global.css';

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <Text className="text-3xl font-bold text-blue-500">Hello, World!</Text>
      <Text className="text-lg text-gray-700">This is a NativeWind example.</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
