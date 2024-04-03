import React from 'react';
import { View, Text, StyleSheet, TextInput,Button ,Image,TouchableOpacity} from 'react-native';
import { useAuth } from '../state/AuthContext'; 
import { colors } from '../config/colors';
import { signOut } from '../services/authService';
import { Ionicons } from '@expo/vector-icons';
const Profile = () => {
  const { currentUser } = useAuth(); // Accede al usuario actual
  const handleSignOut = async () => {
    try {
      await signOut();
      //navigation.navigate('Login'); 
    } catch (error) {
      console.error('Error al cerrar la sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' }} // Reemplazar con la ruta a tu imagen o importación local
          style={styles.profileImage}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Nombres</Text>
        <TextInput
          style={styles.input}
          value={currentUser?.name || 'Nombres no disponible'}
          editable={false} // Si no quieres que sea editable
        />
        <Text style={styles.label}>Apellidos</Text>
        <TextInput
          style={styles.input}
          value={currentUser?.lastName || 'Apellidos no disponible'}
          editable={false} // Si no quieres que sea editable
        />
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          value={currentUser?.email || 'Correo no disponible'}
          editable={false}
        />
        <Text style={styles.label}>Salon</Text>
        <TextInput
          style={styles.input}
          value={String(currentUser?.groupId ?? 'Salon no disponible')}
          editable={false}
        />
      </View>
      
      <TouchableOpacity onPress={handleSignOut} style={styles.buttonLogOut} >
      <View style={styles.iconContainer}>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </View>
      <Text style={styles.label}>Cerrar Sesión</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background, // Fondo negro como en tu diseño
    alignItems: 'center', // Centrar horizontalmente
    paddingTop:50,
    //justifyContent: 'center', // Centrar verticalmente
  },
  card: {
    backgroundColor: colors.secondary, // Fondo oscuro para la tarjeta
    padding: 20,
    borderRadius: 10, // Bordes redondeados
    width: '80%', // Ancho de la tarjeta
  },
  label: {
    color: 'white', // Color de texto
    marginBottom: 5, // Espacio debajo de la etiqueta
  },
  input: {
    backgroundColor: colors.tertiary, // Fondo aún más oscuro para los inputs
    color: 'white', // Color de texto
    marginBottom: 15, // Espacio debajo de los inputs
    padding: 8,
    paddingLeft: 20, // Espaciado interno
    borderRadius: 30, // Bordes redondeados
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 160, // Ajustar según tu diseño
    height: 160, // Debe ser igual al width para mantener la imagen cuadrada
    borderRadius: 80, // La mitad del width y height para hacerla redonda
    borderWidth: 3, // Si quieres un borde
    borderColor: colors.secondary, // Color del borde
    marginBottom: 10,
  },
  buttonLogOut: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation:0,
    marginTop:25
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default Profile;
