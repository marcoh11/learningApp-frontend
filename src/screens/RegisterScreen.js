// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert ,StyleSheet} from 'react-native';
import { registerUser } from '../services/authService'; // Asegúrate de que la ruta sea correcta
import { colors } from '../config/colors';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');


  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleRegister = async () => {
    // Validar el correo electrónico
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido.');
      return;
    }
  
    // Validar la longitud de la contraseña (ejemplo: mínimo 6 caracteres)
    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }
  
    try {
      const userData = { email, password, name, lastName };
      const newUser = await registerUser(userData);
      console.log('Nuevo usuario registrado:', newUser);
    } catch (error) {
      console.log(error.code); // Firebase Auth proporciona el código de error
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'El correo electrónico ya está registrado.');
      } else {
        Alert.alert('Error', 'Ocurrió un error durante el registro. Por favor, intenta de nuevo.');
      }
    }
  };

  return (
    <View  style={styles.container}>
      <TextInput 
        placeholder="Correo electrónico" 
        placeholderTextColor="white"
        value={email} 
        onChangeText={setEmail} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Contraseña" 
        placeholderTextColor="white"
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Nombre" 
        placeholderTextColor="white"
        value={name} 
        onChangeText={setName} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Apellido" 
        placeholderTextColor="white"
        value={lastName} 
        onChangeText={setLastName} 
        style={styles.input} 
      />

     <View style={styles.buttonContainer}>
        <Button title="Registrar" onPress={handleRegister} color="red" />
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // El color de fondo del contenedor
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'gray', // Color de fondo para los TextInput
    color: 'white', // Color del texto
    borderRadius: 20, // Bordes redondeados
    width: '80%', // Ancho del TextInput
    padding: 10, // Padding interno
    paddingLeft:15,
    marginBottom: 20, // Espacio entre cada TextInput
    fontSize: 16, // Tamaño del texto
  },
  buttonContainer: {
    marginTop:15,
    width: '80%', // Ancho del botón
    borderRadius: 20, // Bordes redondeados para el botón
    overflow: 'hidden', // Oculta cualquier overflow para mantener el borderRadius
  },
});
export default RegisterScreen;

