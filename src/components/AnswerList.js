import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

// Obtén el ancho de la ventana
const { width } = Dimensions.get('window');

const AnswerItem = ({ answer, isCorrect, isSelected, onAnswerSelect }) => {
  const backgroundColor = isSelected ? (isCorrect ? 'green' : 'red') : 'orange';
  return (
    <TouchableOpacity onPress={onAnswerSelect} style={[styles.answerItem, { backgroundColor }]}>
      <Text style={styles.answerText}>{answer}</Text>
    </TouchableOpacity>
  );
};

const AnswerList = ({ answers, onAnswerSelect, isAnswered, correctAnswer }) => {
  return (
    <View style={styles.container}>
      {answers.map((answer, index) => (
        <AnswerItem
          key={index}
          answer={answer}
          isCorrect={index === correctAnswer}
          isSelected={isAnswered && index === correctAnswer}
          onAnswerSelect={() => onAnswerSelect(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centra los elementos horizontalmente
    alignItems: 'center', // Centra los elementos verticalmente
    marginTop: 20,
  },
  answerItem: {
    width: '35%', // Ajusta el ancho para dos elementos por fila teniendo en cuenta el margen
    padding: 10,
    margin: 10, // Ajusta los márgenes según sea necesario
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center', // Asegúrate de que el contenido esté centrado
    alignItems: 'center',
  },
  answerText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default AnswerList;
