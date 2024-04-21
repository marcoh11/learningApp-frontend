import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';


export const getTopics = async () => {
    const topicsRef = collection(firestore, 'topics');
    try {
      const snapshot = await getDocs(topicsRef);
      const topics = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(topics); // Imprime un array de objetos topic en la consola
      return topics; // Retorna un array de objetos topic
    } catch (error) {
      console.error("Error al obtener los topics:", error);
      throw new Error("Error al obtener los topics");
    }
};
