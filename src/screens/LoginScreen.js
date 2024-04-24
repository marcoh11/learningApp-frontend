import React, { useState } from 'react';
import { StyleSheet,ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from '../services/authService';
import { ImageBackground } from 'react-native';
import ModalMessage from '../components/ModalMessage';
import {colors} from '../config/colors';
import MainTitleContainer from '../components/MainTitleContainer';

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

  const handleGoToRegister = () => {
    navigation.navigate('Registrarse'); // Asegúrate de que 'Register' coincida con el nombre de tu pantalla definido en el StackNavigator
  };

  const handleGoToResetPassword = () => {
    navigation.navigate('Restablecer Contraseña'); // Asegúrate de que 'Register' coincida con el nombre de tu pantalla definido en el StackNavigator
  };





  return (
    <ScrollView
  contentContainerStyle={{ flexGrow: 1 }}
  keyboardShouldPersistTaps='handled'
>
    <ImageBackground
      source={require('../../assets/images/bgmain.jpg')} // Asegúrate de que la ruta de la imagen es correcta
      style={styles.background}
    >
    
      <Box flex={1} alignItems="center" style={styles.container}>
        <VStack space={3} width="90%" maxW="300px">
          <FormControl>
          {/* <MainTitleContainer
          title="AceleraMente 🚀"
           /> */}
          <Image
          source={require('../../assets/icons/icon_p.png')}// Reemplazar con la ruta a tu imagen o importación local
          style={styles.IconImage}
        /> 
            <FormControl.Label _text={{ color: 'white' }}>Correo</FormControl.Label>
            <Input 
              placeholder="Escribe tu correo" 
              onChangeText={setEmail} 
              value={email} 
              variant="unstyled" 
              autoCapitalize="none"
              style={styles.input}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{ color: 'white' }}>Contraseña</FormControl.Label>
            <Input 
              placeholder="Escribe tu contraseña" 
              onChangeText={setPassword} 
              value={password} 
              type="password"
              variant="unstyled" 
              autoCapitalize="none"
              style={styles.input}
            />
          </FormControl>
          <VStack space={3} alignItems="center" style={{ marginTop: 50}}>
          <Button width="60%" onPress={handleLogin} colorScheme="blue" borderRadius={10}>Iniciar Sesión</Button>
          <Button width="60%" colorScheme="red"  borderRadius={10} onPress={handleGoToRegister}>Registrarse</Button>
          <Button width="60%" colorScheme="green" borderRadius={10} onPress={handleGoToResetPassword}>Restablecer Contraseña</Button>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container:{
    marginTop:40
  },
  IconImage: {
    width: 120, // Ajustar según tu diseño
    height: 120, // Debe ser igual al width para mantener la imagen cuadrada
    // La mitad del width y height para hacerla redonda
    borderWidth: 3, // Si quieres un borde
    borderColor: colors.secondary, // Color del borde
    alignSelf:'center',
    marginBottom:150
  },
  input:{
    backgroundColor: colors.tertiary, // Fondo aún más oscuro para los inputs
    color: 'white', // Color de texto
    paddingLeft:15,
    padding:10,
    borderRadius:10,
   
  }
  // Añade aquí más estilos para tus componentes si es necesario
});

export default LoginScreen;