// services/authService.js
import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, getAuth,signOut as firebaseSignOut } from 'firebase/auth';
import { app } from './firebase'; // Asegúrate de exportar 'app' desde tu archivo firebase.js
const auth = getAuth(app);

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

export { signInWithEmailAndPassword , signOut};
