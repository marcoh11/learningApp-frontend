// services/firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC2yTPUt4bzCyPjZh5VihtUmbHhRVGSbxI",
  authDomain: "learningapp-653e1.firebaseapp.com",
  projectId: "learningapp-653e1",
  storageBucket: "learningapp-653e1.appspot.com",
  messagingSenderId: "292260095948",
  appId: "1:292260095948:web:c1e26312f7d17c10829f69"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth, app };