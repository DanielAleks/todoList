import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons';

function RoomNameModal({ setModalRoomName }) {
  const [groupName, setGroupName] = useState('')

  return (
    <Modal
      transparent={true}
      visible={true}
    >
      <View style={gloStyles.modalBg}>
        <View style={styles.container}>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity
              style={gloStyles.x}
              onPress={() => setModalRoomName(false)}
            >
              <Feather
                name="x-circle"
                size={24}
                color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.editNameContainer}>
            <Text>Edit Your Group Name:</Text>
            <TextInput
              style={{ ...gloStyles.inputStyle }}
              value={groupName}
              placeholder='Group Name...'
              onChangeText={(text) => setGroupName(text)}
            />
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
  },
  editNameContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})
export default RoomNameModal
