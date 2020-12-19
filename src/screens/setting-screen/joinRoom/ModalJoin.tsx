import React from 'react'
import { TextInput, TouchableOpacity, Modal, Text, View, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../App'
import { Feather } from '@expo/vector-icons'
import { DynamicFeather } from '../../../reusables/dynamicStuff'

function ModalJoin({ setJoinModal }) {
  const featherData = { button: () => setJoinModal(false) }

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />

            <Text style={gloStyles.blackText}>Type in Group Key</Text>
            <TextInput style={{ ...gloStyles.inputStyle, margin: 10 }} />

            <TouchableOpacity style={gloStyles.button} onPress={() => setJoinModal(false)}>
              <Text style={gloStyles.whiteText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute',
    bottom: '50%',
    right: '20%',
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 150,
    width: 250,
    backgroundColor: '#c43d3d',
  },
})
export default ModalJoin
