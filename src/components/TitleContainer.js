import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';


const TitleContainer =({title})=>{
    return(
        <View style={styles.titleContainer}>
        <Fontisto name="angle-dobule-right" size={14} color="white" marginBottom={20}/>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 16, 
      color: '#333', 
    },
    title:{
      paddingLeft:10,
      paddingTop:20,
      marginBottom:40,
      fontSize: 30,
      color: 'white',
    },
    titleContainer:{
      marginLeft:30,
      flexDirection: 'row',
      alignItems: 'center',
      
    }
  });

  export default TitleContainer;