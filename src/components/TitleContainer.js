import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import TypingEffect from './TypingEffect';
import { colors } from '../config/colors';

const TitleContainer =({title})=>{
    return(
        <View style={styles.titleContainer}>
        <Fontisto name="angle-dobule-right" size={14} color="#1A1A1A" marginBottom={20}/>
        <TypingEffect 
        text={title} 
        speed={50} 
        textStyle={styles.title}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
      paddingLeft:10,
      paddingTop:20,
      marginBottom:40,
      fontSize: 30,
      color: '#1A1A1A',
    },
    titleContainer:{
      marginLeft:30,
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight:20
    }
  });

  export default TitleContainer;