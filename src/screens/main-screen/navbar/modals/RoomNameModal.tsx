import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons';

function RoomNameModal({ setModalRoomName }) {
  const [groupName, setGroupName] = useState('')
  const [currentGroupName, setCurrentGroupName] = useState('')


  return (
    <Modal
      transparent={true}
      visible={true}
    >
      <View style={gloStyles.modalBg}>
        <View style={styles.container}>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={gloStyles.x} onPress={() => setModalRoomName(false)}>
              <Feather name="x-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Edit Your Group Name:</Text>
            <TextInput style={{ ...gloStyles.inputStyle }} value={groupName} placeholder={currentGroupName} onChangeText={(text) => setGroupName(text)} />
          </View>

        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c43d3d',
    width: 250,
    height: 100,
    top: 100,
    left: '25%',
    borderRadius: 5,
    display: 'flex'
  }
})
export default RoomNameModal
