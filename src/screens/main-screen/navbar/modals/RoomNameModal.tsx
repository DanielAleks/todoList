import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
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
      <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, .5)', display: 'flex' }}>

        <View style={{ backgroundColor: '#c43d3d', width: 250, height: 100, top: 100, left: '25%', borderRadius: 5, }}>

          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity style={{margin: 10}} onPress={() => setModalRoomName(false)}>
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
export default RoomNameModal
