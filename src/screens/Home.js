// src/screens/Home.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import { colors } from '../config/colors';
import { getTopics } from '../services/topicService';
import  Topic  from '../components/Topic';
import  TopicSkeleton  from '../components/TopicSkeleton'; 

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const topicsData = await getTopics();
        setTopics(topicsData);
      } catch (error) {
        // Maneja el error aquí, tal vez mostrando un mensaje al usuario
        console.error('Error al cargar los temas:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  if (loading) {
    return (
      <View style={styles.skeletonContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <TopicSkeleton key={index} />
        ))}
      </View>
    );
    //return <Text>Loading...</Text>; // O tu componente de carga personalizado
  }

  return (
    <ScrollView style={styles.container}>
      {topics.map((topic) => (
        <Topic
          key={topic.id}
          name={topic.name}
          description={topic.description}
          isComplete={topic.isComplete}
          color={topic.color}
          // Suponiendo que tienes una función para manejar la completitud del tema
          onComplete={() => handleComplete(topic.id)}
        />
      ))}
    </ScrollView>
    /* <View style={styles.skeletonContainer}>
    {Array.from({ length: 5 }, (_, index) => (
      <TopicSkeleton key={index} />
    ))}
  </View> */
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    backgroundColor: colors.background
    // Agrega tus estilos aquí
  },
  // Más estilos si los necesitas
});


// Ejemplo de función handleComplete
const handleComplete = (topicId) => {
  // Lógica para manejar la acción de completar un tema
  console.log(`El tema con id ${topicId} se ha completado`);
  // Aquí podrías llamar a una función de actualización en tu servicio o actualizar el estado local
};

export default Home;
