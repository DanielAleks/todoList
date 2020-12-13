import React from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'

function RoomNameModal({ setModalRoomName }) {
  return (
    <Modal
      transparent={true}
      visible={true}
    >
      <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, .5)', }}>

        <View style={{ backgroundColor: '#c08021', width: 250, height: 200, top: 200, left: '25%', borderRadius: 5 }}>

          <TouchableOpacity style={gloStyles.button} onPress={() => setModalRoomName(false)}>
            <Text style={{ ...gloStyles.text }}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
export default RoomNameModal
