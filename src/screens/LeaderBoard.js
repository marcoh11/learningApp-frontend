// src/screens/Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { colors } from '../config/colors';

const LeaderBoard = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Fondo negro como en tu diseño
    alignItems: 'center', // Centrar horizontalmente
    justifyContent: 'center',
  }
});

export default LeaderBoard;
