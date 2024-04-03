// src/screens/Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { colors } from '../config/colors';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Cargando ..</Text>
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

export default LoadingScreen;
