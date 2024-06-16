import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Badge from "../components/Badge";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import InProgressCard from "../components/InProgressModule/InProgressCard";
import CompletedCard from "../components/CompletedModule/CompletedCard";
import UpcomingCard from "../components/UpcomingModule/UpcomingCard";
import LockedCard from "../components/UpcomingModule/LockedCard";
const data = require("../data/data.json");

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Dashboard */}
      <View style={styles.dashboardContainer}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.dashboardText}>Back to Dashboard</Text>
      </View>

      {/* Badge */}
      <Badge />

      {/* In Progress Cards */}
      <FlatList
        data={data}
        renderItem={({ item }) => <InProgressCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      {/* Recently Completed Cards */}
      <View style={styles.recentlyCompletedContainer}>
        <Text style={styles.recentlyCompletedText}>Recently Completed</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <CompletedCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.smallListContainer}
      />

      {/* Upcoming Modules Cards */}
      <View style={[styles.recentlyCompletedContainer, { backgroundColor: '#fff', width: '100%', marginLeft: 0 }]}>
        <Text style={[styles.recentlyCompletedText, { marginLeft: 24, marginTop: 20 }]}>Upcoming Modules</Text>
        <UpcomingCard />
        <LockedCard />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F7",
  },
  dashboardContainer: {
    marginTop: 16,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dashboardText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: "600",
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  recentlyCompletedContainer: {
    marginTop: 16,
    marginLeft: 24,
    // backgroundColor: '#fff'
  },
  recentlyCompletedText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
    color: "#5B5757",
  },
  smallListContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
