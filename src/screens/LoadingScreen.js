import React,{ useRef, useEffect } from 'react';
import { View, Text, StyleSheet,Image, Animated } from 'react-native';
import { ImageBackground } from 'react-native';
import { colors } from '../config/colors';
const LoadingScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  // Inicia la animación de rotación
  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 4000, // Duración en milisegundos para una vuelta completa
          useNativeDriver: true // Usar el driver nativo mejora el rendimiento
        }
      )
    ).start();
  }, [spinValue]);

  // Mapear el valor interpolado de la animación a grados de rotación
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'] // de 0 grados a 360 grados
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fondo negro como en tu diseño
    alignItems: 'center', // Centrar horizontalmente
    justifyContent: 'center',
  },
  logo: {
    width: 150, // Ancho de la imagen
    height: 150, // Alto de la imagen
    resizeMode: 'contain' // Asegura que la imagen se escale adecuadamente
  }
});

export default LoadingScreen;