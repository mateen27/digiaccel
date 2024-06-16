import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Video, ResizeMode } from "expo-av";

const MainScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { width, height } = Dimensions.get("window");
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Dashboard */}
      <View style={styles.dashboardContainer}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.dashboardText}>Back</Text>
      </View>
      {/* Page Title */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingStyle}>Digital Shopper Journey</Text>
        <Text style={styles.subHeadingStyles}>&lt; Previous        Next &gt;</Text>
      </View>
      <View>
        <Video
          ref={video}
          style={styles.video}
          source={require("../images/video.mp4")}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          volume={1.0}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      {/* Content List */}
      <View style={styles.contentContainer}>
        <View style={{ marginTop: 10, gap: 15, flexDirection: "row" }}>
          <AntDesign
            name="menu-unfold"
            size={24}
            color="#0469DE"
            style={{ marginLeft: 25 }}
          />
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#0469DE" }}>
            Content List
          </Text>
        </View>
        <Pressable onPress={toggleModal}>
          <AntDesign
            name="down"
            size={22}
            color="#0469DE"
            style={{ marginRight: 25 }}
          />
        </Pressable>
      </View>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Content List</Text>
            <View style={styles.contentList}>
              <Text style={styles.modalItem}>Digital Journeys Explainer</Text>
              <Text style={styles.modalItem}>eCommerce Shopping Missions</Text>
              <Text style={styles.modalItem}>Additional Reading</Text>
              <Text style={styles.modalItem}>Shopping Missions Quiz</Text>
              <Text style={styles.modalItem}>Swiggy Case Study</Text>
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Queries and Notes Section */}
      <View style={styles.queriesContainer}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View style={styles.underlineContainer}>
            <View style={{ flexDirection: "row", gap: 3 }}>
              <Feather name="message-circle" size={22} color="black" />
              <Text style={styles.queriesText}>Queries</Text>
            </View>
            <View style={styles.underline} />
          </View>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <MaterialIcons name="edit-note" size={26} color="#68696D" />
            <Text style={{ color: "#68696D", fontSize: 16, fontWeight: "600" }}>
              Notes
            </Text>
          </View>
        </View>
      </View>

      {/* TextInput for giving queries */}
      <View style={styles.queryInputContainer}>
        <TextInput
          style={styles.queryInput}
          placeholder={
            "Ask your queries here...\nA mentor will respond in 24 Hrs."
          }
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Button for Submiting the queries */}
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Submit Query</Text>
      </Pressable>

      {/* Asked Queries */}
      <View style={styles.askedQueriesContainer}>
        <Text style={styles.askedQueriesText}>Asked queries</Text>
        {/* Number of queries */}
        <View style={styles.queryOneContainer}>
          <Text style={{ color: "#747272" }}>
            Wanted to initiate discussion on the book which was an optional
            reading in this module.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <Text style={{ color: "#747272", fontSize: 13 }}>7 Days ago</Text>
            <Text style={{ color: "#747272", fontSize: 13 }}>Harshit Omar</Text>
          </View>
        </View>
        <View style ={{ width: responsiveScreenHeight(10), backgroundColor: '#333', }}/>
        <View style={styles.queryTwoContainer}>
          <FontAwesome6 name="circle-user" size={24} color="black" />
          <Text style={{ color: "#747272", fontSize: 12, fontWeight: "400" }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
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
  headingContainer: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingStyle: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
  },
  subHeadingStyles: {
    color: "#0469DE",
    fontSize: 13,
    fontWeight: "600",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 300,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E5EFFA",
    height: responsiveScreenHeight(5),
    alignItems: "center",
  },
  queriesContainer: {
    backgroundColor: "#F2F3F7",
    width: "100%",
    marginTop: 40,
    marginLeft: 24,
  },
  queriesText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  underlineContainer: {
    alignItems: "center",
  },
  underline: {
    height: 3,
    backgroundColor: "#0469DE",
    marginTop: 2,
    width: "120%",
  },
  queryInputContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    padding: 18,
  },
  queryInput: {
    fontSize: 16,
    color: "#000000",
  },
  buttonContainer: {
    backgroundColor: "#0469DE",
    width: responsiveScreenWidth(30),
    marginTop: 12,
    height: responsiveScreenHeight(5),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  askedQueriesContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 18,
    elevation: 6,
  },
  askedQueriesText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    marginLeft: 10,
  },
  queryOneContainer: {
    borderRadius: 5,
    padding: 15,
    backgroundColor: "#F2f2f2",
    marginTop: 15,
    elevation: 4,
    marginHorizontal: 10,
  },
  queryTwoContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#F2f2f2",
    marginTop: 25,
    padding: 20,
    gap: 15,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentList: {
    alignItems: "flex-start",
  },
  modalItem: {
    fontSize: 18,
    paddingVertical: 5,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0469DE",
    borderRadius: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});
