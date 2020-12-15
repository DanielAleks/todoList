import React from 'react'
import { TextInput, TouchableOpacity, Modal, Text, View, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../App'
import { Feather } from '@expo/vector-icons';

function ModalJoin({ setJoinModal }) {
  return (
    <View style={{ height: 100 }}>
      <Modal
        transparent={true}
        visible={true}
      >
        <View style={gloStyles.modalBg}>
          <View style={styles.absoluteModal}>
            <View style={styles.modalArea}>
              <TouchableOpacity style={gloStyles.x} onPress={() => setJoinModal(false)}>
                <Feather name="x-circle" size={24} color="black" />
              </TouchableOpacity>

              <Text style={gloStyles.blackText}>Type in Group Key</Text>
              <TextInput style={{ ...gloStyles.inputStyle, margin: 10 }} />

            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute',
    bottom: '50%',
    right: '15%'
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 200,
    width: 300,
    backgroundColor: 'pink'
  }
})
export default ModalJoin
