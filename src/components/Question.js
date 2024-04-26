import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Question = ({ question }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingLeft:20,
    paddingRight:20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Question;
