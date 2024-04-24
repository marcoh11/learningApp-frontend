import { View,StyleSheet } from 'react-native';
const TopicSkeleton = () => {
    return (
      <View style={styles.skeletonCard}>
      <View style={styles.skeletonStatusIndicator} />
      <View style={styles.skeletonTextContainer}>
        <View style={styles.skeletonTitle} />
        <View style={styles.skeletonDescription} />
      </View>
    </View>
    );
  };

  const styles = StyleSheet.create({
    skeletonCard: {
      backgroundColor: '#D3D3D3', // Color gris plomo para el esqueleto
      borderRadius: 10,
      padding: 20,
      marginBottom: 15,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    skeletonStatusIndicator: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#E0E0E0', // Un tono ligeramente diferente para el indicador de estado
      marginRight: 20,
    },
    skeletonTextContainer: {
      flex: 1,
    },
    skeletonTitle: {
      backgroundColor: '#E8E8E8',
      height: 20,
      width: '70%',
      marginBottom: 6,
      borderRadius: 4,
    },
    skeletonDescription: {
      backgroundColor: '#E8E8E8',
      height: 14,
      width: '50%',
      borderRadius: 4,
    },
  });
  
  export default TopicSkeleton;