// components/Topic.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Topic = ({ name, description, isComplete, color, onPress }) => {
  
  const cardStyle = StyleSheet.flatten([styles.card, { backgroundColor: color }]);
  
  return (
    <TouchableOpacity style={cardStyle} onPress={onPress}>
      <View style={[styles.statusIndicator, isComplete ? styles.complete : styles.incomplete]} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#6C63FF', // Este es un color de ejemplo, ajusta el color según tu diseño
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  statusIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginRight: 20,
  },
  complete: {
    backgroundColor: '#FFFFFF', // O el color que uses para indicar completitud
  },
  incomplete: {
    backgroundColor: 'transparent',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#1c1c1c', // Asumiendo que quieres texto blanco
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  description: {
    color: '#1c1c1c', // Asumiendo que quieres texto blanco
    fontSize: 14,
  },
});

export default Topic;
