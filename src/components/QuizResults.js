import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const QuizResults = ({ score, onRetry, onExit }) => {


  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.resultText}>¡Tu puntaje fue de:</Text>
      <Text style={styles.scoreText}>{score}</Text>
      <Text style={styles.resultText}>Puntos 🎉!</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Reintentar" onPress={onRetry} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    backgroundColor: '#fff',
    paddingTop:40,
    alignItems: 'center',
    borderRadius: 10,
    padding: 40,
    marginTop:60,
    marginLeft:20,
    marginRight:20,
  },
  resultText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007AFF', // Color azul brillante
  },
  buttonsContainer: {
    marginTop: 50,
    alignItems: 'center',
    width: '100%',
  },
});

export default QuizResults;
