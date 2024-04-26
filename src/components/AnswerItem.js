import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AnswerItem = ({ answerText, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Text style={styles.answerText}>{answerText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // Estilos para el botón/touchable de cada respuesta
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'orange', // color de ejemplo
    borderRadius: 5,
  },
  answerText: {
    // Estilos para el texto de la respuesta
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AnswerItem;
