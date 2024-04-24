// Supongamos que este es un componente screens/PasswordResetScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { resetPassword } from '../services/authService'; // Asegúrate de ajustar la ruta de importación según sea necesario
import { colors } from '../config/colors';
const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      await resetPassword(email);
      Alert.alert("Éxito", "Revisa tu correo electrónico para restablecer tu contraseña.");
      // Aquí puedes redirigir al usuario o realizar otras acciones
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Ingresa tu correo electrónico"
        placeholderTextColor="white"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restablecer Contraseña"
          onPress={handlePasswordReset}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Color de fondo para el contenedor
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: 'gray', // Fondo gris para los inputs
    color: 'white', // Texto blanco
    borderRadius: 20, // Bordes redondeados
    padding: 15, // Padding interno
    marginBottom: 20, // Margen inferior
    fontSize: 16, // Tamaño de fuente
  },
  buttonContainer: {
    marginTop:15,
    backgroundColor: 'gray', // Fondo gris para el botón
    overflow: 'hidden', // Oculta el overflow para mantener los bordes redondeados
    borderRadius: 20, // Bordes redondeados para el botón
    color: 'gray', // Texto blanco para el botón
  },
  // Añade más estilos si es necesario
});

export default PasswordResetScreen;
