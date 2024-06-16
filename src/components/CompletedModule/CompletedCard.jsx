import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CompletedCard = ({ item }) => {

  // navigation
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Main')}>
    <View style={styles.imageContainer}>
      <Image source={require("../../images/image.jpg")} resizeMode='cover' style={styles.image} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View style = {{ flexDirection: 'row', marginTop: 5}}>
        <Text style={styles.remaining}>{item.completed}</Text>
        <Ionicons name="checkmark-circle" size={24} color="green" style={styles.checkIcon} />
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default CompletedCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  remaining: {
    fontSize: 14,
    color: '#13B87E',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  checkIcon: {
    marginLeft: 8,
  },
});
