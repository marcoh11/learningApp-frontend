import { firestore } from './firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';



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
  
  export { subscribeToLeaderboard };

/* export const getLeaderBoard = async () => {
    const leaderBoardRef = collection(firestore, 'leaderboard');
    try {
      const snapshot = await getDocs(leaderBoardRef);
      const leaderboard = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(leaderboard); // Imprime un array de objetos topic en la consola
      return leaderboard; // Retorna un array de objetos topic
    } catch (error) {
      console.error("Error al obtener el leaderBoard:", error);
      throw new Error("Error al obtener el leaderBoard");
    }
};
 */