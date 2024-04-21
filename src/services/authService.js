// services/authService.js
import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, getAuth,signOut as firebaseSignOut,createUserWithEmailAndPassword ,sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase';
import { createUserDocument } from './userService';


const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await firebaseSignInWithEmailAndPassword(auth, email, password);
    
    console.log('Usuario autenticado:', userCredential.user); 
    return userCredential.user;
  } catch (error) {
    let errorMsg = '';
    console.log(error.message)
  }
};
const signOut = async () => {
  try {
    await firebaseSignOut(getAuth());
    // El usuario ha cerrado sesión exitosamente
    // Puedes realizar acciones adicionales aquí si es necesario
  } catch (error) {
    // Manejar errores, por ejemplo, mostrar un mensaje al usuario
    throw error;
  }}

  const registerUser = async (userData) => {
    const { email, password, name, lastName } = userData;
    const userDocument = { name, lastName }
    try {
      console.log('Registrando usuario...');
      console.log('userData', userData);
      console.log('userDocument', userDocument);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Usuario creado con UID:', user.uid);
      await createUserDocument(user.uid, userDocument);
      return user;
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Correo de recuperación de contraseña enviado.");
      // Aquí puedes retornar un mensaje de éxito o realizar alguna acción adicional si es necesario
    } catch (error) {
      console.error("Error al enviar correo de recuperación:", error);
      throw error; // Puedes optar por manejar el error de manera diferente
    }
  };

export { signInWithEmailAndPassword , signOut,registerUser,resetPassword};
