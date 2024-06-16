import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const LockedModule = ({ item }) => {

  // navigation
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Main')}>
    <View style={styles.overlay} />
    <View style={styles.imageContainer}>
      <Image
        source={require("../../images/image.jpg")}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 8,
          gap: 5,
          backgroundColor: "#A3A1A1",
          width: responsiveScreenWidth(20),
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Text style={[styles.name, { fontWeight: "400", color: "grey" }]}>
          Locked
        </Text>
        <Fontisto name="locked" size={20} color="grey" />
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default LockedModule;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // fill the entire card
    backgroundColor: "#ccc", // grey color with 50% opacity
    borderRadius: 8, // match the card's border radius
    zIndex: 1, // place the overlay above other content
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: "hidden",
    zIndex: 2, // place the image above the overlay
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
    zIndex: 2, // place the details above the overlay
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    zIndex: 2, // place the name above the overlay
    color: "#A3A1A1",
  },
  remaining: {
    fontSize: 14,
    color: "#13B87E",
    zIndex: 2, // place the remaining text above the overlay
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  checkIcon: {
    marginLeft: 8,
    zIndex: 2, // place the icon above the overlay
  },
});
