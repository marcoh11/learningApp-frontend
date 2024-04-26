import { firestore } from './firebase';
import { collection, doc, getDoc, updateDoc, query, orderBy, onSnapshot } from 'firebase/firestore';



const subscribeToLeaderboard = (updateLeaderboard) => {
    const q = query(collection(firestore, 'leaderboard'), orderBy('score', 'desc'));
  
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const users = [];
      querySnapshot.forEach(doc => {
        users.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      updateLeaderboard(users);
    });
  
    // Retorna la función para desuscribirse
    return unsubscribe;
  };

  const updateScoreInLeaderboard = async (UID, scoreToAdd) => {
    const docRef = doc(firestore, 'leaderboard', UID);  // Referencia al documento
    const docSnap = await getDoc(docRef);              // Obtener el documento actual

    if (docSnap.exists()) {
        // El documento existe, procedemos a actualizar el score
        const currentScore = docSnap.data().score || 0;  // Capturar el score actual, default es 0 si no existe
        const newScore = currentScore + scoreToAdd;
        await updateDoc(docRef, {
            score: newScore
        });
    } else {
        // El documento no existe, podría ser necesario crearlo o manejar el error
        console.log('Documento no encontrado:', UID);
        // Opcionalmente, puedes añadir un documento si es necesario
        // await setDoc(docRef, { score: scoreToAdd });
    }
};
  
  
  export { subscribeToLeaderboard,updateScoreInLeaderboard };
