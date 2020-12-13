import React from 'react'
import { TextInput, TouchableOpacity, Modal, Text, View, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../App'

function ModalJoin({ setIsModalVisable }) {
  return (
    <View style={{ height: 100 }}>
      <Modal
        transparent={true}
        visible={true}
      >
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <Text style={gloStyles.blackText}>Type in Group Key</Text>
            <TextInput style={{ ...gloStyles.inputStyle, margin: 10 }} />

            <TouchableOpacity style={gloStyles.button} onPress={() => setIsModalVisable(false)}>
              <Text style={gloStyles.blackText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute', bottom: '50%', right: '15%'
  },
  modalArea: {
    justifyContent: 'center', alignItems: 'center', borderRadius: 10, height: 200, width: 300, backgroundColor: 'pink'
  }
})
export default ModalJoin
