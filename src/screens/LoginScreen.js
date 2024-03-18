import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from '../services/authService';
import { ImageBackground } from 'react-native';


// Importaciones de NativeBase
import { Box, VStack, FormControl, Input, Button} from 'native-base';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      Alert.alert('Bienvenido', `Bienvenido! ${user.email}`, [
        { text: 'OK' } // Reemplaza 'Main' por el nombre de tu pantalla principal
      ]);

      const user = await signInWithEmailAndPassword(email, password);
      // Si el inicio de sesión es exitoso, muestra una alerta y navega a la pantalla principal
      Alert.alert('Bienvenido', `Bienvenido! ${user.email}`, [
        { text: 'OK', onPress: () => navigation.navigate('Main') } // Reemplaza 'Main' por el nombre de tu pantalla principal
      ]);
    } catch (error) {
      // Muestra un mensaje de error si la autenticación falla
      Alert.alert('Error de inicio de sesión', error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')} // Asegúrate de que la ruta de la imagen es correcta
      style={styles.background}
    >
      <Box flex={1} alignItems="center" justifyContent="center">
        <VStack space={4} width="90%" maxW="300px">
          <FormControl>
            <FormControl.Label _text={{ color: 'white' }}>Usuario</FormControl.Label>
            <Input 
              placeholder="Escribe tu usuario" 
              onChangeText={setEmail} 
              value={email} 
              autoCapitalize="none"
              color="white"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{ color: 'white' }}>Contraseña</FormControl.Label>
            <Input 
              placeholder="Escribe tu contraseña" 
              onChangeText={setPassword} 
              value={password} 
              type="password"
              autoCapitalize="none"
              color="white"
            />
          </FormControl>
          <Button onPress={handleLogin} colorScheme="blue">Iniciar Sesión</Button>
        </VStack>
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // Añade aquí más estilos para tus componentes si es necesario
});

export default LoginScreen;