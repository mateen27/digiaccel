import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CompletedCard from "../CompletedModule/CompletedCard";
import UpcomingModule from "./UpcomingModule";
const data = require('../../data/data.json');

const UpcomingCard = () => {
  return (
    <View style={styles.upcomingContainer}>
      <View style={styles.listContainer}>
        {data.map((item) => (
          <UpcomingModule key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default UpcomingCard;

const styles = StyleSheet.create({
  upcomingContainer: {
    backgroundColor: "#fff",
    flex: 1,
    height: "100%",
    width: '100%',
    marginTop: 16,
    // padding: 10
    // marginLeft: 24
  },
});
