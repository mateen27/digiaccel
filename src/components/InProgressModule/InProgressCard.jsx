import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const InProgressCard = ({ item, onPress }) => {
  // navigation
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Main')}>
    <View style={styles.imageContainer}>
      <Image source={require("../../images/image.jpg")} resizeMode='cover' style={styles.image} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.remaining}>{item.remaining}</Text>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '90%' }]} />
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default InProgressCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: responsiveScreenHeight(20),
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginLeft: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  detailsContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  remaining: {
    fontSize: 14,
    color: '#0469DE',
  },
  progressContainer: {
    backgroundColor: '#e0e0e0',
    height: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  progressBar: {
    backgroundColor: '#2196F3',
    height: '100%',
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
