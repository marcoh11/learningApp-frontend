import { firestore } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';


// Función para crear un documento de usuario en Firestore
const createUserDocument = async (uid, userData) => {
  try {
    await setDoc(doc(firestore, 'users', uid), userData);
    console.log('Documento de usuario creado con éxito.');
    const leaderboardData = {
      fullname: `${userData.name} ${userData.lastName}`,
      score: 0,
    };
    await setDoc(doc(firestore, 'leaderboard', uid), leaderboardData);
    console.log('Documento de leaderboard creado con éxito.');
  } catch (error) {
    console.error('Error al crear el documento de usuario:', error);
    throw error;
  }
};


// Función para obtener un documento de usuario específico por UID
const getUserDocument = async (uid) => {
  try {
    const docRef = doc(firestore, 'users', uid);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      console.log('Documento de usuario:', docSnapshot.data());
      return { uid, ...docSnapshot.data() }; // Retorna el UID y los datos del documento
    } else {
      console.log('No se encontró el documento de usuario.');
      return null; // O manejar como prefieras
    }
  } catch (error) {
    console.error('Error al obtener el documento de usuario:', error);
    throw error;
  }
};


export { createUserDocument,getUserDocument };