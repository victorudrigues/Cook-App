
import { Modal, View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface AlertProps {
    visible: boolean,
    title: string,
    message: string,
    onCancel: () => void,
    onConfirm: () => void
}

export default function CustomAlert({ visible, title, message, onCancel, onConfirm }: AlertProps) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onCancel} style={[styles.button, { backgroundColor: "#FF5733" }]}>
            <Text style={styles.buttonText}>Não</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onConfirm} style={[styles.button, { backgroundColor: "#32CD32" }]}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
  );
}