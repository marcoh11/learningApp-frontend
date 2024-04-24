// src/screens/Home.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import { colors } from '../config/colors';
import { getTopics } from '../services/topicService';
import  Topic  from '../components/Topic';
import  TopicSkeleton  from '../components/TopicSkeleton'; 
import  TitleContainer  from '../components/TitleContainer';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const topicsData = await getTopics();
        const orderTopicData = topicsData.sort((a, b) => a.order - b.order);
        setTopics(orderTopicData);
      } catch (error) {
        // Maneja el error aquí, tal vez mostrando un mensaje al usuario
        console.error('Error al cargar los temas:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);
  
  const handleSelectTopic = (topicId, topicName) => {
    navigation.navigate('SubTopic', { topicId: topicId, topicName: topicName });
  };

  const TopicContainer =() => {
    if (loading) {
      // Si está cargando, mostrar esqueletos de los temas
      return (
        <>
          {Array.from({ length: 5 }, (_, index) => (
            <TopicSkeleton key={index} />
          ))}
        </>
      );
    } else {
      // Si no está cargando, mostrar la lista de temas
      return (
        <ScrollView>
          {topics.map((topic) => (
            <Topic
              key={topic.id}
              name={topic.name}
              description={topic.description}
              isComplete={topic.isComplete}
              color={topic.color}
              onComplete={() => handleComplete(topic.id)}
              onPress={() => handleSelectTopic(topic.id, topic.name,topic.color)}
            />
          ))}
        </ScrollView>
      );
    }
  } 
  return (
    <View style={styles.container}>
      <TitleContainer title="Escoge el tema que quieras aprender 🤟" />
      {TopicContainer()}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: colors.background
  },
});


const handleComplete = (topicId) => {
  console.log(`El tema con id ${topicId} se ha completado`);
};

export default Home;
