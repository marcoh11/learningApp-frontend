import { firestore } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Añade el parámetro idTopic para especificar el ID del topic
const getSubTopics = async (idTopic) => {
    const subTopicsRef = collection(firestore, 'subtopics');  // Asegúrate de que 'subtopics' es el nombre correcto de la colección
    try {
      // Crea una consulta que filtra los subtopics por idTopic
      const q = query(subTopicsRef, where("idTopic", "==", idTopic));
      const snapshot = await getDocs(q);
      const subtopics = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(subtopics); // Imprime un array de objetos subtopic en la consola
      return subtopics; // Retorna un array de objetos subtopic
    } catch (error) {
      console.error("Error al obtener los subtopics:", error);
      throw new Error("Error al obtener los subtopics");
    }
};
export {getSubTopics }
