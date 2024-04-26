import React from 'react';
import { View, StyleSheet } from 'react-native';
import Question from './Question';
import AnswerList from './AnswerList';
import TitleContainer from './TitleContainer';

const QuizContainer = ({ question, onAnswerSelect, timeForQuestion }) => {
  return (
    <View style={styles.container}>
      <Question question={question.question} />
      <AnswerList
        answers={question.answers}
        onAnswerSelect={onAnswerSelect}
        isAnswered={false}
        correctAnswer={question.correctAnswer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuizContainer;
