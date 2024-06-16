import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
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
      <TouchableOpacity onPress={toggleModal}>
        <AntDesign
          name="down"
          size={22}
          color="#0469DE"
          style={{ marginRight: 25 }}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
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
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // Your existing styles
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentList: {
    alignItems: 'flex-start',
  },
  modalItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0469DE',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ModalComponent;
