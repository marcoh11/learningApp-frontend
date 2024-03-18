// services/authService.js
import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from './firebase'; // Asegúrate de exportar 'app' desde tu archivo firebase.js

const auth = getAuth(app);

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await firebaseSignInWithEmailAndPassword(auth, email, password);
    console.log('Usuario autenticado:', userCredential.user); // Imprime el usuario autenticado en la consola
    return userCredential.user;
  } catch (error) {
    let errorMsg = '';
    console.log(error.message)
  }
};

export { signInWithEmailAndPassword };
