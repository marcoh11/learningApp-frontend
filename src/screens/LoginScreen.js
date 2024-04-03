import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from '../services/authService';
import { ImageBackground } from 'react-native';
import ModalMessage from '../components/ModalMessage';



// Importaciones de NativeBase
import { Box, VStack, FormControl, Input, Button} from 'native-base';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('success'); // 'success', 'warning' o 'error'
  const [modalText, setModalText] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    
    try {
      const user = await signInWithEmailAndPassword(email, password);
      setModalType('success');
      setModalText(`Bienvenido! ${user.email}`);
      setModalVisible(true);
     /*  setTimeout(() => {
        navigation.navigate("Main");
        setModalVisible(false);
      }, 1000); */
    } catch (error) {
      setModalType('error');
      setModalText(`Error de inicio de sesión ${error.message}`);
      setModalVisible(true);
      /* setTimeout(() => {
        setModalVisible(false);
      }, 2000); */
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background_blue.png')} // Asegúrate de que la ruta de la imagen es correcta
      style={styles.background}
    >
      <Box flex={1} alignItems="center" style={styles.container}>
        <VStack space={3} width="90%" maxW="300px">
          <FormControl>
            <FormControl.Label _text={{ color: 'white' }}>Correo</FormControl.Label>
            <Input 
              placeholder="Escribe tu correo" 
              onChangeText={setEmail} 
              value={email} 
              autoCapitalize="none"
              color="black"
              style={{ backgroundColor: 'white'}}
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
              color="black"
              style={{ backgroundColor: 'white'}}
            />
          </FormControl>
          <VStack space={3} alignItems="center" style={{ marginTop: 50}}>
          <Button width="60%" colorScheme="red">Registrarse</Button>
          <Button width="60%" onPress={handleLogin} colorScheme="blue">Iniciar Sesión</Button>
          </VStack>
          
        </VStack>
      </Box>
      <ModalMessage
      type={modalType}
      text={modalText}
      isVisible={modalVisible}
      onClose={() => setModalVisible(false)}
    />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container:{
    marginTop:350
  }
  // Añade aquí más estilos para tus componentes si es necesario
});

export default LoginScreen;