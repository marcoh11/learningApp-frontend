import React from 'react';
import { View, StyleSheet } from 'react-native';
import TypingEffect from './TypingEffect';
import { colors } from '../config/colors';


const MainTitleContainer =({title})=>{
    return(
        <View style={styles.titleContainer}>
        <TypingEffect 
        text={title} 
        speed={100} 
        textStyle={styles.title}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
      paddingLeft:10,
      paddingTop:20,
      marginBottom:20,
      fontSize: 35,
      fontFamily: 'Roboto',
      color: 'white',
    },
    titleContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf:'center',
      marginBottom:20,
    }
  });

  export default MainTitleContainer;