// src/screens/Home.jsimport { ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { subscribeToLeaderboard } from '../services/leaderBoardService';
import { colors } from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import  TitleContainer  from '../components/TitleContainer';

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    // Suscribirse a los cambios del leaderboard
    const unsubscribe = subscribeToLeaderboard((newLeaderBoard) => {
      setLeaderBoard(newLeaderBoard);
    });

    // Desuscribirse cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  const getPositionIconName = (index) => {
    const validIndex = Math.max(0, Math.min(index, 5))+1;
    return `numeric-${validIndex}-circle`;
  };
  const getPositionIconColor = (index) => {
    switch (index) {
      case 0: return "#b29600";
      case 1: return "#727272";
      case 2: return "#804f1f"; // Un color cobre para el tercer lugar
      default: return null;
    }
  };
  const getPositionEmoji = (index) => {
    switch (index) {
      case 0: return "🥇";
      case 1: return "🥈";
      case 2: return "🥉";
      default: return null;
    }
  }
  const getPositionColor = (index) => {
    switch (index) {
      case 0: // Primera posición
        return '#ffd700'; // Dorado
      case 1: // Segunda posición
        return '#C0C0C0'; // Plata
      case 2: // Tercera posición
        return '#CD7F32'; // Bronce/Cobre
      default:
        return 'white'; // Color de fondo por defecto para las demás posiciones
    }
  };

  const renderItem = ({ item,index }) => {
    const backgroundColor = getPositionColor(index);
    const iconName = getPositionIconName(index);
    const iconColor = getPositionIconColor(index);
    const emoji = getPositionEmoji(index);
    return(
    <View style={[styles.itemContainer, { backgroundColor }]}>
      <View style={styles.leftContainer}>
      {iconName && <MaterialCommunityIcons name={iconName} size={24} color={iconColor} style={styles.icon} />}
      <Text style={[styles.text, styles.name]}>{emoji} {item.fullname}</Text>
      </View>
     <Text style={[styles.text, styles.score]}>{item.score} p.</Text>
    </View>
  )
};

  return (
    <View style={styles.container}>

    {/* <View style={styles.titleContainer}>
    <Fontisto name="angle-dobule-right" size={14} color="white" marginBottom={20}/>
    <Text style={[styles.text, styles.title]}>Puntuación 🥳</Text>
    </View> */}

    <TitleContainer
          title="Puntuación 🥳"
    />


      <FlatList
        data={leaderBoard}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Considera la altura de la barra de estado o del encabezado, si es necesario
    backgroundColor: colors.background, // Un color de fondo ligero que sea agradable a la vista
    //alignItems: 'center',
  },
  itemContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingRight:15,
    backgroundColor: 'white', // Fondo blanco para cada elemento
    borderBottomWidth: 1,
    //borderBottomColor: '#E0E0E0', // Un color de borde suave
    marginHorizontal: 30, // Agrega un margen horizontal para no pegar los elementos a los bordes
    borderRadius: 5, // Bordes redondeados para los elementos de la lista
    marginTop: 5, // Espacio entre elementos de la lista
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // No es necesario agregar flex: 1 aquí a menos que quieras que el nombre ocupe todo el espacio hasta el puntaje
  },
  text: {
    fontSize: 16, // Un tamaño de fuente que sea legible
    color: '#333', // Un color de texto que contraste adecuadamente con el fondo blanco
  },
  name: {
    fontWeight: 'bold',
    margin: 10// Nombre en negrita para destacar
  },
  score: {
    color: "gray", // Utiliza el color primario de tu paleta para los puntajes
    fontWeight: '900',
   // marginLeft:100 // Un poco más de peso para destacar el puntaje
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default LeaderBoard;
