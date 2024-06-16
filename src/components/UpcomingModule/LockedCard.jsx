import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CompletedCard from "../CompletedModule/CompletedCard";
import UpcomingModule from "./UpcomingModule";
import LockedModule from "./LockedModule";
const data = require('../../data/data.json');

const LockedCard = () => {
    return (
        <View style={styles.upcomingContainer}>
            <View style={styles.listContainer}>
                {data.map((item) => (
                    <LockedModule key={item.id} item={item} />
                ))}
            </View>
        </View>
    );
};

export default LockedCard;

const styles = StyleSheet.create({
    upcomingContainer: {
        backgroundColor: "#fff",
        flex: 1,
        height: "100%",
        width: '100%',
    },
});
