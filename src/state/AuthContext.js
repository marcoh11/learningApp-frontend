import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from 'firebase/firestore';
// Asumiendo que app es tu configuración de Firebase inicializada
import { firestore , auth } from '../services/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

/* const fetchUserDetails = async (uid) => {
  const storage = getStorage(app);
  const fileRef = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/learningapp-653e1.appspot.com/o/users.json');  // Asegúrate de tener la ruta correcta
  try {
    const url = await getDownloadURL(fileRef);
    const response = await fetch(url);
    const users = await response.json();
    const user = users.find(user => user.UID === uid);
    return user || null;
  } catch (error) {
    console.error('Error al obtener los detalles del usuario:', error);
    return null;
  }
}; */
const fetchUserDetails = async (firestore, userId) => {
  try {
    console.log(userId)
    const userDocRef = doc(firestore, 'users', userId);
    const userDocSnapshot = await getDoc(userDocRef);
    return userDocSnapshot.exists() ? userDocSnapshot.data() : null;
  } catch (error) {
    console.error('Error al obtener los detalles del usuario:', error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDetails = await fetchUserDetails(firestore,user.uid);
        console.log("userDetails", userDetails)
        setCurrentUser({ ...user, ...userDetails });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const user = { currentUser, loading };
  console.log(user)
  return (
    <AuthContext.Provider value={user}>
    {children}
    </AuthContext.Provider>
);
};
