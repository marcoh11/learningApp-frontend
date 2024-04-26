import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuizProgress = ({ currentQuestionIndex, totalQuestions }) => {
  return (
    <View style={styles.progressContainer}>
      <Text>{`Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`}</Text>
      {/* Aquí podrías agregar una barra de progreso visual si lo deseas */}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    // Tus estilos aquí
  },
});

export default QuizProgress;
