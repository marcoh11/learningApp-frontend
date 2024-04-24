import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,FlatList  } from 'react-native';

//function "hello world"
const darkenColor = (hexColor) => {
   try{
  let r = parseInt(hexColor.substr(1, 2), 16);
  let g = parseInt(hexColor.substr(3, 2), 16);
  let b = parseInt(hexColor.substr(5, 2), 16);
  // Reduce cada componente por un 10%
  r = Math.min(255, parseInt(r * 1.20));  // Usamos Math.min para asegurarnos de no superar 255
  g = Math.min(255, parseInt(g * 1.20));
  b = Math.min(255, parseInt(b * 1.20));
  // Convierte a formato hexadecimal0
  r = r.toString(16).padStart(2, '0');
  g = g.toString(16).padStart(2, '0');
  b = b.toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
   }
   catch(e){
       return "#ffffff"
   }
}

const Card = ({ name, description, imageUrl,list,color }) => {
    const [aspectRatio, setAspectRatio] = useState(1);
 
    const cardStyle = StyleSheet.flatten([styles.card, { backgroundColor: color }]);
    const listContainerStyle = StyleSheet.flatten([styles.listContainer, { backgroundColor: darkenColor(color) }]);
    
    const handleImageLoaded = (width, height) => {
        const aspectRatio = width / height;
        setAspectRatio(aspectRatio); 
    };
 
    return (
      <View style={cardStyle}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            {name && <Text style={styles.title}>{name}</Text>}
            {description && <Text style={styles.description}>{description}</Text>}
            {list && <View style={listContainerStyle}>
                {list.map((item, index) => (
                    <Text key={index} style={styles.listItem}>
                    ➡️ {item}
                    </Text>
                ))}
            </View>}
          </View>
          {imageUrl && (
          <View style={styles.mediaContainer}>
              <Image
                source={{ uri: imageUrl }}
                style={[styles.image, { aspectRatio: aspectRatio }]}
                resizeMode="contain"
                onLoad={(event) => {const { width, height } = event.nativeEvent.source;
                        handleImageLoaded(width, height); 
                }}
              />
            </View>
          )}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      padding: 20,
      marginBottom: 15,
      marginHorizontal: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    contentContainer: {
      width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
    },
    textContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%', // Ajusta el ancho del texto al 100% del contenedor
    },
    listContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    listItem: {
        fontSize: 18,
        marginTop: 2,
    },
    mediaContainer: {
      width: '100%', // Asegura que el contenedor de la imagen tenga el mismo ancho que el texto
      marginTop: 10, // Ajusta el margen superior según sea necesario
    },
    title: {
      color: '#1c1c1c',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 4,
    },
    description: {
      color: '#1c1c1c',
      fontSize: 18,
    },
    image: {
      width: '100%',
      borderRadius: 10,
    },
  });

  export default Card;