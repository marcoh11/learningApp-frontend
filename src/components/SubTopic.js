import React from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import Card from '../components/Card';

const SubTopic =({subtopic})=>{
    return(
    <ScrollView  style={styles.scrollContainer}>
       
       <Card  name={subtopic.subtitle} description={subtopic.description} imageUrl={subtopic.imageUrl} color={subtopic.color} list={subtopic.list}/>
       {subtopic.content && subtopic.content.map((item, index) => (
                <Card 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    color={item.color}
                    list={item.list}
                />
            ))}
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {},
  });

export default SubTopic;