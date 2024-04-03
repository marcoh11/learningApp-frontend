import { View,StyleSheet } from 'react-native';
const TopicSkeleton = () => {
    return (
      <View style={styles.skeletonWrapper}>
        <View style={styles.skeletonCircle} />
        <View style={styles.skeletonText} />
        <View style={styles.skeletonTextLong} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    // ... otros estilos ...
    skeletonWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      // ... otros estilos que coincidan con tu componente Topic
    },
    skeletonCircle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#E1E1E1',
      marginRight: 16,
    },
    skeletonText: {
      width: 100,
      height: 20,
      backgroundColor: '#E1E1E1',
      marginBottom: 8,
    },
    skeletonTextLong: {
      width: 200,
      height: 20,
      backgroundColor: '#E1E1E1',
    },
  });
  export default TopicSkeleton;