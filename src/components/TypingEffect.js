import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TypingEffect = ({ text, speed = 150, textStyle = {} }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const characters = Array.from(text); // Esta línea maneja correctamente los emojis
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + characters[index]);
      index++;
      if (index === characters.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer); // Limpieza al desmontar el componente
  }, [text, speed]);

  return (
      <Text style={[textStyle]}>{displayedText}</Text>
  );
};

export default TypingEffect;
